import { Inter } from "next/font/google";
import MainBody from "@/components/MainBody/MainBody";
import Query from "@/components/MainBody/Query/Query";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  relative  ${inter.className}`}
    >
      <Navbar />

      <section className="bg-white   w-full py-5">
        <MainBody />
      </section>

      <Footer/>

      <Query />
    </main>
  );
}
