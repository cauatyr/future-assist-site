import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Animated Gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm">Inteligência Artificial de Ponta</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Transforme</span> o atendimento da sua empresa com{" "}
            <span className="text-gradient">Inteligência Artificial</span> 24h por dia
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Automatize agendamentos, responda clientes em segundos e aumente seus lucros com a IA
            personalizada da Lopes Automações.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-foreground/80 mb-10 max-w-3xl mx-auto"
          >
            Na Lopes Automações, criamos soluções inteligentes com IA que atendem seus clientes 24h
            por dia, respondem em tempo real, marcam agendamentos conforme o horário da sua empresa e
            entregam leads qualificados prontos para conversão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 group animate-glow-pulse relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                🚀 Solicitar Orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 blur-xl animate-pulse-slow" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg px-8 py-6 glass-effect hover:bg-card"
            >
              Como Funciona
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
