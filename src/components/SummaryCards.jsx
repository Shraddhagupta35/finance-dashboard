export default function SummaryCards({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a,b)=>a+b.amount,0)

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a,b)=>a+b.amount,0)

  const balance = income - expense

  return (

    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Total Balance</p>
        <h2 className="text-2xl font-semibold text-blue-600">
          ₹{balance}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Income</p>
        <h2 className="text-2xl font-semibold text-green-600">
          ₹{income}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Expenses</p>
        <h2 className="text-2xl font-semibold text-red-600">
          ₹{expense}
        </h2>
      </div>

    </div>
  );
}