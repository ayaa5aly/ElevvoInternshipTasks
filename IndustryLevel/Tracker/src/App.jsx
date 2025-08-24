// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";
import Header from "./components/Header";

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="bg-gray-900 min-h-screen text-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddJob />} />
              <Route path="/job/:id" element={<JobDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;
