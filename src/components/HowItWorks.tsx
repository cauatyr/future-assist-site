import { motion } from "framer-motion";
import { MessageSquare, Zap, Calendar, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Cliente envia mensagem",
      description: "Seu cliente entra em contato a qualquer hora do dia ou da noite",
      color: "from-primary to-accent",
    },
    {
      icon: Zap,
      title: "IA responde instantaneamente",
      description: "Nossa inteligência artificial responde em segundos com informações precisas",
      color: "from-accent to-secondary",
    },
    {
      icon: Calendar,
      title: "Agendamento automático",
      description: "A IA marca o horário ideal conforme disponibilidade da sua empresa",
      color: "from-secondary to-primary",
    },
    {
      icon: CheckCircle,
      title: "Lead qualificado entregue",
      description: "Você recebe apenas clientes prontos para fechar negócio",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-poppins">
            Um processo simples e automatizado que transforma visitantes em clientes
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 glass-card p-8 rounded-2xl ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} items-center justify-center mb-4 glow-effect`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold font-orbitron mb-3">{step.title}</h3>
                <p className="text-foreground/70 font-poppins">{step.description}</p>
              </motion.div>

              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center glow-effect shrink-0"
              >
                <div className="w-4 h-4 rounded-full bg-background" />
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
