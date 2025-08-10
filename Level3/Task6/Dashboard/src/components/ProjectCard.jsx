import { CalendarIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ name, client, status, deadline, progress }) => {
  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-indigo-100 text-indigo-700",
    "On Hold": "bg-yellow-100 text-yellow-700",
    "Not Started": "bg-gray-100 text-gray-700",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{client}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium text-gray-700">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              progress === 100 ? "bg-green-500" : "bg-indigo-500"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 flex items-center text-sm text-gray-500">
        <CalendarIcon className="h-4 w-4 mr-1" />
        <span>Deadline: {new Date(deadline).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
