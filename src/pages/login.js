import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <p className="text-lg text-gray-700 mb-6">Please log in to access your profile.</p>
      <LoginLink>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg">
          Log In
        </button>
      </LoginLink>
    </div>
  );
}
