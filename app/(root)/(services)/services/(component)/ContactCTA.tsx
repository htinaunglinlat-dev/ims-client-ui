"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Layers } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-28 sm:px-6 lg:px-8">
      <div className="p-10 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#070b1e] via-[#0b1336] to-[#040817] text-white relative overflow-hidden shadow-2xl border border-blue-500/10">
        {/* Absolute Background Elements */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Layers className="w-40 h-40 text-blue-500 rotate-12" />
        </div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Copy and contact links */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              Let&apos;s Partner Up
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Let&apos;s Build Your Digital Solution
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Whether you need an Inventory Management System (IMS), Learning
              Management System (LMS), IoT platform, or custom business systems,
              we can help you design and develop a highly reliable, responsive
              solution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-6 text-sm text-slate-300">
              <div className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:support@lucky7andone.com">
                  support@lucky7andone.com
                </a>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+15557101700">+1 (555) 710-1700</a>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Action CTA Container */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end w-full">
            <div className="w-full max-w-sm bg-white/[0.03] border border-white/10 p-8 rounded-3xl text-center space-y-6 backdrop-blur-md">
              <h4 className="font-semibold text-lg text-white">
                Start a system consult
              </h4>
              <p className="text-xs text-slate-400">
                Get an expert architecture assessment within 1 business day.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full transition-all shadow-xl shadow-blue-500/20 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
