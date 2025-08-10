import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Motion } from "framer-motion";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "E-commerce Website",
      client: "Fashion Boutique LLC",
      status: "In Progress",
      deadline: "2023-06-15",
      progress: 65,
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "Tech Startup Inc.",
      status: "Completed",
      deadline: "2023-05-20",
      progress: 100,
    },
    {
      id: 3,
      name: "Brand Identity",
      client: "Creative Agency",
      status: "On Hold",
      deadline: "2023-07-10",
      progress: 30,
    },
    {
      id: 4,
      name: "SEO Optimization",
      client: "Local Business",
      status: "In Progress",
      deadline: "2023-06-30",
      progress: 45,
    },
    {
      id: 5,
      name: "Content Writing",
      client: "Marketing Firm",
      status: "Not Started",
      deadline: "2023-07-25",
      progress: 0,
    },
    {
      id: 6,
      name: "UI/UX Redesign",
      client: "Digital Solutions Ltd.",
      status: "In Progress",
      deadline: "2023-08-12",
      progress: 55,
    },
    {
      id: 7,
      name: "Social Media Campaign",
      client: "Lifestyle Brand",
      status: "Completed",
      deadline: "2023-05-05",
      progress: 100,
    },
    {
      id: 8,
      name: "Cloud Migration",
      client: "Enterprise Corp.",
      status: "On Hold",
      deadline: "2023-09-15",
      progress: 20,
    },
    {
      id: 9,
      name: "Data Analytics Dashboard",
      client: "FinTech Group",
      status: "Not Started",
      deadline: "2023-10-01",
      progress: 0,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          filter === "completed"
            ? project.status === "Completed"
            : filter === "in-progress"
            ? project.status === "In Progress"
            : project.status === "Not Started" || project.status === "On Hold"
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <Motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <Motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Projects Dashboard
            </h2>
            <p className="text-gray-600">
              Track and manage all your ongoing projects
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            {[
              { value: "all", label: "All" },
              { value: "in-progress", label: "In Progress" },
              { value: "completed", label: "Completed" },
              { value: "others", label: "Others" },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-4 py-2 text-sm rounded-lg border transition ${
                  filter === btn.value
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </Motion.div>

        {/* Project Cards */}
        <Motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <Motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard {...project} />
            </Motion.div>
          ))}
        </Motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <Motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 text-center col-span-full border border-gray-100"
          >
            <div className="text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              There are no projects matching your current filter.
            </p>
          </Motion.div>
        )}
      </Motion.div>
    </div>
  );
};

export default Projects;
