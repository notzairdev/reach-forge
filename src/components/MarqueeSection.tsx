import { motion } from "framer-motion";

const words = ["Fast", "Reliable", "Secure", "Scalable", "Professional", "Protected"];

const MarqueeSection = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border/30">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="text-6xl md:text-8xl font-semibold text-muted-foreground/10 mx-8"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
