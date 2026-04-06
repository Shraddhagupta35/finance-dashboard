export default function TransactionTable({ transactions, role }) {

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">

      <h2 className="text-lg font-semibold mb-4">
        Transactions
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b text-gray-500 text-sm">
            <th className="py-3">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>

          {transactions.map(t => (

            <tr key={t.id} className="border-b">

              <td className="py-3">{t.date}</td>

              <td className="font-medium">
                ₹{t.amount}
              </td>

              <td>{t.category}</td>

              <td>

                <span className={
                  t.type === "income"
                  ? "bg-green-100 text-green-700 px-2 py-1 rounded text-sm"
                  : "bg-red-100 text-red-700 px-2 py-1 rounded text-sm"
                }>
                  {t.type}
                </span>

              </td>

              {role === "admin" && (
                <td>
                  <button className="text-indigo-600 text-sm">
                    Edit
                  </button>
                </td>
              )}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}