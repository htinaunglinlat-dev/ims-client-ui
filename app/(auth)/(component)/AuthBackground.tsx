"use client";

import { motion } from "framer-motion";

export function AuthBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-linear-to-br from-[#023e8a] via-[#0077b6] to-[#03045e]">
      {/* Top Center Ring/Torus */}
      <motion.svg
        className="absolute -top-10 left-[45%] w-48 h-48 opacity-60 pointer-events-none"
        viewBox="0 0 100 100"
        animate={{ rotate: 360, y: [0, 5, -5, 0] }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="120 40"
        />
      </motion.svg>

      {/* Right Side Curly Spiral */}
      <motion.svg
        className="absolute -right-16 top-[15%] w-72 h-[450px] opacity-75 pointer-events-none filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]"
        viewBox="0 0 150 400"
        animate={{ y: [0, 15, -15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="50%" stopColor="#0066ff" />
            <stop offset="100%" stopColor="#001144" />
          </linearGradient>
        </defs>
        <path
          d="M 30 20 C 130 50 130 110 50 140 C -30 170 -30 230 50 260 C 130 290 130 350 70 380"
          fill="none"
          stroke="url(#spiralGrad)"
          strokeWidth="24"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Bottom Right Wave */}
      <motion.svg
        className="absolute right-12 bottom-[25%] w-36 h-20 opacity-70 pointer-events-none filter drop-shadow-[0_8px_15px_rgba(0,0,0,0.2)]"
        viewBox="0 0 120 60"
        animate={{ x: [0, 8, -8, 0], y: [0, -4, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3a7bd5" />
            <stop offset="100%" stopColor="#3a6073" />
          </linearGradient>
        </defs>
        <path
          d="M 10 25 Q 35 5 60 25 T 110 25"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 10 45 Q 35 25 60 45 T 110 45"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.7"
        />
      </motion.svg>

      {/* Left Side Z-Shape */}
      <motion.svg
        className="absolute left-10 top-[25%] w-40 h-40 opacity-75 pointer-events-none filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]"
        viewBox="0 0 100 100"
        animate={{ y: [0, -10, 10, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="zGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
        </defs>
        <path
          d="M 25 35 L 75 35 L 25 65 L 75 65"
          fill="none"
          stroke="url(#zGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Bottom Left Huge Spiral */}
      <motion.svg
        className="absolute -left-20 -bottom-20 w-80 h-80 opacity-60 pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
        viewBox="0 0 200 200"
        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.03, 0.97, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient
            id="leftSpiralGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0052d4" />
            <stop offset="50%" stopColor="#4364f7" />
            <stop offset="100%" stopColor="#6fb1fc" />
          </linearGradient>
        </defs>
        <path
          d="M 30 170 C 50 70 150 50 170 130 C 180 170 140 190 110 160 C 80 130 100 80 150 70"
          fill="none"
          stroke="url(#leftSpiralGrad)"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Bottom Center-Left C-Tube */}
      <motion.svg
        className="absolute left-[25%] bottom-[10%] w-56 h-56 opacity-70 pointer-events-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
        viewBox="0 0 120 120"
        animate={{ y: [0, -12, 12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2193b0" />
            <stop offset="100%" stopColor="#6dd5ed" />
          </linearGradient>
        </defs>
        <path
          d="M 20 60 A 40 40 0 0 0 100 60"
          fill="none"
          stroke="url(#tubeGrad)"
          strokeWidth="18"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
