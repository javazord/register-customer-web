import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    cpf: "123.456.789-00",
    estado: "SP",
  },
  {
    id: 2,
    name: "Maria Souza",
    email: "maria@email.com",
    cpf: "987.654.321-00",
    estado: "RJ",
  },
  {
    id: 3,
    name: "Pedro Santos",
    email: "pedro@email.com",
    cpf: "456.123.789-00",
    estado: "MG",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana@email.com",
    cpf: "111.222.333-44",
    estado: "BA",
  },
  {
    id: 5,
    name: "Carlos Lima",
    email: "carlos@email.com",
    cpf: "555.666.777-88",
    estado: "RS",
  },
  {
    id: 6,
    name: "Lucas Rocha",
    email: "lucas@email.com",
    cpf: "888.999.000-11",
    estado: "AM",
  },
  {
    id: 7,
    name: "Fernanda Dias",
    email: "fernanda@email.com",
    cpf: "444.555.666-77",
    estado: "PE",
  },
];

export default function CustomerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="overflow-x-auto p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-700 text-gray-300 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">CPF</th>
                <th className="px-6 py-3 text-left">State</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((person, idx) => (
                <tr
                  key={person.id}
                  className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {person.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{person.cpf}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {person.estado}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-4 items-center">
                      <button
                        className="text-green-500 hover:text-green-400"
                        title="Editar"
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-400"
                        title="Excluir"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  );
}
