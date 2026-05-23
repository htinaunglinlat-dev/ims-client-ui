"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/site-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">
              What we do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured services
            </h2>
            <p className="text-muted-foreground mt-3">
              End-to-end engineering across web, mobile, AI, and the physical
              world.
            </p>
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-8 rounded-3xl bg-white dark:bg-slate-900 border border-border hover:border-brand-500/50 transition-all group relative overflow-hidden hover:shadow-lg hover:scale-102 hover:rounded-sm",
                )}
              >
                <div
                  className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-linear-to-br ${s.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity`}
                />
                <div
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${s.gradient} text-white shadow-soft`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.short}
                </p>
                <Link
                  href={"/services"}
                  className="mt-5 inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
