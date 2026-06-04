import {
  ProjectDetailShowcaseCard,
  type ProjectDetailShowcaseItem,
} from "@/app/(root)/(services)/services/[id]/(component)/ProjectDetailShowcaseCard";
import type { ProjectDetailCardLayout } from "@/lib/data/project-detail-data";

type ProjectDetailFeatureShowcaseProps = {
  title: string;
  description: string;
  items: ProjectDetailShowcaseItem[];
  layout?: ProjectDetailCardLayout;
};

export function ProjectDetailFeatureShowcase({
  title,
  description,
  items,
  layout = "desktop",
}: ProjectDetailFeatureShowcaseProps) {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
            Product Screens
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            // <motion.div
            //   initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            //   whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            //   viewport={{ once: true, amount: 0.2 }}
            //   transition={{
            //     duration: 0.7,
            //     delay: index * 0.1,
            //     ease: [0.22, 1, 0.36, 1],
            //   }}
            // >
            <ProjectDetailShowcaseCard
              key={`${item.eyebrow}-${index}`}
              item={item}
              index={index}
              total={items.length}
              layout={layout}
            />
            // </motion.div>
          ))}
          {items.length === 0 ? (
            <p className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              Showcase screens will be published in a future update.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
