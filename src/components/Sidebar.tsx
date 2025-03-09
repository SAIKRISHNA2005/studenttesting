import React from 'react';
import { Home, User, Calendar, FileText, Clock, Grid, CreditCard, BookOpen, HelpCircle } from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  return (
    <nav className="w-[250px] h-[98vh] bg-[#1E3A8A] text-white p-4 absolute top-[5px] left-[9px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[150px] shadow-[2px_2px_20px_3px_#00000066] flex flex-col justify-between overflow-hidden">
      <div className="mb-2">
        <h1 className="text-l font-bold">SPace</h1>
      </div>
      <ul className="flex flex-col flex-grow space-y-2">
        <SidebarItem icon={<Home size={18} />} text="Dashboard" to="/" />
        {/* <SidebarItem icon={<User size={18} />} text="Attendance" to="/attendance" /> */}
        {/* <SidebarItem icon={<Calendar size={18} />} text="Events" to="/events" /> */}
        {/* <SidebarItem icon={<FileText size={18} />} text="Marks" to="/marks" /> */}
        <SidebarItem icon={<Clock size={18} />} text="Timetable" to="/class-timetable" />
        {/* <SidebarItem icon={<Grid size={18} />} text="Exam Schedule" to="/exam-schedule" /> */}
        <SidebarItem icon={<CreditCard size={18} />} text="Fee Payment" to="/fee-payment" />
        <SidebarItem icon={<BookOpen size={18} />} text="Digital Notes Space" to="/notes" />
        {/* <SidebarItem icon={<HelpCircle size={18} />} text="Enquiry" to="/enquiry" /> */}
        {/* <SidebarItem icon={<Calendar size={18} />} text="Academic Calendar" to="/academic-calendar" /> */}
        {/* <SidebarItem icon={<BookOpen size={18} />} text="Subjects and Syllabus" to="/syllabus" /> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
