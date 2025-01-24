// pages/profile.js
import { useState, useEffect } from 'react';

const Profile = () => {
  // Simulate fetching user data (e.g., name and picture)
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating fetching user data (replace with actual authentication logic)
    const fetchedUser = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      picture: 'https://randomuser.me/api/portraits/men/75.jpg', // Random profile picture
    };
    setUser(fetchedUser);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <div className="text-center">
          <img
            src={user.picture}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Welcome, {user.name}!
          </h1>
          <p className="text-gray-500 mb-4">{user.email}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mt-4 text-center">
          <p className="text-gray-700">This is your profile page!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
