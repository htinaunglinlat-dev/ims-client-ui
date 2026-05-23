"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/blogs", label: "Blogs" },
  { to: "/services", label: "Services" },
  // { to: "/about", label: "About Us" },
  // { to: "/contact", label: "Contact Us" },
] as const;

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  // const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mounted = useIsMounted();
  const isActive = (to: string) =>
    to === "/"
      ? pathname === to
      : pathname === to || pathname.startsWith(`${to}/`);
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/20 bg-background/70 shadow-soft backdrop-blur-xl supports-backdrop-filter:bg-background/55"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Brand name — animated gradient text */}
          <span className="bg-linear-to-r from-blue-700 via-cyan-700 to-sky-700 text-transparent bg-clip-text font-bold text-xl">
            Lucky7andOne
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = isActive(n.to);

            return (
              <Link
                key={n.to}
                href={n.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground",
                  active &&
                    "bg-blue-500/10 text-blue-700 shadow-soft hover:bg-blue-500/15 hover:text-blue-700 dark:text-blue-300",
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-accent transition-colors"
          >
            {/* {mounted && resolvedTheme === "dark" ? ( */}
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <span className="h-4 w-4"></span>
            )}
          </button>
          <Link href="/login" className="hidden sm:inline-flex">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register" className="hidden sm:inline-flex">
            <Button className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-md hover:opacity-90 shadow-soft">
              Sign Up
            </Button>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden h-9 w-9 grid place-items-center rounded-lg border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                aria-current={isActive(n.to) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                  isActive(n.to) &&
                    "bg-blue-500/10 text-blue-700 shadow-soft hover:bg-blue-500/15 hover:text-blue-700 dark:text-blue-300",
                )}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 flex gap-2 sm:hidden">
              <Link
                href="/login"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link
                href="/register"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full bg-gradient-brand text-primary-foreground">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
