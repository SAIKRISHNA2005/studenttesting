import React from "react";

interface FocusModeProps {
  toggleFocusMode: () => void;
  focusMode: boolean;
}

const FocusMode: React.FC<FocusModeProps> = ({ toggleFocusMode, focusMode }) => {
  return (
    <>
      {/* Focus Mode Card */}
      <div
        className="relative text-white p-4 h-full rounded-lg shadow-md cursor-pointer overflow-hidden md:w-full sm:w-80 mx-auto"
        onClick={toggleFocusMode}
      >
        {/* Background Image */}
        <img
          src="src\public\focus-bg.gif" // Ensure this file is placed inside 'public' folder
          alt="Focus Mode Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative h-full flex flex-col justify-end items-start p-0 pb-2">
          <h3 className="font-bold lg:text-3xl sm:text-xl">Focus Mode</h3>
          <p className="lg:text-lg sm:text-base">Pomodoro Timer</p>
        </div>
      </div>

      {/* Fullscreen Focus Mode */}
      {focusMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('src\public\focus-bg.gif')" }} // Ensure the image is in 'public'
          ></div>

          {/* Timer Content */}
          <div className="relative text-white text-center bg-black bg-opacity-80 p-6 sm:p-10 rounded-lg max-w-sm sm:max-w-md w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Focus Mode</h2>
            <div className="text-4xl sm:text-6xl font-mono mb-6 sm:mb-8">25:00</div>

            {/* Buttons */}
            <div className="flex space-x-4 justify-center">
              <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full transition-transform transform hover:scale-105">
                Start
              </button>
              <button
                className="border border-white px-4 sm:px-6 py-2 rounded-full transition-transform transform hover:scale-105"
                onClick={toggleFocusMode}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FocusMode;
