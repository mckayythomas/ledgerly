"use client";

import React, { useState } from "react";

const UpcomingPaymentsTile = () => {
  const initialPayments = [
    { name: "Rent", amount: 1200, date: "May 10" },
    { name: "Utilities", amount: 150, date: "May 15" },
    { name: "Gym", amount: 110, date: "May 20" },
  ];

  const [activeFormIndex, setActiveFormIndex] = useState<number | null>(null);

  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white w-full max-w-md">
      <h2 className="text-lg font-semibold mb-3">Upcoming Payments</h2>
      <ul className="space-y-3 text-sm">
        {initialPayments.map((payment, index) => (
          <li key={index}>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <span className="w-[60px]">{payment.name}</span>
                <span>{payment.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>${payment.amount}</span>
                <button
                  onClick={() =>
                    setActiveFormIndex(index === activeFormIndex ? null : index)
                  }
                  className="border border-gray-400 rounded px-2 py-1 text-xs"
                >
                  Mark as Paid
                </button>
              </div>
            </div>

            {activeFormIndex === index && (
              <div className="mt-3 border rounded-lg p-3">
                <form className="flex justify-between items-center gap-2">
                  <label className="text-sm">Confirm amount paid:</label>
                  <input
                    type="number"
                    defaultValue={payment.amount}
                    className="border rounded px-2 py-1 text-sm w-32"
                  />
                  <button
                    type="button"
                    onClick={() => setActiveFormIndex(null)}
                    className="border border-blue-500 text-blue-600 px-2 py-1 rounded text-xs self-start"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingPaymentsTile;
