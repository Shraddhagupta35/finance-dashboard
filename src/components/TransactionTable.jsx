import { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";

export default function TransactionTable({ transactions, role, addTransaction, editTransaction }) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortField, setSortField] = useState("");

  let filtered = transactions.filter(
    (t) =>
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.date.includes(search)
  );

  if (filterType) filtered = filtered.filter((t) => t.type === filterType);

  if (sortField) {
    filtered.sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>
        {role === "admin" && <AddTransactionForm addTransaction={addTransaction} />}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by category/date"
          className="border rounded px-3 py-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border rounded px-2 py-1" onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select className="border rounded px-2 py-1" onChange={(e) => setSortField(e.target.value)}>
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>

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
          {filtered.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="py-3">{t.date}</td>
              <td className="font-medium">₹{t.amount}</td>
              <td>{t.category}</td>
              <td>
                <span
                  className={
                    t.type === "income"
                      ? "bg-green-100 text-green-700 px-2 py-1 rounded text-sm"
                      : "bg-red-100 text-red-700 px-2 py-1 rounded text-sm"
                  }
                >
                  {t.type}
                </span>
              </td>
              {role === "admin" && (
                <td>
                  <button
                    className="text-indigo-600 text-sm"
                    onClick={() =>
                      editTransaction(t.id, { amount: t.amount + 100 })
                    }
                  >
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