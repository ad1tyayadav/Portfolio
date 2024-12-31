import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import { useEffect } from 'react';
import Footer from '../components/Footer';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scroll(0, 0)
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen bg-black pt-24 text-white">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Post not found</h1>
        </div>
      </div>
    );
  }

  // Exclude the current post from "More Blogs"
  const moreBlogs = blogPosts.filter(p => p.slug !== slug);

  return (
    <div className="min-h-screen bg-black pt-24">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        <div className="flex items-center gap-4 text-gray-400 mb-8">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span>{post.readTime} min read</span>
        </div>
        <div className="prose prose-invert max-w-none mb-16">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* More Blogs Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">More Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                readTime={blog.readTime}
                slug={blog.slug}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
