import React from "react";

const ProgressTile = () => {
  const expenses = 200;
  const income = 2120;
  const saved = income - expenses;

  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white w-full max-w-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Progress</h2>
        <select className="text-sm border rounded px-2 py-1">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="bg-gray-200 h-3 rounded-full mb-3 overflow-hidden">
        <div
          className="bg-green-600 h-full"
          style={{ width: `${(expenses / income) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm">
        <span>Expenses</span>
        <span>Income</span>
      </div>
      <div className="flex justify-between text-base mt-1">
        <span>${expenses}</span>
        <span>${income}</span>
      </div>

      <hr className="my-3 border-gray-300" />

      <div
        className={`font-semibold ${
          saved >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {saved >= 0 ? `+ $${saved} saved` : `- $${Math.abs(saved)} over budget`}
      </div>
    </div>
  );
};

export default ProgressTile;
