"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Footer } from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminRoute = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) {
      const token = localStorage.getItem("token");
      if (!token) router.push("/admin/login");
    }
  }, [isAdminRoute, router]);

  return (
    <>
      {!isAdminRoute && (
        <div className="fixed top-4 right-4 z-50">
          <ThemeSwitcher />
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default ClientSideLayout;
