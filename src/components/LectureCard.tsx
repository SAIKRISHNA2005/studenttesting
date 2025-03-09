import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle, faBookmark } from "@fortawesome/free-solid-svg-icons";

interface LectureProps {
  title: string;
  subtitle: string;
  date: string;
  teacher: string;
}

const LectureCard = ({ title, subtitle, date, teacher }: LectureProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center p-4 border rounded-xl shadow-md h-full w-full transition-all ${
        isBookmarked ? "bg-blue-600 text-white" : "bg-white border-blue-400"
      }`}
    >
      {/* Play Icon */}
      <div
        className={`flex items-center justify-center w-20 h-20 border rounded-xl ${
          isBookmarked ? "border-white" : "border-blue-400"
        }`}
      >
        <FontAwesomeIcon
          icon={faPlayCircle}
          className={`text-2xl ${isBookmarked ? "text-white" : "text-blue-600"}`}
        />
      </div>

      {/* Lecture Details */}
      <div className="flex flex-col flex-grow px-4">
        <h3 className={`font-semibold text-lg ${isBookmarked ? "text-white" : "text-blue-800"}`}>{title}</h3>
        <p className={`text-sm ${isBookmarked ? "text-white" : "text-gray-600"}`}>{subtitle}</p>
        <p className={`text-xs ${isBookmarked ? "text-white" : "text-gray-500"}`}>Uploaded on {date}</p>
        <div className="flex items-center mt-1">
          <FontAwesomeIcon
            icon={faUserCircle}
            className={`mr-1 text-sm ${isBookmarked ? "text-white" : "text-gray-600"}`}
          />
          <span className={`text-xs ${isBookmarked ? "text-white" : "text-blue-600"}`}>{teacher}</span>
        </div>
      </div>

      {/* Bookmark Icon */}
      <FontAwesomeIcon
        icon={faBookmark}
        className={`text-lg cursor-pointer transition-all ${isBookmarked ? "text-white" : "text-blue-600"}`}
        onClick={toggleBookmark}
      />
    </div>
  );
};

export default LectureCard;
