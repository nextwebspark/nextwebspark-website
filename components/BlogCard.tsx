import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  readTime,
  category,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="card group block">
      {/* Category */}
      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readTime}
          </span>
        </div>
        <ArrowUpRight
          size={18}
          className="text-gray-400 group-hover:text-primary-600 transition-colors"
        />
      </div>
    </Link>
  );
}
