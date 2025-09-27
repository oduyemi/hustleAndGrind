import "./globals.css";
import ClientSideLayout from "@/components/ClientSideLayout";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Hustle & Grind Accelerator",
  description: "Next level support for businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"   // adds "light" or "dark" class to <html>
          defaultTheme="system"
          enableSystem
        >
          <ClientSideLayout>{children}</ClientSideLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
