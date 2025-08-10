import { useState, useEffect } from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    // Mock data for notifications
    const mockNotifications = [
      {
        id: 1,
        message: 'New project "Website Redesign" assigned',
        time: "10 minutes ago",
        read: false,
      },
      {
        id: 2,
        message: 'Client "Acme Corp" approved your proposal',
        time: "2 hours ago",
        read: false,
      },
      {
        id: 3,
        message: 'Payment received for "Mobile App Development"',
        time: "1 day ago",
        read: true,
      },
    ];
    setNotifications(mockNotifications);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-[#8b5cf6]">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none relative"
            >
              <BellIcon className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              )}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                <div className="py-1">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-[#8b5cf6]">
                      Notifications
                    </p>
                  </div>
                  {notifications.length > 0 ? (
                    notifications.slice(0, 3).map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <p className="text-sm text-gray-800">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-center text-sm text-gray-500">
                      No new notifications
                    </div>
                  )}
                  <div className="px-4 py-2 border-t border-gray-200 text-center">
                    <a
                      href="#"
                      className="text-xs font-medium text-[#8b5cf6] hover:text-blue-500"
                    >
                      View all notifications
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center focus:outline-none"
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                <div className="p-4 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">Aya Aly</p>
                  <p className="text-xs text-gray-500">Aya@gmail.com</p>
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
