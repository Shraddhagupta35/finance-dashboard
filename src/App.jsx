import { useState } from "react";
import { transactions as data } from "./data/transactions";

import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionTable from "./components/TransactionTable";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

export default function App() {
  const [role, setRole] = useState("viewer");

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

        {/* Summary */}
        <SummaryCards transactions={data} />

        {/* Charts */}
        <Charts />

        {/* Transactions */}
        <TransactionTable transactions={data} role={role} />

        {/* Insights */}
        <Insights transactions={data} />

      </div>

    </div>
  );
}