import React from "react";
import PaymentItem from "./PaymentItem"; // Ensure the path is correct
import { recentPayments } from "../data/index"; // Adjust the import path as needed

const FeePaymentDetails: React.FC = () => {
  return (
    <div className="bg-white md:p-4 sm:p-6 rounded-lg border border-blue-700 shadow-md w-full max-w-md mx-auto sm:max-w-lg lg:max-w-3xl">
      {/* Title */}
      <h3 className="md:text-xl sm:text-lg text-blue-800 font-semibold mb-3 md:text-left sm:text-left p-2">
        Fee Payment Details
      </h3>

      {/* Fee Items */}
      <div className="space-y-2 p-2">
        {recentPayments.map((payment) => (
          <PaymentItem
            key={payment.id}
            name={payment.type}
            type={payment.term || ""}
            amount={payment.amount}
            due={payment.dueDate}
            status={payment.status}
            isFeePaymentDetails={true} // Pass `true` to hide the "Pay Fee" button
          />
        ))}
      </div>
    </div>
  );
};

export default FeePaymentDetails;
