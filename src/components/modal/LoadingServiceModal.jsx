import { useEffect, useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { useServiceStatus } from "../../hooks/useServiceStatus";
import HealthService from "../../app/service/health/healthService";

export default function LoadingServiceModal({ healthUrl }) {
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const { setIsChecking } = useServiceStatus();
  const service = new HealthService();

  useEffect(() => {
    let timeoutId;

    const checkBackend = async () => {
      try {
        const res = await service.getHealth(healthUrl, { cache: "no-store" });
        console.log(res);
        if (res.status === 200) {
          clearTimeout(timeoutId);
          setIsChecking(false); // libera o app
        }
      } catch {
        // tenta novamente depois
      }
    };

    const intervalId = setInterval(checkBackend, 4000);
    checkBackend();

    timeoutId = setTimeout(() => {
      setTimeoutReached(true);
      clearInterval(intervalId);
    }, 60000); // 60 segundos

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [healthUrl, retrying, setIsChecking]);

  const handleRetry = () => {
    setRetrying(!retrying);
    setTimeoutReached(false);
    setIsChecking(true); // volta a mostrar o modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm text-center animate-fade-in-down">
        <div className="flex justify-center mb-4">
          <CloudArrowUpIcon className="w-12 h-12 text-blue-500 animate-bounce" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          ⏳ Iniciando o serviço...
        </h2>
        <p className="text-sm text-gray-600">
          A API está acordando. Isso pode levar alguns segundos...
        </p>

        {!timeoutReached && (
          <div className="mt-6 flex justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {timeoutReached && (
          <div className="mt-6">
            <p className="text-sm text-red-500">
              O serviço demorou mais do que o esperado.
            </p>
            <button
              onClick={handleRetry}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              🔁 Tentar novamente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
