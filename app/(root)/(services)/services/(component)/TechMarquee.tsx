"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

const technologies1 = [
  {
    name: "Next.js",
    desc: "Reliable frontend framework for enterprise-grade web apps.",
    slug: "nextdotjs",
  },
  {
    name: "NestJS",
    desc: "Scalable backend framework for clean API architecture.",
    slug: "nestjs",
  },
  {
    name: "Laravel",
    desc: "Powerful PHP framework for business web applications.",
    slug: "laravel",
  },
  {
    name: "PostgreSQL",
    desc: "Reliable relational database for structured data.",
    slug: "postgresql",
  },
  {
    name: "MongoDB",
    desc: "Flexible NoSQL database for modern applications.",
    slug: "mongodb",
  },
  {
    name: "Python",
    desc: "Versatile language for automation, AI, and backend systems.",
    slug: "python",
  },
  {
    name: "SQLite",
    desc: "Standard SQL engine for database management and local caching.",
    slug: "sqlite",
  },
];

const technologies2 = [
  {
    name: "Raspberry Pi (IoT)",
    desc: "Smart device integration and real-time telemetry monitoring.",
    slug: "raspberrypi",
  },
  {
    name: "REST API (Postman)",
    desc: "Standard architecture for reliable and testable web services.",
    slug: "postman",
  },
  {
    name: "Prisma",
    desc: "Modern, type-safe ORM for database querying and modeling.",
    slug: "prisma",
  },
  {
    name: "Docker",
    desc: "Containerization platform for consistent development environments.",
    slug: "docker",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first CSS framework for rapid responsive UI styling.",
    slug: "tailwindcss",
  },
  {
    name: "TypeScript",
    desc: "Typed superset of JavaScript for reliable and scalable apps.",
    slug: "typescript",
  },
  {
    name: "Node.js",
    desc: "High-performance server-side JavaScript runtime environment.",
    slug: "nodedotjs",
  },
];

// Quadruplicate for a seamless infinite scroll
const duplicatedTech1 = [
  ...technologies1,
  ...technologies1,
  ...technologies1,
  ...technologies1,
];
const duplicatedTech2 = [
  ...technologies2,
  ...technologies2,
  ...technologies2,
  ...technologies2,
];

type TechItem = { name: string; desc: string; slug: string };

function TechChip({ tech }: { tech: TechItem }) {
  const iconUrl = `https://cdn.simpleicons.org/${tech.slug}`;
  const shouldInvert = tech.slug === "nextdotjs" || tech.slug === "prisma";

  return (
    <div className="shrink-0 mx-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-center cursor-pointer rounded-2xl border border-border bg-card p-5 transition-all hover:border-blue-500/60 hover:shadow-[0_0_18px_rgba(59,130,246,0.15)] w-20 h-20 group">
            <Image
              src={iconUrl}
              alt={tech.name}
              width={50}
              height={50}
              unoptimized
              className={`w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${
                shouldInvert ? "dark:invert" : ""
              }`}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <span className="font-semibold">{tech.name}</span>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export function TechMarquee() {
  return (
    <TooltipProvider>
      <section className="relative overflow-hidden border-y border-blue-500/20 bg-[#040715] py-24 z-0">
        {/* Northern Lights / Aurora Background Waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
          {/* Cyan Aurora Wave */}
          <motion.div
            className="absolute top-[-25%] left-[-20%] w-[150%] h-[320px] rounded-full mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.35), transparent 70%)",
              filter: "blur(110px)",
            }}
            animate={{
              y: [0, 45, -25, 0],
              skewY: [-8, 4, -8],
              scaleY: [1, 1.25, 0.85, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blue Aurora Wave */}
          <motion.div
            className="absolute top-[10%] right-[-15%] w-[140%] h-[280px] rounded-full mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3), transparent 70%)",
              filter: "blur(120px)",
            }}
            animate={{
              y: [0, -35, 35, 0],
              skewY: [6, -6, 6],
              scaleY: [0.85, 1.15, 0.85],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Indigo/Violet Aurora Wave */}
          <motion.div
            className="absolute bottom-[-15%] left-[5%] w-[130%] h-[300px] rounded-full mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.25), transparent 70%)",
              filter: "blur(100px)",
            }}
            animate={{
              y: [0, 30, -30, 0],
              skewY: [-4, 4, -4],
              scaleY: [1.1, 0.9, 1.1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto mb-14 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">
            Core Infrastructure
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-white">
            Technologies We Use
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100/75">
            Hover over any framework or module to see how it powers our custom
            software applications.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-6 py-4">
          {/* Row 1 — left to right */}
          <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex shrink-0 animate-marquee-left flex-nowrap py-2">
              {duplicatedTech1.map((tech, idx) => (
                <TechChip key={`r1-${tech.name}-${idx}`} tech={tech} />
              ))}
            </div>
          </div>

          {/* Row 2 — right to left */}
          <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex shrink-0 animate-marquee-right flex-nowrap py-2">
              {duplicatedTech2.map((tech, idx) => (
                <TechChip key={`r2-${tech.name}-${idx}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
