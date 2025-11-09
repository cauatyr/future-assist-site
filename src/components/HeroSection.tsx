import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "./ui/button";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import heroPoster from "@/assets/hero-video-poster.jpg";
import BackgroundAI from "./BackgroundAI";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Interactive glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background Effect + Neural Network */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          {/* Parallax Background */}
          <motion.div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url(${heroPoster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ backgroundPositionY: "0%" }}
            animate={{ 
              scale: [1, 1.05, 1],
              backgroundPositionY: ["0%", "10%", "0%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
          
          {/* Interactive Glow Effect */}
          <div className="interactive-glow absolute inset-0 pointer-events-none" />
          
          {/* Morphing Particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              background: [
                'radial-gradient(circle at 20% 30%, rgba(0,255,255,0.12), transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(108,99,255,0.18), transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.12), transparent 70%)'
              ] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Neural Network Animation */}
          <BackgroundAI />
        </div>
        
        {/* Animated Light Rays */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-full h-96 bg-gradient-to-l from-transparent via-secondary/20 to-transparent blur-3xl"
          animate={{
            x: ["100%", "-100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-8 leading-tight"
          >
            <span className="neon-text animate-pulse-glow">
              Lopes Automações
            </span>
            <br />
            <span className="text-gradient animate-shimmer bg-[length:200%_auto]">
              Transforme
            </span>{" "}
            o atendimento da sua empresa com{" "}
            <span className="text-gradient animate-shimmer bg-[length:200%_auto]">
              Inteligência Artificial
            </span>{" "}
            24h por dia
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/90 mb-10 min-h-[80px] font-poppins"
          >
            <TypeAnimation
              sequence={[
                "Automatize agendamentos com IA",
                2000,
                "Responda clientes em segundos",
                2000,
                "Aumente seus lucros automaticamente",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-foreground/80 mb-4 max-w-3xl mx-auto font-poppins"
          >
            Na Lopes Automações, criamos soluções inteligentes com IA que atendem seus clientes 24h
            por dia, respondem em tempo real, marcam agendamentos conforme o horário da sua empresa e
            entregam leads qualificados prontos para conversão.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm md:text-base text-primary/90 mb-12 max-w-2xl mx-auto font-poppins italic"
          >
            "Enquanto seus concorrentes dormem, sua IA continua trabalhando."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-6 justify-center items-center"
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="premium-cta text-lg px-10 py-7 bg-gradient-to-r from-cyan-400 via-accent to-violet-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-105 group relative overflow-hidden shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center font-semibold group-hover:translate-x-1 transition-transform">
                  Chame agora e peça seu orçamento →
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 via-accent/50 to-violet-500/50 blur-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Button>
            </Tilt>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs md:text-sm text-foreground/60 max-w-md text-center"
            >
              Respostas instantâneas. Leads qualificados. Lucro constante.
            </motion.p>
          </motion.div>

          {/* WhatsApp Floating Button - Mobile Only */}
          <motion.a
            href="https://wa.me/5517992647180"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-2xl z-50 md:hidden flex items-center justify-center animate-pulse"
            style={{ width: "60px", height: "60px" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
