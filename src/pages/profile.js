import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

// pages/profile.js
const Profile = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Welcome to your profile!</h1>
        <LogoutLink>
            <button className="btn px-2 bg-red-500 text-white">Logout</button>
        </LogoutLink>
      </div>
    );
  };
  
  export default Profile;
  