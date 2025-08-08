import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function CustomerTable({
  customer,
  onChange,
  onSearch,
  currentItems,
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onEdit,
  onDelete,
}) {
  return (
    <>
      <header>
        <div className="max-w-5xl mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            List Client
          </h1>
        </div>
      </header>

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
                onChange={onChange}
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
                onChange={onChange}
              />
            </Field>
            <div className="flex items-end">
              <Button
                className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
                onClick={onSearch}
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
                          onClick={() => onEdit(customer)}
                        >
                          <PencilSquareIcon className="h-5 w-5" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-400"
                          title="Excluir"
                          onClick={() => onDelete(customer.id)}
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

          <div className="flex items-center justify-between p-4 border-t border-gray-700">
            <button
              onClick={onPrev}
              disabled={currentPage === 1}
              className="text-sm text-white bg-gray-600 px-3 py-1 rounded disabled:opacity-30"
            >
              Previous
            </button>
            <span className="text-sm text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={onNext}
              disabled={currentPage === totalPages}
              className="text-sm text-white bg-gray-600 px-3 py-1 rounded disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
