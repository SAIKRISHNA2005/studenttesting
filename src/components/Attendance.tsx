import React, { useState } from 'react';

const Attendance: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'year' | 'month'>('month');

  const toggleButton = (button: 'year' | 'month') => {
    setActiveButton(button);
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-blue-700 shadow">
      <div className="flex justify-between items-center mb-2 mr-2">
        <h3 className="font-bold">Attendance</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleButton('year')}
            className={`text-xs px-3 py-1 rounded ${
              activeButton === 'year'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            }`}
          >
            Y
          </button>
          <button
            onClick={() => toggleButton('month')}
            className={`text-xs px-3 py-1 rounded ${
              activeButton === 'month'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            }`}
          >
            M
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start space-x-4">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#E6E6E6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="3"
              strokeDasharray="47.84" // 80% of the circle
              strokeDashoffset="11.96" // Offset to start from the top
              strokeLinecap="round"
              transform="rotate(-90) translate(-36)" // Rotate to start from top
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-lg font-bold">80%</span>
          </div>
        </div>

        {/* Attendance Details */}
        <div className="text-left">
          <h4 className="text-md font-bold text-blue-800 mb-2">November 2024</h4>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium text-blue-800 mb-1">
              <span>Total Working days</span>
              <span>: 20</span>
            </div>
            <div className="flex justify-between text-xs font-medium text-blue-800 mb-1">
              <span>No. Present</span>
              <span>: 16</span>
            </div>
            <div className="flex justify-between text-xs font-medium text-blue-800 mb-1">
              <span>No. Absent</span>
              <span>: 04</span>
            </div>
          </div>
        </div>

      </div>
      <div className="text-xs text-gray-500 mt-2">
        Last updated on 24 Nov'24
      </div>
    </div>
  );
};

export default Attendance;
