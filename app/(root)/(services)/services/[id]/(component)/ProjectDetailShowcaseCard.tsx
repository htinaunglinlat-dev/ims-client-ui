import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { type ProjectDetailCardLayout } from "@/lib/data/project-detail-data";
import { cn } from "@/lib/utils";

export type ProjectDetailShowcaseItem = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
};

type ProjectDetailShowcaseCardProps = {
  item: ProjectDetailShowcaseItem;
  index: number;
  total: number;
  layout?: ProjectDetailCardLayout;
};

export function ProjectDetailShowcaseCard({
  item,
  index,
  total,
  layout = "desktop",
}: ProjectDetailShowcaseCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const name = item.eyebrow;
  const stepText = `${num} / ${String(total).padStart(2, "0")}`;
  const Icon = item.icon;
  const isDesktopLayout = layout === "desktop";

  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-tr from-[#2e1065] via-[#1e1b4b] to-[#831843] p-8 sm:p-12 lg:p-16 lg:min-h-[580px] flex flex-col justify-between gap-12 shadow-2xl ",
        isDesktopLayout ? "lg:flex-row" : "md:flex-row",
      )}
    >
      {/* Decorative overlapping vector rings in the background */}
      <div className="absolute -left-16 -top-16 w-96 h-96 rounded-full border-30 border-white/2 pointer-events-none" />
      <div className="absolute left-20 top-20 w-80 h-80 rounded-full border-15px border-white/2 pointer-events-none" />

      {/* Left Side Content - Floating Glass Typography */}
      <div
        className={cn(
          "w-full space-y-6 z-10 text-left",
          isDesktopLayout ? "lg:w-1/4" : "md:w-1/2",
        )}
      >
        {/* Step / Category Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest leading-none">
              {name}
            </span>
            <span className="text-[9px] font-medium text-white/50 mt-1 leading-none">
              {stepText}
            </span>
          </div>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <h4 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
            {item.title}
          </h4>
          <p className="text-base sm:text-lg font-normal text-white/80">
            {name} Interface
          </p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/70 font-light">
          {item.description}
        </p>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.features.map((feature) => (
            <span
              key={feature}
              className="px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-white/80 backdrop-blur-md"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side - Floating Glass Card Container */}
      <div
        className={`relative w-full h-[400px] lg:h-[500px] rounded-3xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col justify-between z-10 ${
          isDesktopLayout ? "lg:w-3/4" : "md:w-1/2"
        }`}
      >
        {/* Step Indicator Ornament */}
        <div className="absolute top-4 right-4 w-7 h-7 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white z-20">
          {num}
        </div>

        {/* Mockup Preview Area */}
        <div className="relative flex-1 w-full bg-slate-950/20 p-3 overflow-hidden">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
