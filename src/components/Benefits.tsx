import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Clock, Calendar, ImageIcon, Target, TrendingDown, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24h por dia",
      description: "Sua IA nunca dorme. Responda clientes a qualquer hora, todos os dias.",
      color: "from-primary to-accent",
    },
    {
      icon: Calendar,
      title: "Agendamentos automáticos e precisos",
      description: "Marque horários conforme disponibilidade da empresa, sem erros.",
      color: "from-accent to-secondary",
    },
    {
      icon: ImageIcon,
      title: "Envio de imagens, áudios e mensagens",
      description: "Personalize o atendimento com conteúdo multimídia automático.",
      color: "from-secondary to-primary",
    },
    {
      icon: Target,
      title: "Leads qualificados direto na agenda",
      description: "Receba apenas clientes prontos para conversão.",
      color: "from-primary to-secondary",
    },
    {
      icon: TrendingDown,
      title: "Redução de custos operacionais",
      description: "Elimine gastos com atendimento manual e aumente a margem.",
      color: "from-accent to-primary",
    },
    {
      icon: TrendingUp,
      title: "Aumento de produtividade e lucro",
      description: "Atenda mais clientes sem aumentar a equipe.",
      color: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            O que a IA da <span className="text-gradient">Lopes</span> pode fazer pela sua empresa
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-poppins">
            Soluções completas de automação que transformam seu atendimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
                <div className="glass-card p-8 rounded-2xl h-full group cursor-default">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 glow-effect`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold font-orbitron mb-3 group-hover:text-gradient transition-all">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed font-poppins">
                    {benefit.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
