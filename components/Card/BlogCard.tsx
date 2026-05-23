"use client";
import { Clock } from "lucide-react";
import type { Blog } from "@/lib/data/blog-data";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${encodeURIComponent(blog.slug)}`}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all"
    >
      <div className="aspect-16/10 overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src={blog.cover}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
            {blog.category}
          </span>
          <span className="text-muted-foreground inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {blog.readingTime}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {blog.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-3 text-xs text-muted-foreground">
          <div className="h-8 w-8 rounded-full bg-blue-400 grid place-items-center text-primary-foreground text-xs font-semibold">
            {blog.author
              .split(" ")
              .map((s: string) => s[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <div className="font-medium text-foreground">{blog.author}</div>
            <div>{blog.date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
