// pages/JobDetails.js
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useJobs } from "../context/JobContext";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs, updateJob, deleteJob } = useJobs();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(
    job || {
      jobTitle: "",
      company: "",
      status: "Applied",
      appliedDate: new Date().toISOString().split("T")[0],
      notes: "",
    }
  );

  if (!job) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Job Not Found</h2>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateJob({ ...formData, id });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (
      window.confirm("Are you sure you want to delete this job application?")
    ) {
      deleteJob(id);
      navigate("/");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-white">
            Job Application Details
          </h1>
          <Link to="/" className="text-gray-400 hover:text-gray-300">
            &larr; Back to Dashboard
          </Link>
        </div>

        {isEditing ? (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Application Date
                </label>
                <input
                  type="date"
                  name="appliedDate"
                  value={formData.appliedDate}
                  onChange={handleChange}
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Notes
              </label>
              <textarea
                name="notes"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 text-sm font-medium text-gray-300 focus:outline-none bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-400">Job Title</h3>
                <p className="text-lg font-semibold text-white">
                  {job.jobTitle}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Company</h3>
                <p className="text-lg font-semibold text-white">
                  {job.company}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Status</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">
                  Application Date
                </h3>
                <p className="text-lg text-white">
                  {formatDate(job.appliedDate)}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Notes</h3>
              <div className="bg-gray-700 p-4 rounded-lg min-h-[100px]">
                {job.notes ? (
                  <p className="text-white whitespace-pre-wrap">{job.notes}</p>
                ) : (
                  <p className="text-gray-400 italic">No notes added</p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={handleDelete}
                className="px-5 py-2.5 text-sm font-medium text-red-400 focus:outline-none bg-gray-700 rounded-lg border border-red-600 hover:bg-red-900"
              >
                Delete
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Reuse helper functions from Dashboard
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

export default JobDetails;
