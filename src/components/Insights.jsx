export default function Insights({ transactions }) {

  const expenses = transactions.filter(t => t.type === "expense");

  const highest = expenses.reduce((max,t)=>
    t.amount > max.amount ? t : max
  , expenses[0]);

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm border">

      <h2 className="font-semibold mb-2">
        Insights
      </h2>

      <p className="text-gray-600">
        Highest spending category:
        <span className="font-semibold ml-2 text-gray-900">
          {highest?.category}
        </span>
      </p>

    </div>
  );
}