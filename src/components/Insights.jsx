export default function Insights({ transactions }) {
  const expenses = transactions.filter((t) => t.type === "expense");
  const highest = expenses.reduce((max, t) => (t.amount > max.amount ? t : max), expenses[0]);

  // Monthly comparison
  const monthlyMap = {};
  transactions.forEach(t => {
    const month = new Date(t.date).toLocaleString("default", { month: "short" });
    monthlyMap[month] = (monthlyMap[month] || 0) + (t.type === "expense" ? t.amount : -t.amount);
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
      <h2 className="font-semibold mb-2">Insights</h2>
      <p className="text-gray-600">
        Highest spending category:
        <span className="font-semibold ml-2 text-gray-900">{highest?.category}</span>
      </p>
      <p className="text-gray-600 mt-2">
        Monthly Comparison:
        <span className="font-semibold ml-2 text-gray-900">{JSON.stringify(monthlyMap)}</span>
      </p>
    </div>
  );
}