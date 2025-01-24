import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 bg-gray-800 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-400">
            <Link href="/">NextBlog</Link>
          </h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link href="/profile" className="hover:text-yellow-400 transition">
              Profile
            </Link>
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
