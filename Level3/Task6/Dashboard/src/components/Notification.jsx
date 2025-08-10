const NotificationDropdown = () => {
  const notifications = [
    {
      id: 1,
      message: 'New project "Website Redesign" assigned',
      time: "2 mins ago",
    },
    { id: 2, message: "Invoice #1234 was paid", time: "1 hour ago" },
    {
      id: 3,
      message: "Client meeting scheduled for tomorrow",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
      <div className="px-4 py-2 border-b border-gray-100">
        <h3 className="text-sm font-medium">Notifications</h3>
      </div>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="px-4 py-2 hover:bg-gray-50">
            <p className="text-sm">{notification.message}</p>
            <p className="text-xs text-gray-500">{notification.time}</p>
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 border-t border-gray-100 text-center">
        <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
          View all
        </a>
      </div>
    </div>
  );
};

export default NotificationDropdown;
