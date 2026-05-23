"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function StatsSection() {
  const reasons = [
    "Enterprise-grade security standards with type-safety",
    "99.99% uptime for auto-scaled cloud workloads",
    "Agility in code delivery with comprehensive test coverage",
    "Active maintenance monitoring dashboard support",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 border-y border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Reasons */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Why industry leaders choose Lucky7andOne.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            We don't just write code; we solve business problems. Our
            multidisciplinary team brings together design systems, systems
            programmers, and cloud architects to build technology that runs
            fast and scales forever.
          </motion.p>
          <div className="space-y-4">
            {reasons.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center space-x-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-semibold text-foreground/90 text-sm md:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Grid of Stat Cards */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white space-y-2 shadow-lg"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-display">450+</div>
            <div className="text-xs md:text-sm font-semibold text-blue-100 uppercase tracking-wider">
              Projects Delivered
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-card border border-border space-y-2 shadow-soft"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-display text-foreground">98%</div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Client Satisfaction
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-card border border-border space-y-2 shadow-soft"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-display text-foreground">24/7</div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Global Support
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white space-y-2 shadow-lg"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-display">15+</div>
            <div className="text-xs md:text-sm font-semibold text-indigo-100 uppercase tracking-wider">
              Active Partnerships
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
