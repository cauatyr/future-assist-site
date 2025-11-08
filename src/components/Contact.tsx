import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle, Rocket, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/5517992647180";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect p-8 md:p-12 rounded-3xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-effect"
            >
              <Rocket className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              🚀 Não perca esta <span className="text-gradient">oportunidade</span>
            </h2>

            <p className="text-xl md:text-2xl text-foreground mb-6">
              de alavancar a sua empresa, diminuindo custos e aumentando o lucro!
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Chame agora e peça seu orçamento personalizado
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button
                size="lg"
                onClick={() => window.open(whatsappLink, "_blank")}
                className="text-lg px-10 py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 group mb-8 animate-glow-pulse relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 blur-xl animate-pulse-slow" />
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Telefone</p>
                  <p className="text-sm text-muted-foreground">+55 17 99264-7180</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">E-mail</p>
                  <p className="text-sm text-muted-foreground">contato@lopesautomacoes.com.br</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Localização</p>
                  <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
