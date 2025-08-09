import Navbar from "./views/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { setupAxiosInterceptors } from "./hooks/axiosInterceptors";
import LoadingServiceModal from "./components/modal/LoadingServiceModal";
import { useServiceStatus } from "./hooks/useServiceStatus";
import { useEffect } from "react";

export default function App() {
  const { isChecking, setIsChecking } = useServiceStatus();

  useEffect(() => {
    setupAxiosInterceptors(setIsChecking);
  }, []);

  const url = `${import.meta.env.VITE_API_URL}/api/health`;

  return (
    <>
      {isChecking ? (
        <LoadingServiceModal healthUrl={url} />
      ) : (
        <div className="bg-slate-900 min-h-screen">
          <Navbar />
          <AppRoutes />
        </div>
      )}
    </>
  );
}
