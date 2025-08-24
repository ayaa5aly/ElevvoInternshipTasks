// context/JobContext.js
import React, { createContext, useContext, useReducer, useEffect } from "react";

const JobContext = createContext();

const jobReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case "IMPORT_JOBS":
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};

const initialState = {
  jobs: [],
};

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  useEffect(() => {
    const savedJobs = localStorage.getItem("jobApplications");
    if (savedJobs) {
      dispatch({ type: "SET_JOBS", payload: JSON.parse(savedJobs) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(state.jobs));
  }, [state.jobs]);

  const addJob = (job) => {
    const newJob = {
      ...job,
      id: Date.now().toString(),
      appliedDate: job.appliedDate || new Date().toISOString().split("T")[0],
    };
    dispatch({ type: "ADD_JOB", payload: newJob });
  };

  const updateJob = (job) => {
    dispatch({ type: "UPDATE_JOB", payload: job });
  };

  const deleteJob = (id) => {
    dispatch({ type: "DELETE_JOB", payload: id });
  };

  const importJobs = (jobs) => {
    dispatch({ type: "IMPORT_JOBS", payload: jobs });
  };

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        addJob,
        updateJob,
        deleteJob,
        importJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
