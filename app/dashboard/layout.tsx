import type { Metadata } from "next";
import { poppins } from "@/styles/font";
import "../globals.css";
import Header from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={`${poppins.className} py-8`}>{children}</body>
    </html>
  );
}
