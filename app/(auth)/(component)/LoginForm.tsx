"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Home, Lock, Mail } from "lucide-react";
import { AuthBackground } from "./AuthBackground";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative isolate min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-10 sm:py-12">
      {/* Go Home Button */}
      <Link
        href="/"
        className="group absolute top-6 left-6 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20"
      >
        <span className="relative h-4 w-4 overflow-hidden">
          <Home className="absolute inset-0 h-4 w-4 transition-all duration-200 group-hover:-translate-x-2 group-hover:opacity-0" />
          <ArrowLeft className="absolute inset-0 h-4 w-4 translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
        </span>
        Go Home
      </Link>

      {/* Background SVG shapes & gradient */}
      <AuthBackground />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[440px] rounded-3xl border border-white/20 bg-white/10 px-6 py-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-9 sm:py-10"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex w-full items-center justify-center gap-2"
        >
          {/* Brand name — animated gradient text */}
          <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-white bg-clip-text text-3xl font-extrabold tracking-wide text-transparent drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]">
            Lucky7andOne
          </span>
        </Link>

        {/* Title */}
        <div className="mb-7 mt-7">
          <h1 className="text-2xl font-bold tracking-wide text-white">Login</h1>
        </div>

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-wide text-white/85"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                type="email"
                placeholder="username@gmail.com"
                className="h-12 w-full rounded-md border border-white/15 bg-white/95 px-4 pl-11 text-sm text-slate-950 shadow-[0_12px_28px_rgba(3,7,18,0.12)] outline-none transition-all placeholder:text-slate-400 focus:border-cyan-200 focus:bg-white focus:ring-4 focus:ring-cyan-300/25 disabled:cursor-not-allowed disabled:bg-white/60 disabled:text-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="password"
              className="text-xs font-semibold tracking-wide text-white/85"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 w-full rounded-md border border-white/15 bg-white/95 px-4 pl-11 pr-12 text-sm text-slate-950 shadow-[0_12px_28px_rgba(3,7,18,0.12)] outline-none transition-all placeholder:text-slate-400 focus:border-cyan-200 focus:bg-white focus:ring-4 focus:ring-cyan-300/25"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <Link
              href="#"
              className="text-xs font-medium text-white/80 transition-colors hover:text-white hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-3 h-12 w-full rounded-md bg-[#0b284f] text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all hover:bg-[#071c3a] active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-7 text-center text-xs text-white/70">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/register"
            className="font-bold text-white hover:underline"
          >
            Register for free
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
