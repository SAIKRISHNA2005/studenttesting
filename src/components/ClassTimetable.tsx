import React, { useState } from 'react';
import { ChevronUpCircle, ChevronDownCircle } from 'lucide-react';
import { timetableData } from '../data/index'; // Adjust the import path as needed

const ClassTimetable: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('M');

  const days = ['M', 'T', 'W', 'Th', 'F', 'Sa'];

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className="bg-white p-4 rounded-lg h-full border border-blue-700 shadow relative">
      <h3 className="font-bold mb-3">Class Timetable</h3>
      <div className="grid grid-cols-7 text-center text-sm mb-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-1 font-semibold border border-blue-700 cursor-pointer ${
              selectedDay === day
                ? 'bg-blue-700 text-white'
                : 'bg-white text-blue-700'
            } ${index === 0 ? 'rounded-l-sm' : index === days.length - 1 ? 'rounded-r-sm' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="space-y-1 pb-1 pl-2 w-9/12">
        {timetableData.map((entry, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm border-b border-gray-500 pb-2"
          >
            <div className='flex flex-col'>
              <div className="text-lg font-medium text-blue-800">{entry.subject}</div>
              <div className="text-md text-gray-700">{entry.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-5 top-40 transform -translate-y-1/2 flex flex-col items-center space-y-2">
        <ChevronUpCircle className="text-blue-800 cursor-pointer" size={24} />
        <ChevronDownCircle className="text-blue-800 cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default ClassTimetable;
