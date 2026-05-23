import { HeroCarousel } from "@/app/(root)/(home)/(component)/HeroCarousel";
import { StatsSection } from "./(component)/StatsSection";
import { ServicesGrid } from "./(component)/ServiceGrid";
import BlogSection from "./(component)/BlogSection";
import { Testimonials } from "./(component)/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <StatsSection />
      <ServicesGrid />
      <BlogSection />
      <Testimonials />
    </div>
  );
}
