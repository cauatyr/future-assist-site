import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen">
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <SectionWrapper>
              <HowItWorks />
            </SectionWrapper>
            <SectionWrapper>
              <Benefits />
            </SectionWrapper>
            <SectionWrapper>
              <About />
            </SectionWrapper>
            <SectionWrapper>
              <Contact />
            </SectionWrapper>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
