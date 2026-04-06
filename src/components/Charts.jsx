import { LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis } from "recharts";

export default function Charts() {

  const monthly = [
    { month: "Jan", balance: 1200 },
    { month: "Feb", balance: 2000 },
    { month: "Mar", balance: 800 },
    { month: "Apr", balance: 1600 }
  ];

  const category = [
    { name: "Food", value: 500 },
    { name: "Travel", value: 300 },
    { name: "Shopping", value: 700 }
  ];

  return (

    <div className="grid md:grid-cols-2 gap-6 mb-8">

      <div className="bg-white p-6 rounded-xl shadow-sm border">

        <h2 className="font-semibold mb-4">
          Balance Trend
        </h2>

        <LineChart width={400} height={250} data={monthly}>
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="balance" stroke="#6366f1"/>
        </LineChart>

      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">

        <h2 className="font-semibold mb-4">
          Spending Breakdown
        </h2>

        <PieChart width={400} height={250}>
          <Pie data={category} dataKey="value" nameKey="name" fill="#10b981"/>
          <Tooltip/>
        </PieChart>

      </div>

    </div>
  );
}