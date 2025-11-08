import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import heroPoster from "@/assets/hero-video-poster.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url(${heroPoster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
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
            className="text-base md:text-lg text-foreground/70 mb-12 max-w-3xl mx-auto font-poppins"
          >
            Na Lopes Automações, criamos soluções inteligentes com IA que atendem seus clientes 24h
            por dia, respondem em tempo real, marcam agendamentos conforme o horário da sua empresa e
            entregam leads qualificados prontos para conversão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-10 py-7 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 group relative overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center font-semibold">
                  🚀 Chame agora e peça seu orçamento
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50 blur-xl"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
