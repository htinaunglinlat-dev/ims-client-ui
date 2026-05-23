"use client";

import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { toast } from "sonner";

import { Share2 } from "lucide-react";

// ============================================================================
// SHARE ACTIONS SECTION
// ============================================================================
export function ShareActions() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Share2 className="h-4 w-4 text-muted-foreground" />
      {[
        FacebookLogoIcon,
        InstagramLogoIcon,
        TwitterLogoIcon,
        YoutubeLogoIcon,
      ].map((Icon, index) => (
        <button
          key={index}
          type="button"
          aria-label="Share post"
          onClick={() => toast.success("Link copied to clipboard")}
          className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-accent"
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}
