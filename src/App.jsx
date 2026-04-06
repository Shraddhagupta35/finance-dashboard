import { useState, useEffect } from "react";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionTable from "./components/TransactionTable";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

import { transactions as initialData } from "./data/transactions";

export default function App() {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || initialData
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const editTransaction = (id, updated) => {
    setTransactions(
      transactions.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Finance Dashboard
          </h1>
          <RoleSwitcher role={role} setRole={setRole} />
        </div>

        {/* Summary Cards */}
        <SummaryCards transactions={transactions} />

        {/* Charts */}
        <Charts transactions={transactions} />

        {/* Transactions */}
        <TransactionTable
          transactions={transactions}
          role={role}
          addTransaction={addTransaction}
          editTransaction={editTransaction}
        />

        {/* Insights */}
        <Insights transactions={transactions} />
      </div>
    </div>
  );
}