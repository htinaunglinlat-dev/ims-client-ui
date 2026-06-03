"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ServiceProjectDetail } from "@/lib/data/project-detail-data";

export interface ProjectShowcaseCardProps {
  project: ServiceProjectDetail;
  index?: number;
}

export function ProjectShowcaseCard({
  project,
  index = 0,
}: ProjectShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="group relative h-full"
    >
      <Card className="relative h-full overflow-hidden rounded-lg border border-border bg-card py-0 shadow-sm transition-all duration-200 group-hover:border-blue-500/30 group-hover:shadow-md">
        <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="inline-flex rounded bg-slate-950/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
              {project.heroMeta}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
              Featured System
            </p>
            <h3 className="mt-2 line-clamp-2 text-xl font-extrabold leading-tight text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <CardContent className="space-y-6 p-6">
          <CardHeader className="space-y-3 p-0">
            <CardTitle className="sr-only">{project.title}</CardTitle>
            <CardDescription className="line-clamp-4 text-sm leading-7 text-muted-foreground">
              {project.overviewDescription}
            </CardDescription>
          </CardHeader>

          <div className="space-y-3 border-t border-border pt-5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/70">
              Key Features & Specifications:
            </p>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.overviewStats.map((stat, idx) => (
                <li
                  key={`${idx}-${stat.value}-${stat.label}`}
                  className="flex items-center gap-2.5 text-xs font-medium text-foreground/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="leading-snug">
                    <strong className="font-extrabold text-foreground">
                      {stat.value}
                    </strong>{" "}
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="border-t border-border/70 p-5">
          <Link
            href={`/services/${project.id}`}
            className="inline-flex w-full items-center justify-between rounded-md bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            <span>View case study</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
