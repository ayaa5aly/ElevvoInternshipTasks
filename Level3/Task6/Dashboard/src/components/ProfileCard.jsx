const ProfileCard = () => {
  return (
    <div className="bg-purple-600 text-white rounded-xl p-6 text-center shadow-md">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="profile"
        className="w-20 h-20 mx-auto rounded-full border-4 border-white mb-3"
      />
      <h4 className="font-bold text-lg">Aya Aly</h4>
      <p className="text-sm opacity-90">Cairo</p>
      <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
