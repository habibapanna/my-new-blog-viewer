
import { useRouter } from 'next/router';

export default function BlogDetails({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.body}</p>
      <button onClick={() => router.push('/')} className='mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'>
      Back to Home
      </button>
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
