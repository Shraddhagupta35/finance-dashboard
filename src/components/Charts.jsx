import { LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis } from "recharts";

export default function Charts({ transactions }) {
  // Prepare monthly balance
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const monthly = months.map((m, i) => {
    const monthTrans = transactions.filter(
      (t) => new Date(t.date).getMonth() === i
    );
    const balance =
      monthTrans
        .filter((t) => t.type === "income")
        .reduce((a, b) => a + b.amount, 0) -
      monthTrans
        .filter((t) => t.type === "expense")
        .reduce((a, b) => a + b.amount, 0);
    return { month: m, balance };
  });

  // Prepare category breakdown
  const categoryMap = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => (categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount));
  const categoryData = Object.keys(categoryMap).map((k) => ({
    name: k,
    value: categoryMap[k],
  }));

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="font-semibold mb-4">Balance Trend</h2>
        <LineChart width={400} height={250} data={monthly}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#6366f1" />
        </LineChart>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="font-semibold mb-4">Spending Breakdown</h2>
        <PieChart width={400} height={250}>
          <Pie data={categoryData} dataKey="value" nameKey="name" fill="#10b981" />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}