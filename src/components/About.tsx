import { motion } from "framer-motion";
import { Target, Eye, Zap } from "lucide-react";

const About = () => {
  const values = [
    { icon: Zap, title: "Inovação", color: "from-primary to-accent" },
    { icon: Eye, title: "Transparência", color: "from-accent to-secondary" },
    { icon: Zap, title: "Eficiência", color: "from-secondary to-primary" },
    { icon: Target, title: "Personalização", color: "from-primary to-secondary" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Sobre a <span className="text-gradient">Lopes Automações</span>
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-poppins">
            Na Lopes Automações, acreditamos que o futuro das empresas está na integração entre 
            inteligência artificial e atendimento humano de qualidade. Fundada por Caua Lopes, 
            a empresa nasceu com o propósito de levar automação inteligente para qualquer negócio, 
            aumentando produtividade e reduzindo custos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-3">Missão</h3>
            <p className="text-foreground/70 font-poppins">
              Tornar a automação acessível e eficiente para empresas de todos os tamanhos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-3">Visão</h3>
            <p className="text-foreground/70 font-poppins">
              Ser referência nacional em automações inteligentes com IA.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold font-orbitron mb-8">Nossos Valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl group cursor-default"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-semibold font-poppins">{value.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
