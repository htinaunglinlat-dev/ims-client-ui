"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  date: string;
  message: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div className="p-8 w-full h-[280px] flex flex-col rounded bg-white dark:bg-slate-900 border border-border shadow-sm italic text-muted-foreground relative hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-600 transition duration-300 ease-in-out">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
        ))}
      </div>
      <blockquote className="grow overflow-hidden text-sm leading-relaxed">
        <p
          className="overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
          }}
        >
          &ldquo;{testimonial.message}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-end justify-end gap-3">
        <div className="h-10 w-10 rounded-full grid place-items-center text-primary-foreground text-sm font-semibold bg-blue-500">
          {getInitials(testimonial.name)}
        </div>
        <div className="text-sm">
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-muted-foreground text-xs">
            {testimonial.date}
          </div>
        </div>
      </figcaption>
    </motion.div>
  );
}
