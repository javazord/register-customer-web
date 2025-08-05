import { useEffect, useState } from "react";
import CustomerTable from "./CustomerTable";
import CustomerService from "../../../app/service/customer/customerService";

export default function CustomerListForm() {
  const [customers, setCustomers] = useState([]);
  const service = new CustomerService();

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await service.getAll(); // axios retorna um objeto
        setCustomers(response.data); // pega só os dados
      } catch (error) {
        console.error("Erro search customers:", error);
      }
    }

    fetchCustomers();
  }, []);

  return <CustomerTable customers={customers} />;
}
