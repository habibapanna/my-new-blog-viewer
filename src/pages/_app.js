import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook
import '../styles/globals.css';
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

function MyApp({ Component, pageProps }) {
  // Simulate checking user authentication status
  const isAuthenticated = false; // Replace with actual authentication check

  const router = useRouter(); // Get the current route

  // Function to determine if the link is active
  const isActive = (path) => router.pathname === path ? 'text-yellow-400' : 'text-gray-300'; // Active link color

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 bg-gray-800 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-400">
            <Link href="/">NextBlog</Link>
          </h1>
          {/* Centered Links (Home and Profile) */}
          <div className="flex-grow text-center">
            <Link href="/" className={`transition px-4 ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/profile" className={`transition px-4 ${isActive('/profile')}`}>
              Profile
            </Link>
          </div>
          {/* Right Side (Login/Logout Links) */}
          <div className="space-x-6">
            {isAuthenticated ? (
              <LogoutLink>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition">
                  Logout
                </button>
              </LogoutLink>
            ) : (
              <>
                <LoginLink>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
                    Sign In
                  </button>
                </LoginLink>
                <RegisterLink>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition">
                    Sign Up
                  </button>
                </RegisterLink>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container min-h-screen mx-auto px-6 py-8">
        <Component {...pageProps} />
      </main>
      <footer className="bg-gray-800 mt-8 py-6">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} NextBlog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
