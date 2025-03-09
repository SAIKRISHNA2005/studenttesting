import React from "react";

const upcomingPayments = [
  { name: "Examination Fee", type: "Term 2", amount: "Rs. 3,800.00", due: "18 Dec '24", status: "Pending" },
  { name: "Examination Fee", type: "Term 2", amount: "Rs. 3,800.00", due: "18 Dec '24", status: "Pending" },
  { name: "Examination Fee", type: "Term 2", amount: "Rs. 3,800.00", due: "18 Dec '24", status: "Pending" },
];

const UpcomingPayments = () => {
  return (
    <div className="border rounded-lg p-4">
      {upcomingPayments.map((payment, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-b last:border-none">
          {/* Left Section */}
          <div className="flex items-center space-x-3">
            <div className="w-1 h-10 bg-blue-700 rounded-full" />
            <div>
              <p className="text-blue-700 text-md font-medium">{payment.name}</p>
              <p className="text-sm text-gray-500">{payment.type}</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-left pr-2">
            <p className="font-medium sm:text-xs md:text-sm text-blue-600">{payment.amount}</p>  {/* Updated text color */}
            <p className="text-sm text-gray-500">Due {payment.due}</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:flex-col md:flex-row">
            <input type="checkbox" className="w-4 h-4" />
            <p className="md:text-sm sm:text-xs text-blue-600">Payment Pending</p>  {/* Updated text color */}
            <button className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition hidden sm:block">
              Download Invoice
            </button>
            <button className="px-3 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Pay Fee
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingPayments;
