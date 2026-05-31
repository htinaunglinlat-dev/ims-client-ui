"use client";

import { toast } from "sonner";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const companyInfo = {
  email: "winhtutonline@gmail.com",
  phone: "09453741976",
  address: "Mandalay · Yangon · Remote",
};

const medias = [
  {
    name: "Facebook",
    icon: FacebookLogoIcon,
    url: "#",
  },
  {
    name: "Instagram",
    icon: InstagramLogoIcon,
    url: "#",
  },
  {
    name: "Twitter",
    icon: TwitterLogoIcon,
    url: "#",
  },
  {
    name: "Youtube",
    icon: YoutubeLogoIcon,
    url: "#",
  },
];

export function Footer() {
  return (
    <TooltipProvider>
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2 group">
                {/* Brand name — animated gradient text */}
                <span className="bg-linear-to-r from-blue-700 via-cyan-700 to-sky-700 text-transparent bg-clip-text font-bold text-lg">
                  Lucky7andOne
                </span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering modern software, AI, and IoT systems for ambitious
              teams worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {medias.map((m, i) => (
                <a
                  key={`${m.name}-${i}`}
                  href={m.url}
                  className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label={m.name}
                >
                  <m.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <CustomLink href="/" className="hover:text-foreground">
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/services" className="hover:text-foreground">
                  Services
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/blogs" className="hover:text-foreground">
                  Blogs
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/about" className="hover:text-foreground">
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/contact" className="hover:text-foreground">
                  Contact
                </CustomLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {Object.entries(companyInfo).map(([key, value]) => (
                <li key={`${key}-${value}`}>{value}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get monthly insights on AI, engineering, and product.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const email = String(fd.get("email") || "");
                if (!email.includes("@"))
                  return toast.error("Please enter a valid email");
                toast.success("Subscribed — check your inbox.");
                e.currentTarget.reset();
              }}
              className="flex gap-2 relative"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-800 border border-border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
              />
              <button className="absolute right-2 top-1.5 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Lucky7andOne. All rights reserved.
            </p>
            <p>Crafted with precision and care.</p>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  );
}

type CustomLinkProps = React.ComponentProps<typeof Link>;

function CustomLink({ className, children, ...props }: CustomLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "relative inline-block transition duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:-translate-y-0.5 duraiton-300",
        className,
      )}
    >
      {children}
    </Link>
  );
}
