import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-gradient mb-2">Lopes Automações</p>
          <p className="text-muted-foreground mb-4">
            Transformando negócios com Inteligência Artificial
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Lopes Automações. Feito com</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>por Caua Lopes</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
