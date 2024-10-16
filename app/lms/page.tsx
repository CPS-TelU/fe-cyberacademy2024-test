import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Header from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 pt-16 z-[999]">
      <DashboardLayout />
    </main>
  );
}
