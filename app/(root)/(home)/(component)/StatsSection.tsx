"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data/site-data";
import { motion, useInView } from "framer-motion";

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  // useInView from framer-motion — fires when the element enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const duration = 3000; // ms
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out: decelerates as it reaches the final value
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(value); // guarantee exact final number
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Stats section ────────────────────────────────────────────────────────────
export function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">By the numbers</h2>
          <p className="text-muted-foreground mt-3">
            A decade of building, teaching, and shipping.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-border shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative hover:scale-105"
            >
              {/* Background icon watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-20 transition-opacity">
                <stat.icon className="w-6 h-6" />
              </div>

              {/* Animated number */}
              <div className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
