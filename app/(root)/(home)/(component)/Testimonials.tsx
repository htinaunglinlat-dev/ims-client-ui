"use client";
import { testimonials } from "@/lib/data/site-data";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { TestimonialCard } from "@/components/Card/TestimonialCard";

const infiniteTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: false,
      watchDrag: true,
    },
    [
      AutoScroll({
        speed: 0.8,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        startDelay: 0,
      }),
    ],
  );
  return (
    <section className="py-20 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Trusted by builders and learners
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white dark:from-slate-950 to-transparent" />

        {/* right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white dark:from-slate-950 to-transparent" />

        <div ref={emblaRef} className="overflow-hidden py-10">
          <div className="-ml-5 flex">
            {infiniteTestimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-[500px] shrink-0 grow-0 pl-5"
              >
                <TestimonialCard
                  testimonial={t}
                  index={i % testimonials.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
