import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../context/JobContext";

function JobTable() {
  const { jobs, deleteJob } = useContext(JobContext);

  return (
    <table className="w-full border-collapse bg-gray-800 shadow rounded mt-4 text-white">
      <thead>
        <tr className="bg-gray-700 text-left">
          <th className="p-2">Title</th>
          <th className="p-2">Company</th>
          <th className="p-2">Status</th>
          <th className="p-2">Date</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.id} className="border-t border-gray-700">
            <td className="p-2">{job.title}</td>
            <td className="p-2">{job.company}</td>
            <td className="p-2">{job.status}</td>
            <td className="p-2">{job.date}</td>
            <td className="p-2 flex gap-2">
              <Link
                to={`/job/${job.id}`}
                className="text-blue-400 hover:underline"
              >
                Details
              </Link>
              <button
                onClick={() => deleteJob(job.id)}
                className="text-red-400 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobTable;
