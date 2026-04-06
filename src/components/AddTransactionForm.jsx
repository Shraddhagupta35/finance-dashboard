import { useState } from "react";

export default function AddTransactionForm({ addTransaction }) {
  const [form, setForm] = useState({ date: "", amount: "", category: "", type: "expense" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...form, id: Date.now(), amount: Number(form.amount) });
    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="date" className="border rounded px-2 py-1" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
      <input type="number" placeholder="Amount" className="border rounded px-2 py-1" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} required />
      <input type="text" placeholder="Category" className="border rounded px-2 py-1" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required />
      <select className="border rounded px-2 py-1" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="bg-indigo-600 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
}