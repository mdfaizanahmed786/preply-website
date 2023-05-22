import { Inter } from "next/font/google";
import AboutTutor from "@/components/HeroSection/AboutTutor";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Resume from "@/components/Resume/Resume";
import Tutor from "@/components/Tutor/Tutor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  relative  ${inter.className}`}
    >
      <Navbar />

      <section className="bg-white   w-full py-5">
        <div className="max-w-[1100px] mx-auto justify-between flex gap-8  ">
          <div className="flex-1">
            <HeroSection />
            <div className="flex flex-col gap-4">
              <Tutor/>
              <Resume/>
            </div>
          </div>
          <AboutTutor />
        </div>
      </section>

      <div className="bg-primary flex text-white text-3xl justify-center rounded-full shadow-md items-center shrink-0 h-16 w-16  grow-0 fixed right-5 bottom-5">
        <p>?</p>
      </div>
    </main>
  );
}
