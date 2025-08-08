import { useEffect, useState } from "react";
import CustomerService from "../app/service/customer/customerService";
import ListCustomerCard from "../components/card/ListCustomerCard";
import TotalCustomersCard from "../components/card/TotalCustomersCard";
import Carousel from "../components/carousel/Carousel";

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const service = new CustomerService();
        const responseCustomers = await service.getLastRegisters(); // axios retorna uma lista dos ultimos 5 registros
        const responseTotal = await service.getCountCustomers(); //axios retorna a quantidade total de clientes cadastrados
        setTotal(responseTotal.data);
        setCustomers(responseCustomers.data); // pega só os dados
      } catch (error) {
        console.error("Erro search customers:", error);
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
          <ListCustomerCard customers={customers} />
          <TotalCustomersCard total={total} />
        </div>

        {/* Carroussel */}
        <div className="w-full">
          <Carousel />
        </div>
      </div>
    </>
  );
}
