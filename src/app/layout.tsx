import "./globals.css";
import ClientSideLayout from "@/components/ClientSideLayout";

export const metadata = {
  title: "Hustle & Grind Accelerator",
  description: "Next level support for businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Inline script runs before React to set initial theme class on <html>
  const setThemeScript = `
    (function() {
      try {
        var t = localStorage.getItem('theme');
        if (!t) {
          t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
        }
        if (t === 'dark') document.documentElement.classList.add('dark-theme');
        else document.documentElement.classList.remove('dark-theme');
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
