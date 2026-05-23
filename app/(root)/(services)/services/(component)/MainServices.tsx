"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const mainServices = [
  {
    id: "ims",
    title: "Inventory Management System (IMS)",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description:
      "Streamline your retail, logistics, or wholesale business operations with real-time stock tracking, automated reordering triggers, barcode scanning integration, and detailed sales data analytics.",
    features: [
      "Real-time Stock Tracking",
      "Automated Reordering",
      "Barcode Integration",
      "Sales Data Analytics",
    ],
    badge: "Operational Efficiency",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "lms",
    title: "Learning Management System (LMS)",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    description:
      "Empower your educators and modern learners with interactive course creation tools, persistent progress tracking, quiz builders, and secure collaborative virtual classrooms.",
    features: [
      "Course Builder Tools",
      "Progress Tracking",
      "Interactive Quiz Maker",
      "Collaborative Workspaces",
    ],
    badge: "Next-Gen Education",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "iot",
    title: "IoT Application",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    description:
      "Connect, monitor, and control your enterprise hardware devices securely in real-time with responsive cloud-based dashboards, customized edge telemetry, and fast analysis pipelines.",
    features: [
      "Real-time Telemetry Maps",
      "MQTT & WebSocket Pipes",
      "OTA Firmware Deployments",
      "Predictive Diagnostics",
    ],
    badge: "Hardware & Cloud Sync",
    color: "from-blue-600 to-indigo-600",
  },
];

export function MainServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest">
          Our Focus Offerings
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Premium Specialized Services
        </h3>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          We focus deeply on delivering custom inventory pipelines,
          intelligent learning systems, and robust IoT solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            className="group relative flex flex-col bg-card hover:bg-card/90 border border-border rounded-[2rem] overflow-hidden shadow-soft hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 h-full"
          >
            {/* Card Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/35 transition-colors duration-300" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  {service.badge}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 space-y-6 pt-6 border-t border-border/80">
                <div className="space-y-3">
                  <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                    Key Features:
                  </p>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs font-medium text-muted-foreground flex items-center space-x-2"
                      >
                        <Zap className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center space-x-2 px-5 py-3.5 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-full transition-all group-hover:shadow-md cursor-pointer"
                >
                  <span>Request Demo System</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
