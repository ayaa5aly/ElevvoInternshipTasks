import React, { useState, useContext } from "react";
import { JobContext } from "../context/JobContext";

function JobForm() {
  const { addJob } = useContext(JobContext);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !company.trim()) return;

    addJob({ title, company, status, date });
    setTitle("");
    setCompany("");
    setStatus("Applied");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-4 bg-gray-800 shadow rounded"
    >
      <input
        className="border border-gray-600 p-2 rounded bg-gray-700 text-white"
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="border border-gray-600 p-2 rounded bg-gray-700 text-white"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <select
        className="border border-gray-600 p-2 rounded bg-gray-700 text-white"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input
        className="border border-gray-600 p-2 rounded bg-gray-700 text-white"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Job
      </button>
    </form>
  );
}

export default JobForm;
