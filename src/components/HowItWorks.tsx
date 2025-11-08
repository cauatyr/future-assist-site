import { motion } from "framer-motion";
import { MessageSquare, Calendar, Zap, Image, Clock, Target } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Atendimento Inteligente 24h",
    description:
      "Nossa IA responde seus clientes instantaneamente, a qualquer hora do dia ou da noite, mantendo o tom e personalidade da sua marca.",
  },
  {
    icon: Calendar,
    title: "Agendamento Automatizado",
    description:
      "Agenda consultas e reuniões automaticamente conforme a disponibilidade da sua empresa, sem intervenção manual.",
  },
  {
    icon: Zap,
    title: "Respostas em Tempo Real",
    description:
      "Responde perguntas frequentes instantaneamente, direcionando casos complexos para sua equipe quando necessário.",
  },
  {
    icon: Image,
    title: "Mídia e Documentos",
    description:
      "Envia imagens, áudios e documentos personalizados conforme o contexto da conversa com cada cliente.",
  },
  {
    icon: Clock,
    title: "Integração Completa",
    description:
      "Conecta-se perfeitamente com sua agenda, CRM e ferramentas existentes para um fluxo de trabalho unificado.",
  },
  {
    icon: Target,
    title: "Leads Qualificados",
    description:
      "Qualifica automaticamente os leads, priorizando os mais promissores e entregando informações valiosas para sua equipe.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Como Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa solução de IA é projetada para automatizar completamente seu atendimento e processo
            de agendamento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl hover:glow-effect transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
