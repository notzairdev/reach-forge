import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  onAnimationComplete?: () => void;
}

const BlurText = ({ text, delay = 0, className = "", onAnimationComplete }: BlurTextProps) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={`font-semibold tracking-tight text-center ${className}`}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.5,
            delay: delay / 1000 + i * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BlurText;
