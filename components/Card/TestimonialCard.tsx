"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 w-full h-full flex flex-col rounded bg-white dark:bg-slate-900 border border-border shadow-sm italic text-muted-foreground relative hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-600 transition duration-300 ease-in-out"
    >
      <div className="flex gap-0.5 mb-3">
        {/* Filled stars for the review rating. */}
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
        ))}
        {/* Muted stars for the remaining rating slots. */}
        {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-muted-foreground/20 fill-current"
          />
        ))}
      </div>
      <blockquote className="text-sm leading-relaxed grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-end justify-end gap-3">
        <div className="h-10 w-10 rounded-full grid place-items-center text-primary-foreground text-sm font-semibold bg-blue-500">
          {testimonial.initials}
        </div>
        <div className="text-sm">
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-muted-foreground text-xs">
            {testimonial.role}
          </div>
        </div>
      </figcaption>
    </motion.div>
  );
}
