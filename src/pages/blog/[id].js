import { useRouter } from 'next/router';

export default function BlogDetails({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center font-bold text-xl text-gray-600">Loading... Please wait...</div>;
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-white rounded-lg shadow-lg my-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide">
        {post.title}
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        {post.body}
      </p>

      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={() => router.push('/')} 
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-700"
        >
          Back to Home
        </button>
        <div className="text-sm text-gray-500">Published on: {new Date().toLocaleDateString()}</div>
      </div>
    </div>
  );
}

// Fetch the blog details based on the dynamic `id` parameter
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Generate paths for each blog post
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}
