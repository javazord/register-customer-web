export default function TotalCustomersCard({ total }) {
  return (
    <div className="shadow-md shadow-slate-700 bg-white rounded-2xl shadow-md p-6 w-full h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Total Customers
      </h2>

      <div className="flex flex-1 items-center justify-center">
        <div className="text-center text-7xl font-bold text-indigo-600 w-full">
          {total}
        </div>
      </div>
    </div>
  );
}
