import { useEffect, useState } from "react";
import CustomerService from "../app/service/customer/customerService";
import CustomerCard from "../components/card/CustomerCard";
import TotalCustomersCard from "../components/card/TotalCustomersCard";
import Carousel from "../components/Carousel";

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState([]);
  const service = new CustomerService();

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const responseCustomers = await service.getLastRegisters(); // axios retorna um objeto
        const responseTotal = await service.getCountCustomers();
        setTotal(responseTotal.data);
        setCustomers(responseCustomers.data); // pega só os dados
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <>
      <header>
        <div className="max-w-6xl mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome!
          </h1>
        </div>
      </header>

      <div className="flex flex-col items-center gap-8 w-full px-4 pb-3">
        {/* Cards lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          <CustomerCard customers={customers} />
          <TotalCustomersCard total={total} />
        </div>

        {/* Carousel abaixo ocupando todo espaço */}
        <div className="w-full">
          <Carousel />
        </div>
      </div>
    </>
  );
}
