"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Home } from "lucide-react";
import { AuthBackground } from "./AuthBackground";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative isolate min-h-screen w-full flex items-center justify-center py-12 px-4 overflow-hidden">
      {/* Go Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/30"
      >
        <Home className="h-4 w-4" />
        Go Home
      </Link>

      {/* Background SVG shapes & gradient */}
      <AuthBackground />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[420px] rounded-3xl border border-white/20 bg-white/10 p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white"
      >
        {/* Logo */}
        <Link
          href="/"
          className="w-full flex justify-center items-center gap-2 group mb-8"
        >
          {/* Brand name — animated gradient text */}
          <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-white text-transparent bg-clip-text font-extrabold text-3xl tracking-wide drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]">
            Lucky7andOne
          </span>
        </Link>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Register
          </h1>
        </div>

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-semibold tracking-wide text-white/90"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Alex Morgan"
              className="w-full h-11 px-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-wide text-white/90"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="username@gmail.com"
              className="w-full h-11 px-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-xs font-semibold tracking-wide text-white/90"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full h-11 pl-4 pr-10 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all font-sans"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-[#0b284f] text-white text-sm font-semibold hover:bg-[#071c3a] active:scale-[0.98] transition-all shadow-lg shadow-black/10 mt-6"
          >
            Create Account
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-xs text-white/70">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-white hover:underline">
            Sign in
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
