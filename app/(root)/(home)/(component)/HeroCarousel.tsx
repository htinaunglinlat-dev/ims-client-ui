"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 5500;

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    // onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const id = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(id);
  }, [emblaApi, selectedIndex]);

  const activeService = services[selectedIndex] ?? services[0];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative h-[85vh] min-h-[620px] overflow-hidden bg-slate-950">
      {/* Hero carousel: Embla owns slide movement while Motion animates image fade/zoom. */}
      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="relative h-full min-w-0 shrink-0 grow-0 basis-full"
            >
              <AnimatePresence initial={false}>
                {selectedIndex === index && (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${service.image_url})`,
                      }}
                    >
                      {/* Image overlays: dark wash and side gradient keep copy readable. */}
                      <div className="absolute inset-0 bg-slate-950/35" />
                      <div className="absolute inset-0 bg-linear-to-r from-slate-950/65 via-slate-950/25 to-slate-950/5" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Hero content: animated text and actions for the active Embla slide. */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            {/* Eyebrow badge above the headline. */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white shadow-soft backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full bg-linear-to-br ${activeService.gradient} text-white shadow-soft`}
                >
                  <ActiveIcon className="h-4 w-4" />
                </span>
                <span className="font-semibold">{activeService.title}</span>
              </div>
            </motion.div>

            {/* Active slide headline. */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              {activeService.title}
            </motion.h1>

            {/* Active slide description. */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl"
            >
              {activeService.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel controls: bottom-right previous and next buttons. */}
      <div className="absolute right-6 bottom-8 z-20 flex gap-4 sm:right-10 sm:bottom-10">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/20 text-white shadow-soft backdrop-blur-md transition-all hover:bg-white/30"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/20 text-white shadow-soft backdrop-blur-md transition-all hover:bg-white/30"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators: bottom-center dots update Embla's selected slide. */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {services.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Show ${service.title}`}
            aria-current={index === selectedIndex}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              selectedIndex === index ? "w-8 bg-blue-500" : "w-4 bg-white/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
