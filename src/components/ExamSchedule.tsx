import React from 'react';

const ExamSchedule: React.FC = () => {
  return (
    <div className="max-w-screen-md h-10 mb-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Exam Schedule</h2>
      <div className="text-center text-gray-600 p-4 rounded-lg border border-blue-800">
        <p>No exams scheduled yet.</p>
      </div>
    </div>
  );
};

export default ExamSchedule;
