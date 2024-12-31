import { Calendar } from 'lucide-react';
import Link from './Link';

const BlogCard = ({ title, excerpt, date, readTime, slug, image }) => {
    return (
        <article className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {date}
                    </span>
                    <span>{readTime} min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 mb-4">{excerpt}</p>
                <Link href={`/blogs/${slug}`} className="text-cyan-400 hover:text-cyan-300">
                    Read More →
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;