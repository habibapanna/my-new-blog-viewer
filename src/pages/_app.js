import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { LoginLink, LogoutLink, useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

function MyApp({ Component, pageProps }) {
  const { isAuthenticated, user } = useKindeAuth(); // Use Kinde Auth to get authentication status
  const router = useRouter();

  // Function to determine if the link is active
  const isActive = (path) => (router.pathname === path ? 'text-yellow-400' : 'text-gray-300');

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
          {/* Authentication Buttons */}
          <div>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">{user?.email}</span>
                <LogoutLink>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Logout
                  </button>
                </LogoutLink>
              </div>
            ) : (
              <LoginLink>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Login
                </button>
              </LoginLink>
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
