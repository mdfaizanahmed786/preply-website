import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      <Navbar />
      <section className="max-w-[1300px] mx-auto ">
        <HeroSection />
        
      </section>
      
    </main>
  );
}
