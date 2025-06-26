"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import "./globals.css";
import "animate.css";

export default function RootLayout({
  children,
  hideLayout = false,
}: {
  children: React.ReactNode;
  hideLayout?: boolean;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hustle & Grind Accelerator</title>
        <meta name="description" content="Next level support for businesses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Icons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body className="m-0 p-0 min-h-screen flex flex-col">
        {!hideLayout ? (
          <ClientSideLayout>{children}</ClientSideLayout>
        ) : (
          children
        )}
      </body>
    </html>
  );
}

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    if (isAdminRoute) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [isAdminRoute, router]);

  return (
    <>
      {!isAdminRoute && <Header />}

      <main className="flex-1">{children}</main>

      {/* {!isAdminRoute && <Footer />} */}
    </>
  );
};
