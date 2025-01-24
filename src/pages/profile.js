import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

const Profile = () => {
  const { isAuthenticated, user } = useKindeAuth(); // Get authentication status
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if the user is not authenticated
    if (!isAuthenticated) {
      router.push('/api/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Optionally show a loading spinner
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Welcome to your profile!</h1>
      <p className="text-gray-300">You are viewing a protected page.</p>
      <div className="text-gray-400 mt-4">
        <p>Name: {user?.name || 'N/A'}</p>
        <p>Email: {user?.email || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Profile;
