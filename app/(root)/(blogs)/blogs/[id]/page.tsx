import { notFound } from "next/navigation";

import { BlogCard } from "@/components/Card/BlogCard";
import { blogs } from "@/lib/data/blog-data";

import { BlogHeader } from "@/app/(root)/(blogs)/blogs/[id]/(component)/BlogHeader";
import { BlogTabs } from "@/app/(root)/(blogs)/blogs/[id]/(component)/BlogTabs";

type BlogPageProps = {
  params: Promise<{ id: string }>;
};

function findBlogByParam(id: string) {
  let decodedId = id;

  try {
    decodedId = decodeURIComponent(id);
  } catch {
    decodedId = id;
  }

  return blogs.find((item) => item.slug === id || item.slug === decodedId);
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = findBlogByParam(id);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = findBlogByParam(id);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((item) => item.slug !== blog.slug)
    .sort((a, b) => {
      if (a.category === blog.category && b.category !== blog.category)
        return -1;
      if (a.category !== blog.category && b.category === blog.category)
        return 1;
      return b.views - a.views;
    })
    .slice(0, 3);

  return (
    <main>
      <article>
        <BlogHeader blog={blog} />
        <BlogTabs
          content={blog.contentHTML || `<p>${blog.excerpt}</p>`}
          title={blog.title}
        />
      </article>

      <section className="border-t border-border bg-card/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">Related posts</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} blog={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
