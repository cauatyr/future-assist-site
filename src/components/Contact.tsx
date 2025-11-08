import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Tilt from "react-parallax-tilt";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/5517992647180";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/10" />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--secondary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-orbitron mb-6"
          >
            Sua empresa pode atender{" "}
            <span className="text-gradient">24h por dia</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 mb-4 font-poppins"
          >
            Gerar mais resultados e ainda reduzir custos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/70 mb-12 font-poppins"
          >
            A inteligência artificial da Lopes Automações faz isso por você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mb-16"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <Button
                size="lg"
                onClick={() => window.open(whatsappLink, "_blank")}
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 group relative overflow-hidden shadow-2xl font-semibold"
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  💬 Fale com a gente agora
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/60 via-accent/60 to-secondary/60 blur-2xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1],
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: "Telefone", value: "+55 17 99264-7180", color: "primary" },
              { icon: Mail, label: "E-mail", value: "contato@lopesautomacoes.com.br", color: "accent" },
              { icon: MapPin, label: "Localização", value: "São Paulo, Brasil", color: "secondary" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-${contact.color}/20 flex items-center justify-center`}>
                  <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                </div>
                <p className="font-semibold mb-2 font-orbitron">{contact.label}</p>
                <p className="text-sm text-foreground/70 font-poppins">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
