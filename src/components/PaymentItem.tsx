import React, { useState } from "react";

const PaymentItem = ({ name, type, amount, due, status, isFeePaymentDetails }: any) => {
  const [isPaid, setIsPaid] = useState(status === "Paid");
  const truncatedName = name.length > 10 ? name.substring(0, 10) + "..." : name;

  const handleCheckboxChange = () => {
    setIsPaid(!isPaid);
  };

  return (
    <div className="flex justify-between items-center sm:py-1 md:py-2 border-b last:border-none">
      {/* Left Side */}
      <div className="flex items-center space-x-3">
        {/* Status Indicator */}
        <div
          className={`w-1 h-10  rounded-full ${isPaid ? "bg-green-500" : "bg-red-500"}`}
        />

        {/* Payment Info */}
        <div>
          {/* Name with truncation and tooltip on hover */}
          <p className="text-blue-700 text-sm font-medium truncate" title={name}>
            {truncatedName}
          </p>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center pr-2">
        <p className="md:font-medium text-sm text-blue-600">{amount}</p>
        <p className="text-sm text-gray-500">Due {due}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Checkbox and Status Text */}
        <input
          type="checkbox"
          checked={isPaid}
          onChange={handleCheckboxChange}
          className="md:w-4 md:h-4 sm:w-3 sm:h-3"
        />
        <p className="text-sm text-blue-600">
          {isPaid ? "Payment Received" : "Payment Pending"}
        </p>

        {/* Download Invoice Button */}
        <button
          className={`px-3 py-1 text-md text-white rounded-lg transition ${
            isPaid ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Download Invoice
        </button>
        {/* Conditional Button */}
        {!isFeePaymentDetails && (
          <button
            className={`md:px-3 md:py-1 sm:px-2 sm:py-1 md:text-md sm:text-3xs text-white rounded-lg transition hidden sm:block ${
              isPaid ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
            }`}
            disabled={isPaid}
          >
            Pay Fee
          </button>
        )}

      </div>
    </div>
  );
};

export default PaymentItem;
