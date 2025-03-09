import React from 'react';
import { ChevronRight } from 'lucide-react';

const Notes: React.FC = () => {
  return (
    <div className="bg-white p-2 border border-blue-700 rounded-lg shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold flex items-center">
          <span className="mr-2">Math Notes</span>
        </h3>
        <ChevronRight size={16} className="text-gray-400" />
      </div>
      <div className="space-y-2">
        <div className="border-l-2 border-[#1E3A8A] pl-2">
          <div className="font-medium text-sm">Integration by Parts</div>
          <div className="text-xs text-gray-500">Updated on Nov 23</div>
        </div>
        <div className="border-l-2 border-[#1E3A8A] pl-2">
          <div className="font-medium text-sm">Quadratic Equations</div>
          <div className="text-xs text-gray-500">Updated on Nov 22</div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
