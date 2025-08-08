import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

type LogoProps = {
  isMobile?: boolean;
};

export const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link href="/" aria-label="Devboard Home">
      <div
        className={cn(
          !isMobile && "hidden",
          "group transition transform hover:opacity-90 flex items-center gap-x-2"
        )}
      >
        <Image
          src="/logo.svg"
          alt="Devboard logo icon"
          height={34}
          width={34}
          priority
        />
        <p
          className={cn(
            "text-lg font-bold tracking-wide bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent",
            headingFont.className
          )}
        >
          Devboard
        </p>
      </div>
    </Link>
  );
};
