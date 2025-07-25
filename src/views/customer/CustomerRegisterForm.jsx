import { Field, Label, Input, Fieldset } from "@headlessui/react";
import clsx from "clsx";
import useCustomerForm from "../../hooks/useCustomerForm";

export default function CustomerRegisterForm() {
  const { formData, handleChange, getFormattedCpf, handleChangeEmail } =
    useCustomerForm();

  return (
    <>
      <header className="bg-gray-900 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Register Client
          </h1>
        </div>
      </header>

      <div className="w-auto h-screen bg-gray-900 justify-center">
        <div className="shadow-sm bg-slate-700 border border-white p-3 ">
          <Fieldset className="">
            <Field>
              <Label className="text-sm/6 font-medium text-white">Name</Label>
              <Input
                className={clsx(
                  "mt-3 w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
                )}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Last Name
              </Label>
              <Input
                className={clsx(
                  "mt-3 w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
                )}
                type="text"
                name="lastname"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">CPF</Label>
              <Input
                className={clsx(
                  "mt-3 w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
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
              <Label className="text-sm/6 font-medium text-white">E-mail</Label>
              <Input
                className={clsx(
                  "mt-3 w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white "
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
          </Fieldset>
        </div>
      </div>
    </>
  );
}
