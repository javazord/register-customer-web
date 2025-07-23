import { Field, Label, Input } from "@headlessui/react";
import clsx from "clsx";

export default function CustomerRegisterForm() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 flex justify-center">
        <div className="grid grid-cols-* m-2">
          <Field>
            <Label className="text-sm/6 font-medium text-white">Name</Label>
            <Input
              className={clsx(
                "mt-3 w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
              )}
            />
          </Field>
        </div>
        <div className="grid grid-cols-* m-2">
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Last Name
            </Label>
            <Input
              className={clsx(
                "mt-3 w-full border border-white rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 text-white"
              )}
            />
          </Field>
        </div>
      </div>
    </>
  );
}
