"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  badge: string;
  slug: string;
  glowColor: string;
}

export interface ProjectShowcaseCardProps {
  project: Project;
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
        y: -12,
        scale: 1.02,
        transition: { type: "spring", stiffness: 280, damping: 20 },
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="relative h-full"
    >
      <Card className="h-full justify-between gap-0 rounded-md border border-border bg-card py-0 shadow-soft transition-all duration-300 hover:border-blue-500/30 hover:bg-card/90 hover:shadow-2xl">
        {/* Image on Top */}
        <div className="relative aspect-16/10 overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/30 transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="space-y-6 p-8">
          {/* Myanmar Data: Title & Description */}
          <CardHeader className="space-y-3 p-0">
            <CardTitle className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors leading-tight">
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>

          {/* English Data: Bullet Features */}
          <div className="border-t border-border/80 pt-6 space-y-3.5">
            <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">
              Key Features & Specifications:
            </p>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat) => (
                <li
                  key={feat}
                  className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center space-x-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        {/* Action Button */}
        <CardFooter className="border-0 p-8 pt-0">
          <Link
            href={`/services/${project.slug}`}
            className="inline-flex w-full items-center justify-center space-x-2 px-5 py-3.5 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all group-hover:shadow-md cursor-pointer rounded"
          >
            <span>View</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
