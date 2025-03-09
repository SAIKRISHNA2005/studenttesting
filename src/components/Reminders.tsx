import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';
import { assignments } from '../data/index';

const Reminders: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 2;
  const totalCards = assignments.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="pt-12 md:p-4 sm:p-3 pb-6">
      <h2 className="text-blue-900 text-3xl font-bold mb-4">Reminders</h2>
      
      {/* Mobile View Carousel */}
      <div className="relative sm:hidden">
        <div 
          className="flex flex-row gap-2 w-96 max-h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {assignments.map((assignment, index) => (
            <div 
              key={index} 
              className="w-1/2 flex-shrink-0 border border-blue-600 p-2 rounded-lg"
            >
              <h3 className="text-lg text-blue-600 font-semibold pb-3">{assignment.title}</h3>
              <p className="text-xs text-gray-500 pr-1">{assignment.description}</p>
              <p className="text-xs text-gray-500 pt-1">Due Date: {assignment.dueDate}</p>
              <div className="flex items-center mt-3">
                <FaUserCircle className="text-gray-500" />
                <p className="text-xs text-blue-600 ml-2">{assignment.teacher}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow Button */}
        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
            aria-label="Next"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
        )}
      </div>
      
      {/* Desktop View (Static List) */}
      <div className="hidden sm:flex flex-col space-y-4">
        {assignments.map((assignment, index) => (
          <div 
            key={index} 
            className="border border-blue-600 p-2 rounded-lg"
          >
            <h3 className="text-lg text-blue-600 font-semibold pb-3">{assignment.title}</h3>
            <p className="text-xs text-gray-500 pr-1">{assignment.description}</p>
            <p className="text-xs text-gray-500 pt-1">Due Date: {assignment.dueDate}</p>
            <div className="flex items-center mt-3">
              <FaUserCircle className="text-gray-500" />
              <p className="text-xs text-blue-600 ml-2">{assignment.teacher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;