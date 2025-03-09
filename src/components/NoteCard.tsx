import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBookmark, faBookOpen } from '@fortawesome/free-solid-svg-icons';

interface NoteProps {
  title: string;
  subtitle: string;
  date: string;
  teacher?: string;
  important?: boolean;
}

const NoteCard = ({ title, subtitle, date, teacher, important }: NoteProps) => {
  const [isBookmarked, setIsBookmarked] = useState(important || false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className={`p-3 rounded-lg border ${isBookmarked ? "bg-blue-600 text-white" : "bg-white"} shadow-md flex flex-col h-full`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBookOpen} className={`md:text-lg sm:text-sm ${isBookmarked ? "text-white" : "text-blue-600"}`} />
          <h3 className={`md:text-lg sm:text-xs font-semibold ${isBookmarked ? "text-white" : "text-blue-900"}`}>{title}</h3>
        </div>
        <FontAwesomeIcon
          icon={faBookmark}
          className={`md:text-lg sm:text-sm cursor-pointer ${isBookmarked ? "text-white" : "text-blue-600"}`}
          onClick={toggleBookmark}
        />
      </div>
      <p className={`text-sm mt-1 ${isBookmarked ? "text-white" : "text-gray-600"}`}>{subtitle}</p>
      <p className={`text-xs ${isBookmarked ? "text-white" : "text-gray-500"}`}>{date}</p>
      {teacher && (
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faUserCircle} className={`mr-1 ${isBookmarked ? "text-white" : "text-gray-600"}`} />
          <span className={`text-xs ${isBookmarked ? "text-white" : "text-gray-700"}`}>{teacher}</span>
        </div>
      )}
    </div>
  );
};

export default NoteCard;