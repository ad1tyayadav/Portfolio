import BlogCard from './BlogCard';
import { blogPosts } from '../data/blogPosts';

export function BlogList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <BlogCard
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readTime={post.readTime}
                    slug={post.slug}
                    image={post.image}
                />
            ))}
        </div>
    );
}