import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import type { Blog } from "@/lib/data/blog-data";
import { ShareActions } from "@/app/(root)/(blogs)/blogs/[id]/(component)/BlogInteractions";

type BlogHeaderProps = {
  blog: Blog;
};

export function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-border pt-16 pb-10">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Back to blog
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground">
            {blog.category}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> {blog.date}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {blog.readingTime}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
          {blog.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{blog.excerpt}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-500 font-semibold text-primary-foreground">
              {blog.author
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="text-sm">
              <div className="font-semibold">{blog.author}</div>
              <div className="text-xs text-muted-foreground">
                {blog.authorRole}
              </div>
            </div>
          </div>

          <ShareActions />
        </div>
      </div>
    </header>
  );
}
