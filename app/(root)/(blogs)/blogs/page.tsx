import type { Metadata } from "next";

import { blogs } from "@/lib/data/blog-data";

import { BlogsBrowser } from "./BlogsBrowser";
import { BlogHero } from "./(component)/BlogHero";

export const metadata: Metadata = {
  title: "Blogs - Lucky7andOne",
  description:
    "Essays on AI, web, mobile, IoT and modern engineering from the Lucky7andOne team.",
};

export default function BlogsPage() {
  return (
    <main>
      <BlogHero />

      <BlogsBrowser blogs={blogs} />
    </main>
  );
}
