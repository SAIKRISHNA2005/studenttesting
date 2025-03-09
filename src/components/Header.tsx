import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-transparent text-black p-4">
      <div className="flex justify-between items-center">
        {/* Sidebar Toggle Button (Hidden on larger screens) */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} className="text-black" />
        </button>

        {/* Right-Side Icons (Notification Bell & User Profile) */}
        <div className="flex items-center space-x-4 ml-auto ">
          <Bell size={20} className="text-[#1E3A8A]" />
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={16} className="text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
