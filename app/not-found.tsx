"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, SearchX, HelpCircle } from "lucide-react";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      {/* Icon */}
      <SearchX className="w-20 h-20 text-primary mb-6 animate-pulse" />

      {/* Heading */}
      <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
        Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
        Check the URL for typos, or try navigating from the homepage.
      </p>

      {/* Extra Info */}
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 max-w-md space-y-2">
        <p>
          If you think this is a mistake, please{" "}
          <a
            href="mailto:support@devboard.com"
            className="text-primary hover:underline transition-colors"
          >
            contact our support team
          </a>{" "}
          for assistance.
        </p>
        <p className="flex items-center justify-center gap-1">
          <HelpCircle className="w-4 h-4 text-primary" />
          You can also check our{" "}
          <a
            href="/help"
            className="text-primary hover:underline transition-colors"
          >
            Help Center
          </a>
          .
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Button>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="hover:bg-accent transition-all"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
