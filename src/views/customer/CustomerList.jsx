import CustomerListForm from "./CustomerListForm";

export default function CustomerList() {
  return (
    <>
      <header className="bg-gray-900 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            List Client
          </h1>
        </div>
      </header>

      <CustomerListForm />
    </>
  );
}
