import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px hsl(var(--primary) / 0.3)",
              "0 0 40px hsl(var(--primary) / 0.6)",
              "0 0 20px hsl(var(--primary) / 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>

        <h2 className="text-2xl font-orbitron font-bold text-gradient mb-4">
          Iniciando sistema de IA...
        </h2>

        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <p className="text-muted-foreground mt-4 font-poppins">{progress}%</p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
