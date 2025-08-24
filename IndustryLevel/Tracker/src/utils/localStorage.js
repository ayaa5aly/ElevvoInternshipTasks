export const getJobsFromStorage = () => {
  const data = localStorage.getItem("jobs");
  return data ? JSON.parse(data) : [];
};

export const saveJobsToStorage = (jobs) => {
  localStorage.setItem("jobs", JSON.stringify(jobs));
};
