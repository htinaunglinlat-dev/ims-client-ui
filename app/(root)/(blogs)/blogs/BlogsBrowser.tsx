"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { BlogCard } from "@/components/Card/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Blog } from "@/lib/data/blog-data";

type SortMode = "latest" | "oldest" | "popular";

type BlogsBrowserProps = {
  blogs: Blog[];
};

export function BlogsBrowser({ blogs }: BlogsBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortMode>("latest");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))],
    [blogs],
  );

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const list = blogs.filter((blog) => {
      const matchesCategory = category === "All" || blog.category === category;
      const matchesQuery =
        normalizedQuery === "" ||
        blog.title.toLowerCase().includes(normalizedQuery) ||
        blog.excerpt.toLowerCase().includes(normalizedQuery) ||
        blog.author.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    return [...list].sort((a, b) => {
      if (sort === "popular") return b.views - a.views;

      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();

      if (sort === "oldest") return aTime - bTime;
      return bTime - aTime;
    });
  }, [blogs, category, query, sort]);

  return (
    <>
      {/* Serach Section */}
      <section className="sticky top-16 z-30 border-b border-border/60 bg-background/70 py-4 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-stretch gap-3 rounded-3xl border border-border/70 bg-card/80 p-2 shadow-soft backdrop-blur md:flex-row md:items-center">
            {/* Categories on the left */}
            <div className="flex gap-1.5 overflow-x-auto rounded-full bg-background/60 p-1 md:flex-initial">
              {categories.map((item) => {
                const isActive = item === category;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`relative h-9 shrink-0 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-category-bg"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full"
                        style={{ zIndex: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </button>
                );
              })}
            </div>

            {/* Spacer */}
            <div className="hidden md:block flex-1" />

            {/* Search Input & Sort on the right */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles..."
                  className="h-11 rounded-full border-transparent bg-background/90 pl-10 shadow-none focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>

              <Select
                value={sort}
                onValueChange={(value) => setSort(value as SortMode)}
              >
                <SelectTrigger className="h-11 w-full rounded-full border-transparent bg-background/90 px-4 shadow-none focus:ring-2 focus:ring-primary/30 md:w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No articles found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a different keyword or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.28 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
