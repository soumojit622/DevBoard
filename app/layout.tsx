import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevBoard | Effortless Project & Task Management",
  description:
    "DevBoard is a sleek and intuitive task management platform built for developers and teams. Organize tasks, streamline workflows, and stay in sync — all in one beautifully crafted board.",
  authors: [
    {
      name: "Soumojit Banerjee",
      url: "https://github.com/soumojit622",
    },
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
