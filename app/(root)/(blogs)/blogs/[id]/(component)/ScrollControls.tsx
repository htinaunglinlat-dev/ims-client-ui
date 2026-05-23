"use client";

import { useEffect, useState, type RefObject } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

type ScrollControlsProps = {
  targetRef: RefObject<HTMLElement | null>;
};

export function ScrollControls({ targetRef }: ScrollControlsProps) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateControls = () => {
      const target = targetRef.current;

      if (!target) {
        return;
      }

      const rect = target.getBoundingClientRect();
      const top = rect.top + window.scrollY;

      setShowTop(window.scrollY > top + 120);
    };

    updateControls();
    window.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      window.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [targetRef]);

  const scrollToTop = () => {
    const target = targetRef.current;

    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();

    window.scrollTo({
      top: Math.max(rect.top + window.scrollY, 0),
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showTop && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed right-5 bottom-5 z-40"
        >
          <div className="relative">
            {/* Pulsing ring underneath the button to grab user attention */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeOut",
              }}
              className="absolute -inset-1 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600 pointer-events-none"
            />

            {/* The Scroll to Top Button */}
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              aria-label="Scroll to top of section"
              onClick={scrollToTop}
              className="relative z-10 rounded-full bg-background/90 shadow-soft backdrop-blur border border-border"
            >
              <motion.div
                initial={{ y: 2 }}
                animate={{ y: -2 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
