"use client";

import Link from "next/link";
import { Github, LogIn, UserPlus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 shadow-sm">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between px-4 h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Nav Actions */}
        <div className="flex items-center gap-3">
          {/* Mode Toggle */}
          {/* <ModeToggle /> */}

          {/* Login */}
          <Link
            href="/sign-in"
            className={`${buttonVariants({
              size: "sm",
              variant: "outline",
            })} flex items-center gap-2 hover:shadow-md transition`}
          >
            <LogIn className="h-4 w-4" />
            Login
          </Link>

          {/* Sign Up */}
          <Link
            href="/sign-up"
            className={`${buttonVariants({
              size: "sm",
            })} flex items-center gap-2 hover:shadow-md transition`}
          >
            <UserPlus className="h-4 w-4" />
            Get DevBoard for free
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/soumojit622/DevBoard"
            target="_blank"
            rel="noreferrer noopener"
            className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
