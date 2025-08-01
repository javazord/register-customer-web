import {
  Field,
  Label,
  Input,
  Fieldset,
  Button,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import clsx from "clsx";
import useCustomerForm from "../../../hooks/useCustomerForm";
import { states } from "../../../data/states";
import { useState } from "react";
import CustomerService from "../../../app/service/customer/customerService";

export default function CustomerRegisterForm() {
  const {
    formData,
    handleChange,
    handleChangeState,
    getFormattedCpf,
    handleChangeEmail,
  } = useCustomerForm();
  const [query, setQuery] = useState("");
  const service = new CustomerService();

  const filteredStates =
    query === ""
      ? states
      : states.filter((state) =>
          state.nome.toLowerCase().includes(query.toLowerCase())
        );

  const create = () => {
    try {
      service.save(formData).then((response) => {
        response.data;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Register Client
          </h1>
        </div>
      </header>
      <main className="h-screen">
        <div className="max-w-4xl mx-auto shadow-sm bg-slate-700 border rounded-lg border-white p-3 m-5">
          <Fieldset className="grid grid-cols-2 gap-4">
            <Field>
              <Label className="text-sm/6 font-medium text-white">Name</Label>
              <Input
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label className="block text-sm/6 font-medium text-white">
                Last Name
              </Label>
              <Input
                className={clsx(
                  "block w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
                )}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Field>
          </Fieldset>
          <Fieldset className="grid grid-cols-3 gap-4">
            <Field>
              <Label className="block text-sm/6 font-medium text-white">
                CPF
              </Label>
              <Input
                className={clsx(
                  "block w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
                )}
                type="text"
                name="cpf"
                inputMode="numeric"
                maxLength={14}
                value={getFormattedCpf(formData.cpf)}
                onChange={handleChange}
                placeholder="000.000.000-00"
              />
            </Field>
            <Field>
              <Label className="block text-sm/6 font-medium text-white">
                E-mail
              </Label>
              <Input
                className={clsx(
                  "block w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white "
                )}
                type="text"
                name="email"
                value={formData.email}
                placeholder="fulano@gmail.com"
                onChange={handleChangeEmail}
              />
              {console.log(formData.error)}
              {formData.error && (
                <p className="text-red-500 text-sm">{formData.error}</p>
              )}
            </Field>
            <Field>
              <Label className="block text-sm/6 font-medium text-white">
                Phone
              </Label>
              <Input
                className={clsx(
                  "block w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white "
                )}
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="(99) 99999-9999"
                onChange={handleChange}
              />
            </Field>
          </Fieldset>

          <div className="flex items-center gap-1 mt-10 ">
            <div className="w-10 divide-x-0 border border-1 border-dashed"></div>
            <p className="font-bold text-white pb-1">Address</p>
            <div className="flex-1 divide-x-0 border border-1 border-dashed"></div>
          </div>

          <Fieldset className="grid grid-cols-4 gap-4">
            <Field>
              <Label className="text-sm/6 font-medium text-white">State</Label>
              <Combobox
                value={states.find((s) => s.nome === formData.state) || ""}
                name="state"
                onChange={handleChangeState}
              >
                <ComboboxInput
                  className={clsx(
                    "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                  )}
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(state) => state?.nome || ""}
                  name="state"
                />
                <ComboboxOptions className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white shadow-lg">
                  {filteredStates.length === 0 ? (
                    <div className="px-4 py-2 text-gray-500">
                      Nenhum estado encontrado
                    </div>
                  ) : (
                    filteredStates.map((state) => (
                      <ComboboxOption
                        key={state.sigla}
                        value={state}
                        className={({ active }) =>
                          clsx(
                            "cursor-default select-none px-4 py-2",
                            active ? "bg-blue-500 text-white" : "text-gray-900"
                          )
                        }
                      >
                        {state.nome}
                      </ComboboxOption>
                    ))
                  )}
                </ComboboxOptions>
              </Combobox>
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">City</Label>
              <Input
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                District
              </Label>
              <Input
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                ZipCode
              </Label>
              <Input
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </Field>
          </Fieldset>

          <div className="grid justify-end">
            <Button
              className="block mt-3 rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
              onClick={create}
            >
              Salvar
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
