import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bell, Mouse } from "lucide-react";

type ProjectDetailHeroProps = {
  title: string;
  tagline: string;
  meta: string;
  thumbnail: string;
};

export function ProjectDetailHero({
  title,
  tagline,
  meta,
  thumbnail,
}: ProjectDetailHeroProps) {
  console.log("i love you thumbnail", thumbnail);
  return (
    <section className="relative overflow-hidden text-center sm:px-6 lg:px-8 h-[500px]">
      <Image
        src={thumbnail}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto flex w-full h-full max-w-7xl items-center justify-center">
        <Link
          href="/services"
          className="group absolute left-4 top-6 z-10 inline-flex items-center text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:left-6 lg:left-8 lg:top-8"
        >
          <ArrowLeft className="mr-0 h-4 w-0 opacity-0 transition-all duration-200 group-hover:mr-2 group-hover:w-4 group-hover:opacity-100 group-focus-visible:mr-2 group-focus-visible:w-4 group-focus-visible:opacity-100" />
          Back to services
        </Link>

        <div className="relative mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:px-16">
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
      </div>
    </section>
  );
}
