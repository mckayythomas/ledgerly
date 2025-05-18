import React from "react";

const BudgetTile = () => {
  const categories = [
    { name: "Food", spent: 150, total: 300 },
    { name: "Transport", spent: 110, total: 150 },
    { name: "Entertainment", spent: 100, total: 100 },
  ];

  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white w-full max-w-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Budget</h2>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <ul className="space-y-3 text-sm">
        {categories.map((item, index) => {
          const percent = Math.min((item.spent / item.total) * 100, 100);
          return (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span>{item.name}</span>
                <span>
                  {item.spent} / {item.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BudgetTile;
