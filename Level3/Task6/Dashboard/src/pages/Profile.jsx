import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: "Aya Aly",
    email: "Aya5@gmail.com",
    profession: "UI/UX Designer & Developer",
    bio: "Freelance designer and developer with 5+ years of experience creating beautiful, functional digital products.",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-1 ">
      <div className="max-w-6xl mx-auto space-y-2 pt-0">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "profile"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "settings"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Settings
            </button>
          </div>
        </div>

        {/* Profile Tab Content */}
        {activeTab === "profile" && (
          <>
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="h-28 w-28 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {formData.name}
                </h2>
                <p className="text-gray-500">{formData.profession}</p>
                <button className="text-sm text-indigo-600 hover:text-indigo-500 mt-2">
                  Change Photo
                </button>
              </div>
            </div>

            {/* Profile Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow p-6 space-y-8"
            >
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Profession
                    </label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </>
        )}

        {/* Settings Tab Content */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-2xl shadow p-6 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Account Settings
            </h2>

            {/* Change Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Change Password
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current"
                      value={password.current}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new"
                      value={password.new}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirm"
                      value={password.confirm}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Privacy Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="public-profile"
                      name="public-profile"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="public-profile"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Make my profile public
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="show-email"
                      name="show-email"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="show-email"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Show email address on profile
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
