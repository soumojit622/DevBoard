import { Medal } from "lucide-react";
import { Merriweather, Outfit } from "next/font/google";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const textFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col px-4 py-8">
      {/* Heading Section */}
      <div
        className={cn(
          "flex items-center justify-center flex-col text-center",
          headingFont.className
        )}
      >
        {/* Badge */}
        <div
          className="mb-4 flex items-center border shadow-sm p-4 
                        bg-amber-100 text-amber-700 
                        dark:bg-amber-900 dark:text-amber-300
                        rounded-full uppercase transition-colors duration-300"
        >
          <Medal className="h-6 w-6 mr-2" />
          Ranked #1 in task management
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl text-neutral-900 dark:text-neutral-100 mb-6">
          DevBoard empowers teams to
        </h1>

        {/* Animated Gradient Text */}
        <div
          className="text-3xl md:text-6xl 
                     text-white px-4 p-2 rounded-md pb-4 w-fit 
                     bg-[linear-gradient(270deg,_#d946ef,_#ec4899,_#ef4444,_#f97316,_#9333ea)] 
                     bg-[length:300%_300%] animate-gradient
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
                     dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        >
          push projects forward.
        </div>
      </div>

      {/* Subtext */}
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-500 dark:text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate effortlessly, streamline workflows, and reach your highest
        productivity levels. Whether you're a startup or a global enterprise,
        DevBoard adapts to your unique way of working — so you can achieve more,
        together.
      </div>

      {/* Call-to-Action Button */}
      <Link
        href="/sign-up"
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        )}
      >
        Start using DevBoard for free
      </Link>
    </div>
  );
};

export default MarketingPage;
