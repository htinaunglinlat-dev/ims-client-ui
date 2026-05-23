"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-28 text-white">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Cyan/Skyblue Circle */}
        <div
          className="absolute rounded-full blog-hero-orb-cyan"
          style={{
            top: "-15%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "rgba(6, 182, 212, 0.5)",
            filter: "blur(90px)",
          }}
        />

        {/* Blue/Steelblue Circle */}
        <div
          className="absolute rounded-full blog-hero-orb-blue"
          style={{
            top: "10%",
            right: "-5%",
            width: "550px",
            height: "550px",
            background: "rgba(59, 130, 246, 0.45)",
            filter: "blur(110px)",
          }}
        />

        {/* Violet Circle */}
        <div
          className="absolute rounded-full blog-hero-orb-violet"
          style={{
            bottom: "-15%",
            left: "15%",
            width: "520px",
            height: "520px",
            background: "rgba(139, 92, 246, 0.4)",
            filter: "blur(100px)",
          }}
        />

        {/* Subtle Dark Overlay to ensure good text readability */}
        <div className="absolute inset-0 bg-zinc-950/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4.5 py-2 rounded-full border border-blue-500/30 bg-blue-950/20 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Lucky7andOne Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300"
        >
          Engineering Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed font-medium"
        >
          We combine systems engineering and cloud application architecture to build
          robust infrastructure that moves your metrics forward.
        </motion.p>
      </div>
    </section>
  );
}
