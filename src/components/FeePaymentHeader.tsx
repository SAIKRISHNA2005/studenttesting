import React from "react";
import { Download } from "lucide-react"; // Import Download icon

const FeePaymentHeader: React.FC = () => {
  return (
    <div className="flex justify-between text-blue-900 items-center mb-5">
      <h1 className="text-3xl font-bold">Fee Payment Details</h1>
      <button className="flex items-center bg-blue-900 text-white px-3 py-1.5 rounded-md hover:bg-blue-700">
        <Download className="sm:w-2 sm:h-2 md:w-5 md:h-5 mr-2" /> {/* Icon before text */}
        Download Report
      </button>
    </div>
  );
};

export default FeePaymentHeader;
