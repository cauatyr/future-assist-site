import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Clock, BarChart3, Smile } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento de Produtividade",
    description: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.",
    stat: "+150%",
    color: "from-primary to-secondary",
  },
  {
    icon: DollarSign,
    title: "Redução de Custos",
    description: "Diminua custos operacionais com atendimento automatizado 24/7 sem aumentar equipe.",
    stat: "-60%",
    color: "from-secondary to-accent",
  },
  {
    icon: BarChart3,
    title: "Aumento de Lucro",
    description: "Converta mais leads em clientes com atendimento rápido e qualificação inteligente.",
    stat: "+200%",
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Mais Clientes Satisfeitos",
    description: "Resposta imediata em qualquer horário aumenta satisfação e fidelização.",
    stat: "98%",
    color: "from-primary to-accent",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Recupere horas preciosas por dia com automação inteligente de processos.",
    stat: "10h/dia",
    color: "from-secondary to-primary",
  },
  {
    icon: Smile,
    title: "Zero Perda de Leads",
    description: "Nunca mais perca um cliente potencial por falta de resposta rápida.",
    stat: "100%",
    color: "from-accent to-secondary",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Benefícios Reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados comprovados que transformam negócios e impulsionam o crescimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="text-3xl font-bold text-gradient mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
