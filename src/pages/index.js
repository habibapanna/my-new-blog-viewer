import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home({ posts }) {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Add login and register buttons */}
        <div className="flex justify-end mb-4">
          <LoginLink>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition mr-2">
              Sign In
            </button>
          </LoginLink>
          <RegisterLink>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition">
              Sign Up
            </button>
          </RegisterLink>
        </div>

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
                <p className="text-gray-600 text-sm">
                  Click to read more about this post.
                </p>
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
