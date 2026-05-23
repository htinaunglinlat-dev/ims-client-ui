import React from "react";
import { ServicesHero } from "./(component)/ServicesHero";
import { TechMarquee } from "./(component)/TechMarquee";
import { ProjectShowcaseSection } from "./(component)/ProjectShowcaseSection";
import { WhatWeBuild } from "./(component)/WhatWeBuild";
import { StatsSection } from "./(component)/StatsSection";
import { ContactCTA } from "./(component)/ContactCTA";

export const metadata = {
  title: "Services | Lucky7andOne Solutions",
  description:
    "We combine systems engineering and cloud application architecture to build robust infrastructure that moves your metrics forward.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-12 bg-background">
      <ServicesHero />
      <ProjectShowcaseSection />
      <TechMarquee />
      <WhatWeBuild />
      <StatsSection />
      <ContactCTA />
    </div>
  );
}
