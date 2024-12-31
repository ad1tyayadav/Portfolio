import { BlogList } from '../components/BlogList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export function Blog() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-400">
            Exploring software development, tech tutorials, and industry insights.
          </p>
        </div>
        <BlogList />
      </div>
      <Footer />
    </div>
  );
}
