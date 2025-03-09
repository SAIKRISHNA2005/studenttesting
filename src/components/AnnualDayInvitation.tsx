import React, { useState } from 'react';

const Pagination: React.FC<{ totalPages: number; currentPage: number; onPageChange: (page: number) => void }> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= totalPages; i++) {
      dots.push(
        <div
          key={i}
          className={`rounded-full cursor-pointer flex items-center justify-center ${
            i === currentPage ? 'w-1.5 h-1.5 bg-white' : 'w-1 h-1 bg-gray-400'
          }`}
          onClick={() => handlePageClick(i)}
        ></div>
      );
    }
    return dots;
  };

  return (
    <div className="flex justify-center mt-4 space-x-1 md:space-x-2">
      {renderDots()}
    </div>
  );
};

const AnnualDayInvitation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // You can set this to the total number of pages you have

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add any additional logic you need when the page changes
  };

  return (
    <div className="bg-[#1E3A8A] text-white p-4 rounded-lg flex flex-col h-full space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <h3 className="font-bold text-center md:text-left">42nd ANNUAL DAY INVITATION</h3>
        <span className="text-xs text-center md:text-left">14 Nov 2024</span>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <p className="text-sm md:text-left">
          Dear Parents, We cordially invite you to join us for our 42nd Annual Day Celebration on
          Friday, 15th November 2024 at Kamarajar Arangam, Teynampet Chennai at 5:00 PM.
        </p>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AnnualDayInvitation;
