import { Motion } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const SummaryCard = ({ title, value, change, trend }) => {
  const bgColor =
    trend === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";

  return (
    <Motion.div
      className="p-6 rounded-xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      <div
        className={`mt-3 flex items-center w-fit px-2 py-1 rounded-full text-sm font-medium ${bgColor}`}
      >
        {trend === "up" ? (
          <ArrowUpIcon className="h-4 w-4 mr-1" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 mr-1" />
        )}
        {change}
      </div>
    </Motion.div>
  );
};

export default SummaryCard;
