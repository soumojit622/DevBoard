import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Shield, FileText, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Links with icons */}
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className={`${buttonVariants({
              size: "sm",
              variant: "ghost",
            })} flex items-center gap-1 transition-colors hover:text-primary`}
          >
            <Shield className="w-4 h-4" />
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className={`${buttonVariants({
              size: "sm",
              variant: "ghost",
            })} flex items-center gap-1 transition-colors hover:text-primary`}
          >
            <FileText className="w-4 h-4" />
            Terms of Service
          </Link>
        </div>

        {/* Right: Copyright with icon */}
        <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
          <Copyright className="w-3 h-3" />
          {new Date().getFullYear()} Devboard. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
