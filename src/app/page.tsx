import Hero from "@/components/Hero";
import About from "@/components/About";
import ForWho from "@/components/ForWho";
import RibbonTransition from "@/components/RibbonTransition";
import Solutions from "@/components/Solutions";
import Courses from "@/components/Courses";
import BePart from "@/components/BePart";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <ForWho />
      <RibbonTransition />
      <Solutions />
      <Courses />
      <BePart />
      <FAQ />
      <Footer />
    </main>
  );
}
