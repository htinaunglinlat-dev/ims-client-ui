import { Bell, Mouse } from "lucide-react";

type ProjectDetailHeroProps = {
  title: string;
  tagline: string;
  meta: string;
};

export function ProjectDetailHero({ title, tagline, meta }: ProjectDetailHeroProps) {
  return (
    <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden bg-linear-to-br from-blue-500 via-sky-500 to-cyan-700 px-4 py-24 text-center">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 flex items-center justify-center gap-6 text-xs font-bold text-white md:text-sm">
          <span className="inline-flex items-center gap-2">
            <Bell className="h-4 w-4 fill-white" />
            {meta}
          </span>
          <span>&middot;</span>
          <span>January 2025</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg font-light text-white/90 md:text-2xl">
          {tagline}
        </p>

        <Mouse className="mx-auto mt-14 h-10 w-10 animate-bounce text-white" />
      </div>
    </section>
  );
}
