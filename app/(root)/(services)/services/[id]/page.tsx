import type { Metadata } from "next";

import { services } from "@/lib/data/site-data";
import { ProjectDetailFeatureShowcase } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailFeatureShowcase";
import { ProjectDetailHero } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailHero";
import { ProjectDetailOverview } from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailOverview";

type ServiceDetailPageProps = {
  params: Promise<{ id: string }>;
};

function titleFromSlug(id: string) {
  const service = services.find((item) => item.slug === id);

  if (service) {
    return service.title;
  }

  return id
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const title = titleFromSlug(id);

  return {
    title: `${title} - Service Detail`,
    description: `Service case study skeleton for ${title}.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { id } = await params;
  const title = titleFromSlug(id);

  return (
    <main className="bg-background text-foreground">
      <ProjectDetailHero title={title} />
      <ProjectDetailOverview />
      <ProjectDetailFeatureShowcase />
    </main>
  );
}
