import React from 'react';

const UpcomingExaminations: React.FC = () => {
  return (
    <div className="bg-[#1E3A8A] text-white p-4 rounded-lg shadow">
      <h3 className="font-bold mb-3">Upcoming Examinations</h3>
      <div className="space-y-2">
        <div>
          <div className="font-medium text-sm">Mathematics - Quarter Examination</div>
          <div className="text-xs opacity-75">25th November 2024</div>
        </div>
        <div>
          <div className="font-medium text-sm">Business Studies - Unit Test</div>
          <div className="text-xs opacity-75">28th November 2024</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
