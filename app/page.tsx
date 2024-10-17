import HomeLayout from "../components/Layouts/HomeLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { poppins } from "@/styles/font";
export default function Home() {
  return (
    <main className= "py-4">
      <Header />
      <HomeLayout />
      <Footer />
    </main>
  );
}