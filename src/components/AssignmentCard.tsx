import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface AssignmentProps {
  title: string;
  description: string;
  dueDate: string;
  teacher: string;
  status: "pending" | "submitted" | "late";
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "submitted":
      return "text-green-500";
    case "pending":
      return "text-blue-500";
    case "late":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const AssignmentCard = ({ title, description, dueDate, teacher, status }: AssignmentProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-full h-auto flex flex-col justify-between">
      {/* Title with Status Indicator */}
      <div className="flex justify-between items-start mb-1">
        <h3 className="md:text-lg sm:text-base font-semibold text-blue-900">{title}</h3>
        <FontAwesomeIcon 
          icon={faCircle} 
          className={`text-xs ${getStatusColor(status)}`} 
        />
      </div>
      
      {/* Description */}
      <p className="text-xs text-gray-600 mb-2">{description}</p>
      
      {/* Due Date */}
      <p className="text-xs text-gray-500">Due Date : {dueDate.replace("Due on ", "")}</p>
      
      {/* Teacher Name */}
      <div className="flex items-center mt-2">
        <div className="w-4 h-4 rounded-full bg-gray-300 mr-1 flex items-center justify-center overflow-hidden">
          <span className="text-[8px] text-gray-600">👤</span>
        </div>
        <span className="text-xs text-gray-600">{teacher}</span>
      </div>
    </div>
  );
};

export default AssignmentCard;