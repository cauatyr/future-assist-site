import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, rotateX: -15, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
