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
import { useEffect, useState } from "react";
import CustomerService from "../../../app/service/customer/customerService";
import Dialog from "../../../components/modal/Dialog";
import { validateForm } from "../../../utils/validators";
import { useLocation } from "react-router-dom";

export default function CustomerRegisterForm() {
  const {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    getFormattedCpf,
  } = useCustomerForm();
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);
  const [query, setQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const service = new CustomerService();
  const location = useLocation();

  const filteredStates =
    query === ""
      ? states
      : states.filter((state) =>
          state.nome.toLowerCase().includes(query.toLowerCase())
        );

  // Carrega dados do state se vierem na navegação
  useEffect(() => {
    if (location.state?.customer) {
      setFormData(location.state.customer);
      setIsEditing(true);
    }
  }, [location.state]);

  const resetFormData = () => {
    setFormData({
      name: "",
      lastName: "",
      cpf: "",
      email: "",
      phone: "",
      address: {
        street: "",
        state: "",
        city: "",
        district: "",
        zipCode: "",
      },
      error: "",
    });
    setFormErrors({
      name: "",
      lastName: "",
      cpf: "",
      email: "",
    });
  };

  const create = () => {
    const errors = validateForm(formData); // valida tudo
    setFormErrors(errors); // atualiza os erros na tela

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return;
    service
      .save(formData)
      .then((response) => {
        setMsg("Customer saved successfully!");
        setError(null);
        resetFormData();
      })
      .catch((erro) => {
        setError(erro.response?.data?.error || "Unexpected error");
      });
  };

  const update = () => {
    const errors = validateForm(formData); // valida tudo
    setFormErrors(errors); // atualiza os erros na tela

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return;
    service
      .update(formData)
      .then((response) => {
        setMsg("Customer saved successfully!");
        setError(null);
        resetFormData();
      })
      .catch((erro) => {
        setError(erro.response?.data?.error || "Unexpected error");
      });
  };

  return (
    <>
      <header>
        <div className="max-w-5xl mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Register Client
          </h1>
        </div>
      </header>
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-md shadow-slate-700 rounded-lg  p-3 m-5">
        {/* - PESSOAL - */}
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
              aria-hidden={true}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
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
            {formErrors.lastName && (
              <p className="text-red-500 text-sm">{formErrors.lastName}</p>
            )}
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
            {formErrors.cpf && (
              <p className="text-red-500 text-sm">{formErrors.cpf}</p>
            )}
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
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
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

        {/* - DIVISOR - */}
        <div className="flex items-center gap-1 mt-10 ">
          <div className="w-10 divide-x-0 border border-1 border-dashed"></div>
          <p className="font-bold text-white pb-1">Address</p>
          <div className="flex-1 divide-x-0 border border-1 border-dashed"></div>
        </div>

        {/* - ENDEREÇO - */}
        <Fieldset className="grid grid-cols-3 gap-4">
          <Field>
            <Label className="text-sm/6 font-medium text-white">State</Label>
            <Combobox
              value={
                states.find((s) => s.nome === formData.address.state) || ""
              }
              name="address.state"
              onChange={(value) => handleChange("address.state", value)}
            >
              <ComboboxInput
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(state) => state?.nome || ""}
                name="address.state"
              />
              {formErrors["address.state"] && (
                <p className="text-red-500 text-sm">
                  {formErrors["address.state"]}
                </p>
              )}
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
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">ZipCode</Label>
            <Input
              className={clsx(
                "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
              )}
              type="text"
              name="address.zipCode"
              value={formData.address.zipCode}
              onChange={handleChange}
            />
          </Field>
        </Fieldset>
        <Fieldset className="grid grid-cols-2 gap-4">
          <Field>
            <Label className="text-sm/6 font-medium text-white">Street</Label>
            <Input
              className={clsx(
                "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
              )}
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">District</Label>
            <Input
              className={clsx(
                "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
              )}
              type="text"
              name="address.district"
              value={formData.address.district}
              onChange={handleChange}
            />
          </Field>
        </Fieldset>

        <div className="grid justify-end">
          <Button
            className="block mt-3 rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
            onClick={isEditing ? update : create}
          >
            {isEditing ? "Update" : "Save"}
          </Button>
        </div>
      </div>

      {/* Renderiza o diálogo somente se houver erro */}
      {(error || msg) && (
        <Dialog
          erro={error}
          msg={msg}
          onClose={() => {
            setError(null);
            setMsg(null);
          }}
        />
      )}
    </>
  );
}
