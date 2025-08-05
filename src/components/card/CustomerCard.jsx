export default function CustomerCard({ customers }) {
  const displayedCustomers = (Array.isArray(customers) ? customers : []).slice(
    0,
    5
  );
  return (
    <div className="shadow-md shadow-slate-700 bg-white rounded-2xl shadow-md p-6 w-full h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Last 5 Customers
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {displayedCustomers.map((customer, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-8 py-2">{customer.lastName}</td>
                <td className="px-4 py-2">{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {displayedCustomers.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            Customers not found.
          </div>
        )}
      </div>
    </div>
  );
}
