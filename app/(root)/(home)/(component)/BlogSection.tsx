"use client";

import { BlogCard } from "@/components/Card/BlogCard";
import { blogs } from "@/lib/data/blog-data";
import { motion } from "framer-motion";

export default function BlogSection() {
  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured services
          </h2>
          <p className="text-muted-foreground mt-3">
            End-to-end engineering across web, mobile, AI, and the physical
            world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group flex flex-col h-full rounded-3xl bg-white dark:bg-slate-900 border border-border overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              <BlogCard blog={b} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
