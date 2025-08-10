const ApplicationStatus = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Application Status
      </h3>
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span>Chinese Translator</span>
          <span className="text-green-500 font-medium">Approved</span>
        </li>
        <li className="flex justify-between">
          <span>Frontend Developer</span>
          <span className="text-yellow-500 font-medium">Pending</span>
        </li>
        <li className="flex justify-between">
          <span>Website Designer</span>
          <span className="text-red-500 font-medium">Rejected</span>
        </li>
      </ul>
    </div>
  );
};

export default ApplicationStatus;
