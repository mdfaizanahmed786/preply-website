import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      <Navbar />

      <section className="bg-white h-1/2">
        <div className="max-w-[1100px] mx-auto ">
          <HeroSection />
        </div>
      </section>
      
    </main>
  );
}
