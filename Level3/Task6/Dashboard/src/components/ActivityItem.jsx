import { ClockIcon } from "@heroicons/react/24/outline";

const ActivityItem = ({ project, action, time }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
        <ClockIcon className="h-5 w-5 text-purple-600" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900">
          <span className="font-semibold">{project}</span> - {action}
        </p>
        <p className="text-xs text-gray-500 mt-1 flex items-center">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
