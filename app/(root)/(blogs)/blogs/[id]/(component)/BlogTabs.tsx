"use client";

import { useRef } from "react";
import { BookOpenText, Images } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogContent } from "@/app/(root)/(blogs)/blogs/[id]/(component)/BlogContent";
import { BlogImagePages } from "@/app/(root)/(blogs)/blogs/[id]/(component)/BlogImagePages";
import { ScrollControls } from "@/app/(root)/(blogs)/blogs/[id]/(component)/ScrollControls";
import { motion } from "framer-motion";

type BlogTabsProps = {
  content: string;
  title: string;
};

export function BlogTabs({ content, title }: BlogTabsProps) {
  const tabsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={tabsRef} className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Tabs defaultValue="content">
        <div className="mb-5 flex justify-center">
          <TabsList>
            <TabsTrigger value="content">
              <BookOpenText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="images">
              <Images className="h-4 w-4" />
              Images
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="content" className="text-base/relaxed">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto max-w-3xl"
          >
            <BlogContent content={content} />
          </motion.div>
        </TabsContent>

        <TabsContent value="images" className="text-base/relaxed">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto max-w-3xl"
          >
            <BlogImagePages title={title} />
          </motion.div>
        </TabsContent>
      </Tabs>

      <ScrollControls targetRef={tabsRef} />
    </div>
  );
}
