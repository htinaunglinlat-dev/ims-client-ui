"use client";

import { serviceProjectDetails } from "@/lib/data/project-detail-data";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

export function ProjectShowcaseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest">
          Featured Products
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Developed Systems
        </h3>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          Hover over each system card to explore key features and technology
          specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceProjectDetails.map((project, index) => (
          <ProjectShowcaseCard
            project={project}
            index={index}
            key={`${project.heroTagline}-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
