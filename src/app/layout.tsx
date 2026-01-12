import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import { Provider as RollbarProvider } from "@rollbar/react";
import { clientConfig } from "@/lib/rollbar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import TargetCursor from "@/components/TargetCursor";
import { HeadTags } from "@/components/common/HeadTags";

// Trigger env validation
import env from "@/lib/env";

const funnelSans = Funnel_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clipposaurus Documentation",
  description: "Complete documentation for Clipposaurus - secure, ephemeral content sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RollbarProvider config={clientConfig}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <HeadTags />
        </head>
        <body className={`${funnelSans.className} antialiased h-screen md:portrait:h-fit overflow-auto bg-zinc-100 dark:bg-zinc-950 text-foreground`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TargetCursor
              spinDuration={2}
              hideDefaultCursor={true}
            />
            <div className="flex flex-col">
              <div className="sticky top-0 z-50 shrink-0 h-[10dvh] w-full bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
                <Navbar />
              </div>
              {children}
              <div>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </RollbarProvider>
  );
}
