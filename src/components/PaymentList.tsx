import React from "react";
import PaymentItem from "./PaymentItem";

const payments = [
  { name: "School Fee", type: "Term 2", amount: "Rs. 36,800.00", due: "18 Nov' 24", status: "Paid" },
  { name: "Commerce APC...", type: "One Time", amount: "Rs. 250.00", due: "18 Nov' 24", status: "Pending" },
  { name: "Book Fee", type: "One Time", amount: "Rs. 250.00", due: "18 Nov' 24", status: "Paid" },
];

const PaymentList = ({ filter }: { filter: string }) => {
  const filteredPayments =
    filter === "All" ? payments : payments.filter((p) => p.status === filter);

  return (
    <div className="border rounded-lg p-4">
      {filteredPayments.map((payment, index) => (
        <PaymentItem key={index} {...payment} />
      ))}
    </div>
  );
};

export default PaymentList;
