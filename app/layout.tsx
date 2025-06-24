'use client';

import './globals.css';
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { NavigationMenuDemo } from "@/components/NavBar";
import { MenubarDemo } from "@/components/MenuBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <header className="p-4 border-b flex justify-between items-center bg-white dark:bg-gray-900">
            <div className="hidden md:block">
              <NavigationMenuDemo />
            </div>
            <div className="md:hidden">
              <MenubarDemo />
            </div>
            <ModeToggle />
          </header>

          {/* Main Content */}
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}






