import React from "react";

const SavingGoalsTile = () => {
  const goals = [
    { name: "Emergency Fund", saved: 1250, target: 2000 },
    { name: "Vacation", saved: 800, target: 1500 },
  ];

  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white w-full max-w-md">
      <h2 className="text-lg font-semibold mb-3">Saving Goals</h2>
      <ul className="space-y-3 text-sm">
        {goals.map((goal, index) => {
          const percent = Math.min((goal.saved / goal.target) * 100, 100);
          return (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span>{goal.name}</span>
                <span>
                  {goal.saved.toLocaleString()} / {goal.target.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
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

export default SavingGoalsTile;
