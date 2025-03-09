import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Timetable from '../components/TimeTable';
import Reminders from '../components/Reminders';
import ExamSchedule from '../components/ExamSchedule';
import { X } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const ClassTimetable = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar (Desktop) */}
      <div className="hidden md:block w-56">
        <Sidebar />
      </div>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar}></div>
          <div className="absolute inset-y-0 left-0 w-56 shadow-lg">
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-black">
                <X size={24} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto flex flex-col md:flex-row sm:px-2 md:px-9">
          <div className="flex-1 flex flex-col md:flex-row m-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-blue-900 mb-4">Class Timetable</h1>

              {/* Day Selector - Handle the spacing and active button styles */}
              <div className="flex space-x-2 mb-4 overflow-x-auto">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`md:px-4 md:py-0.5 sm:px-2 sm:py-0.5 rounded-lg sm:text-xs md:text-lg font-medium transition-all ${activeDay === day ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Timetable */}
              <Timetable activeDay={activeDay} />

              <div className="mt-4 md:mb-52 sm:mb-0">
                {/* Exam Schedule */}
                <ExamSchedule />
              </div>
            </div>

            {/* Reminders - Make it responsive for smaller screens */}
            <div className="w-full md:w-80 ml-2 mt-4 md:mt-0">
              <Reminders />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClassTimetable;
