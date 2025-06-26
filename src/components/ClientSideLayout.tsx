"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Header } from "@/components/Header";

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminRoute = pathname?.startsWith("/admin");

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
    </>
  );
};

export default ClientSideLayout;
