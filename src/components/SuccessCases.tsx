import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "./ui/card";

const cases = [
  {
    company: "Clínica Dr. Silva",
    segment: "Saúde",
    result: "300% de aumento em agendamentos",
    testimonial:
      "A IA da Lopes Automações transformou completamente nosso atendimento. Agora conseguimos atender pacientes 24h e nunca mais perdemos um agendamento.",
    author: "Dr. João Silva",
    rating: 5,
  },
  {
    company: "Escritório Advocacia Lima",
    segment: "Jurídico",
    result: "80% de redução no tempo de resposta",
    testimonial:
      "Impressionante como a IA consegue qualificar os clientes antes mesmo da primeira consulta. Nossa equipe agora foca apenas em casos de alto valor.",
    author: "Dra. Maria Lima",
    rating: 5,
  },
  {
    company: "Academia FitPro",
    segment: "Fitness",
    result: "200% de crescimento em matrículas",
    testimonial:
      "O atendimento 24h fez toda diferença. As pessoas pesquisam academia à noite e fins de semana, e nossa IA está lá para converter essas visitas em matrículas.",
    author: "Carlos Mendes",
    rating: 5,
  },
];

const SuccessCases = () => {
  return (
    <section id="success-cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Casos de Sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que transformaram seus resultados com nossa tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="glass-effect p-6 h-full hover:glow-effect transition-all duration-300">
                <Quote className="w-8 h-8 text-accent mb-4" />
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{case_.company}</h3>
                  <p className="text-sm text-secondary">{case_.segment}</p>
                </div>

                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg mb-4">
                  <p className="text-sm font-bold text-primary-foreground">{case_.result}</p>
                </div>

                <p className="text-muted-foreground mb-4 italic">"{case_.testimonial}"</p>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <p className="font-semibold">— {case_.author}</p>
                  <div className="flex gap-1">
                    {[...Array(case_.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
