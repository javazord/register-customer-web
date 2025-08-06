import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import CustomerService from "../../../app/service/customer/customerService";
import Dialog from "../../../components/modal/Dialog";
import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function CustomerTable({ customers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  if (!customers) customers = []; // evita erro se for null
  const [customerList, setCustomerList] = useState([]);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const [customer, setCustomer] = useState({
    cpf: "",
    email: "",
  });
  const navigate = useNavigate();
  const service = new CustomerService();

  // atualiza customerList sempre que "customers" mudar
  useEffect(() => {
    if (customers) {
      setCustomerList(customers);
    }
  }, [customers]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customerList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(customerList.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const editCustomer = (customer) => {
    navigate(`/edit-customer`, { state: { customer } });
  };

  const searchCustomer = () => {
    try {
      service.search(customer).then((response) => {
        setCustomerList(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCustomer = (id) => {
    service
      .erase(id)
      .then((response) => {
        setMsg("Customer with id " + id + " deleted!");
        setCustomerList(customerList.filter((c) => c.id !== id));
        setError(null);
      })
      .catch((erro) => {
        setError(erro.response?.data?.error || "Unexpected error");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="overflow-x-auto mb-4 text-sm ">
        <div className="max-w-5xl mx-auto">
          <Fieldset className="grid grid-cols-3 gap-4">
            <Field>
              <Label className="text-sm/6 font-medium text-white">CPF</Label>
              <Input
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="cpf"
                value={customer.cpf}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">Email</Label>
              <Input
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="email"
                value={customer.email}
                onChange={handleChange}
              />
            </Field>
            <div className="flex items-end">
              <Button
                className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
                onClick={searchCustomer}
              >
                Search
              </Button>
            </div>
          </Fieldset>
        </div>
      </div>
      <div className="overflow-x-auto p-6 text-white">
        <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-700 text-gray-300 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">#Id</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">CPF</th>
                  <th className="px-6 py-3 text-left">State</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((customer, idx) => (
                  <tr
                    key={customer.id}
                    className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.cpf}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.address?.state}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-4 items-center">
                        <button
                          className="text-green-500 hover:text-green-400"
                          title="Editar"
                          onClick={() => editCustomer(customer)}
                        >
                          <PencilSquareIcon className="h-5 w-5" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-400"
                          title="Excluir"
                          onClick={() => deleteCustomer(customer.id)}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {currentItems.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                Customers not found.
              </div>
            )}
          </div>

          {/* Paginação */}
          <div className="flex items-center justify-between p-4 border-t border-gray-700">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="text-sm text-white bg-gray-600 px-3 py-1 rounded disabled:opacity-30"
            >
              Previous
            </button>
            <span className="text-sm text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="text-sm text-white bg-gray-600 px-3 py-1 rounded disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {(error || msg) && (
        <Dialog
          msg={msg}
          erro={error}
          onClose={() => {
            setMsg(null);
            setError(null);
            navigate("/list-customer");
          }}
        />
      )}
    </>
  );
}
