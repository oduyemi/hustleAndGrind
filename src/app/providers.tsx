"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"       // puts "dark" or "light" on <html>
      defaultTheme="system"   // 👈 better than "light"
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
}
