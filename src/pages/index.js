import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header with Navigation Links */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/profile">Profile</Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Blog Posts</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              key={post.id}
            >
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition mb-4">
                  {post.title}
                </h2>
                {/* Visible Clickable Button */}
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition">
                    Read More
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Fetch blog posts from the mock API during build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
