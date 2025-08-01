import {
  Field,
  Label,
  Input,
  Fieldset,
  Button,
  Select,
} from "@headlessui/react";
import clsx from "clsx";
import useCustomerForm from "../../hooks/useCustomerForm";

export default function CustomerRegisterForm() {
  const { formData, handleChange, getFormattedCpf, handleChangeEmail } =
    useCustomerForm();

  return (
    <>
      <header>
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Register Client
          </h1>
        </div>
      </header>
      <main className="w-auto h-screen justify-center">
        <div className="shadow-sm bg-slate-700 border border-white p-3 m-5">
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
                type="number"
                name="phone"
                value={formData.phone}
                placeholder="(99) 99999-9999"
                onChange={handleChange}
              />
            </Field>
          </Fieldset>

          <div className="divide-x-4 border border-1 border-dashed mt-5 mb-4"></div>

          <Fieldset className="grid grid-cols-4 gap-4">
            <Field>
              <Label className="text-sm/6 font-medium text-white">State</Label>
              <Select
                className={clsx(
                  "block w-full mr-2 border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-white"
                )}
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option></option>
                <option></option>
                <option></option>
              </Select>
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
            <Button className="block mt-3 rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
              Salvar
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
