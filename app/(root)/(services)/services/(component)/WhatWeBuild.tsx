"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Cpu,
  Globe,
  Server,
  LayoutDashboard,
} from "lucide-react";

const buildCategories = [
  {
    title: "Business Management Systems",
    desc: "Bespoke software engineered to streamline high-volume operations, optimize workflows, and synchronize enterprise assets.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Education Platforms",
    desc: "E-learning ecosystems, course networks, and certification portals built for interactive learning and active student engagement.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "IoT-Based Monitoring Systems",
    desc: "End-to-end sensor network integrations with robust edge telemetry, custom command protocols, and persistent datastreams.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Custom Web Applications",
    desc: "Interactive, highly secure responsive layouts optimized for fast load speed, high SEO rankings, and native-feeling interactivity.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Scalable Backend APIs",
    desc: "Type-safe, robust application programming interfaces capable of handling massive concurrency and secured with industry endpoints.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Dashboard & Admin Solutions",
    desc: "Visually striking interactive portals mapping complex database tables into elegant, action-oriented data visualizations.",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function WhatWeBuild() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest">
          Our Work
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          What We Build
        </h3>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          Our engineering squads regularly build high-performance business
          applications, secure API channels, and dashboard integrations.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {buildCategories.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="p-8 bg-card hover:bg-card/90 border border-border rounded-3xl hover:border-blue-500/30 hover:shadow-soft hover:scale-[1.02] transition-all duration-300 flex flex-col items-start space-y-5"
          >
            <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
              {item.icon}
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
