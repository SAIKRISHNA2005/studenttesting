import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
import StudentProfile from '../components/StudentProfile';
import AnnualDayInvitation from '../components/AnnualDayInvitation';
import Attendance from '../components/Attendance';
import FeePaymentDetails from '../components/FeePaymentDetails';
import MarksSection from '../components/MarksSection';
import ClassTimetable from '../components/ClassTimetable';
import FocusMode from '../components/FocusMode';
import UpcomingEvents from '../components/UpcomingEvents';
import Notes from '../components/Notes';
import UpcomingExaminations from '../components/UpcomingExaminations';

const Dashboard: React.FC = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* <div className="hidden md:block w-56">
        <Sidebar />
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar}></div>
          <div className="absolute inset-y-0 left-0 w-56 bg-[#1E3A8A] text-white shadow-lg">
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <X size={24} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )} */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <main className="flex-1 overflow-y-auto p-4">
          <StudentProfile />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 mb-3 md:pl-64">
            <AnnualDayInvitation />
            <Attendance />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 mb-3 md:pl-64">
            <FeePaymentDetails />
            <MarksSection />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:pl-64">
            <div>
              <ClassTimetable />
            </div>
            <div>
              <FocusMode toggleFocusMode={toggleFocusMode} focusMode={focusMode} />
            </div>
            <div>
              <UpcomingEvents />
            </div>
            <div className="flex flex-col gap-3">
              <Notes />
              <UpcomingExaminations />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
