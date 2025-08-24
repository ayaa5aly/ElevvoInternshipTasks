// pages/Dashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useJobs } from "../context/JobContext";

const Dashboard = () => {
  const { jobs, importJobs } = useJobs();
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");

  const statusOptions = ["All", "Applied", "Interviewing", "Offer", "Rejected"];

  const filteredJobs = jobs.filter((job) =>
    filter === "All" ? true : job.status === filter
  );

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    const [field, direction] = sortBy.split("-");
    const multiplier = direction === "asc" ? 1 : -1;

    if (field === "date") {
      return multiplier * (new Date(a.appliedDate) - new Date(b.appliedDate));
    } else if (field === "company") {
      return multiplier * a.company.localeCompare(b.company);
    }
    return 0;
  });

  const handleExport = () => {
    const dataStr = JSON.stringify(jobs, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;
    const exportFileDefaultName = "job-applications.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedJobs = JSON.parse(event.target.result);
        if (Array.isArray(importedJobs)) {
          importJobs(importedJobs);
          alert("Jobs imported successfully!");
        } else {
          alert("Invalid file format");
        }
      } catch (error) {
        alert("Error parsing JSON file");
      }
    };
    reader.readAsText(file);
    e.target.value = null; // Reset file input
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-4 sm:mb-0">
          Job Applications
        </h1>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add New Job
          </Link>
          <button
            onClick={handleExport}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Export Data
          </button>
          <label className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer">
            Import Data
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Filter by Status
            </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="company-asc">Company (A-Z)</option>
              <option value="company-desc">Company (Z-A)</option>
            </select>
          </div>
        </div>
      </div>

      {sortedJobs.length === 0 ? (
        <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-400 mb-4">No job applications found</p>
          <Link
            to="/add"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add Your First Job
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedJobs.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="block bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border-l-4"
              style={{ borderLeftColor: getStatusColor(job.status) }}
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-white truncate">
                  {job.jobTitle}
                </h2>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>
              </div>
              <p className="text-gray-300 mb-2">{job.company}</p>
              <p className="text-sm text-gray-400">
                Applied: {formatDate(job.appliedDate)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper functions
const getStatusColor = (status) => {
  const colors = {
    Applied: "#3b82f6", // blue
    Interviewing: "#f59e0b", // amber
    Offer: "#10b981", // emerald
    Rejected: "#ef4444", // red
  };
  return colors[status] || "#6b7280"; // default gray
};

const getStatusBadgeClass = (status) => {
  const classes = {
    Applied: "bg-blue-900 text-blue-200",
    Interviewing: "bg-amber-900 text-amber-200",
    Offer: "bg-green-900 text-green-200",
    Rejected: "bg-red-900 text-red-200",
  };
  return classes[status] || "bg-gray-700 text-gray-300";
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default Dashboard;
