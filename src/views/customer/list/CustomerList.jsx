import CustomerListForm from "./CustomerListForm";

export default function CustomerList() {
  return (
    <>
      <header>
        <div className="max-w-5xl mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            List Client
          </h1>
        </div>
      </header>

      <CustomerListForm />
    </>
  );
}
