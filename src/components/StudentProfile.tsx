import React, { useState } from "react";
import Header from "./Header";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";

const StudentProfile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative mb-4 md:pl-12 overflow-x-hidden"> {/* Add overflow-x-hidden here */}
      {/* Fixed Sidebar for larger screens */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-52 bg-white shadow-lg z-40">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-gray-600 bg-opacity-75"
            onClick={toggleSidebar}
          ></div>
          <div className="absolute inset-y-0 left-0 w-56 bg-[#1E3A8A] text-white shadow-lg">
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <X size={24} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="md:ml-52 w-full overflow-x-hidden"> {/* Add overflow-x-hidden here */}
        {/* Background Image Container */}
        <div className="relative md:w-5/6 h-32 md:h-40 sm:w-full">
          <img
            // src="src/public/focus-bg.gif"
            src="https://s3-alpha-sig.figma.com/img/139c/e430/cb683d7d9d2d585fd3e46da43e5f9031?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pB2Y~YcJk51IJN5BknmoTAFdV7O6IEmgvqDifzGXlwsI2Fs7v9dIuX32saEDiuXs3TYMIrIPN-Jp8Ks7xZfWyf0WNGwxI8JVsGHTN4cvVNf~qewbO47aCcobOIonL1hQN793yeZh504QoPJTuRVRcMd2BHT9tocpyCdfJGX33vyaRes7H1NuGk8YGE0kmOOJuyVfd0UlLpX7HWwg8gfsrgiiF32EeuyJMGEBVqf47SZt766--3WN0x0Uiu1rR4R3Jrb1N1VDLvT4x0Ze0h98mje3sUQNDF6mxIrJ6nKUsHSq5wX43XKWYSDNw915yBRAbdZFRNqnMegoibGwTRWo~A__"
            alt="School Background"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Header Positioned at the Top */}
          <div className="absolute top-0 left-0 w-full">
            <Header toggleSidebar={toggleSidebar} />
          </div>

          {/* Student Info Positioned at the Bottom */}
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-bold">Aryan Patel, 11A2</h2>
            <p className="text-sm">
              Maharishi Vidya Mandir Senior Secondary School, Chetpet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
