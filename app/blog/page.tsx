import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — AI & Automation Insights",
  description:
    "Practical guides, tutorials, and insights on AI agents, automation, Claude AI, n8n, and building production-grade AI systems for business.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label !text-primary-400">Blog</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            AI & Automation{" "}
            <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Practical guides and real-world advice on building AI systems that
            actually work in production. No hype, no fluff — just what works.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              No posts yet. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  slug={post.slug}
                  date={new Date(post.date).toLocaleDateString("en-IE", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  readTime={post.readTime}
                  category={post.category}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
