import "./globals.css";
import "animate.css";
import ClientSideLayout from "@/components/ClientSideLayout"; 

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
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
