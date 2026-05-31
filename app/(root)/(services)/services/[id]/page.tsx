import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailFeatureShowcase } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailFeatureShowcase";
import { ProjectDetailHero } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailHero";
import { ProjectDetailOverview } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailOverview";
import {
  getServiceProjectDetailById,
  serviceProjectDetails,
} from "@/lib/data/project-detail-data";

type ServiceDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return serviceProjectDetails.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getServiceProjectDetailById(id);

  if (!project) {
    return {
      title: "Service Detail",
      description: "Service detail page.",
    };
  }

  return {
    title: `${project.title} - Service Detail`,
    description: project.overviewDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { id } = await params;
  const project = getServiceProjectDetailById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <ProjectDetailHero
        title={project.title}
        tagline={project.heroTagline}
        meta={project.heroMeta}
      />
      <ProjectDetailOverview
        title={project.overviewTitle}
        description={project.overviewDescription}
        stats={project.overviewStats}
      />
      <ProjectDetailFeatureShowcase
        title={project.showcaseTitle}
        description={project.showcaseDescription}
        items={project.showcaseItems}
        layout={project.layout}
      />
    </main>
  );
}
