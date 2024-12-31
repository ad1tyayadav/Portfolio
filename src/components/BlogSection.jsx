import { BlogList } from './BlogList';

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
        <p className="text-gray-400 mb-12">
          Thoughts, tutorials, and insights about software development.
        </p>
        <BlogList />
      </div>
    </section>
  );
}
