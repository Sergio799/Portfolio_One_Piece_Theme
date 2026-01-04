import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import ClientWork from "@/components/ClientWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#1a1a1a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <ClientWork />
      <Footer />
    </main>
  );
}
