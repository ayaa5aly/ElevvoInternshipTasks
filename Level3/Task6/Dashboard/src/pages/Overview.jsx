import { useState } from "react";
import SummaryCard from "../components/SummaryCard";
import ActivityItem from "../components/ActivityItem";
import ChartContainer from "../components/ChartContainer";

import ProfileCard from "../components/ProfileCard";
import ApplicationStatus from "../components/ApplicationStatus";
import { Motion } from "framer-motion";

const Overview = () => {
  const [summaryData] = useState([
    { title: "Total Projects", value: 12, change: "+2", trend: "up" },
    { title: "Earnings", value: "$8,450", change: "+12%", trend: "up" },
    { title: "Tasks Due", value: 5, change: "-3", trend: "down" },
    { title: "Active Clients", value: 8, change: "+1", trend: "up" },
  ]);

  const [recentActivities] = useState([
    {
      id: 1,
      project: "E-commerce Website",
      action: "Delivered final version",
      time: "2 hours ago",
    },
    {
      id: 2,
      project: "Mobile App",
      action: "Client requested changes",
      time: "1 day ago",
    },
    {
      id: 3,
      project: "Logo Design",
      action: "Approved by client",
      time: "2 days ago",
    },
    {
      id: 4,
      project: "SEO Optimization",
      action: "Started work",
      time: "3 days ago",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f7f8fa] p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 space-y-6">
        <Motion.div
          className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome back, Aya! 👋
            </h2>
            <p className="text-sm text-gray-500">
              Here’s what’s happening with your projects today.
            </p>
          </div>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar"
            className="w-12 h-12 rounded-full border-2 border-purple-500"
          />
        </Motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((item, index) => (
            <SummaryCard key={index} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Motion.div
            className="lg:col-span-2 p-6 rounded-xl shadow-md bg-white border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Earning Reports
            </h3>
            <ChartContainer />
          </Motion.div>

          <Motion.div
            className="p-6 rounded-xl shadow-md bg-white border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <ActivityItem key={activity.id} {...activity} />
              ))}
            </div>
          </Motion.div>
        </div>
      </div>

      <div className="space-y-6">
        <ProfileCard />
        <ApplicationStatus />
      </div>
    </div>
  );
};

export default Overview;
