import "./globals.css";
import "animate.css";
import ClientSideLayout from "@/components/ClientSideLayout"; 
import Head from "next/head";

export const metadata = {
  title: "Hustle & Grind Accelerator",
  description: "Next level support for businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Head>
          <title>Hustle & Grind | By Adewale</title>
          <meta name="description" content="Accelerator Program" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Favicon & Icons */}
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* Android Icons */}
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        </Head>
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
