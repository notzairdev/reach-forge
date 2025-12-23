import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "Encryption",
    description: "Military-grade ReachC algorithm with unique, unrepeatable keys.",
  },
  {
    title: "Protection",
    description: "RPB system blocks unauthorized screenshots and recordings.",
  },
  {
    title: "Control",
    description: "Complete ownership. Granular permissions. Instant revocation.",
  },
];

const SecuritySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 relative">
      <motion.div style={{ opacity }} className="container px-4">
        {/* Section label - sticky effect */}
        <motion.div 
          style={{ y }}
          className="mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Security</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-2xl">
            Built for creators who value their work
          </h2>
        </motion.div>

        {/* Features - horizontal on desktop */}
        <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/30 transition-colors duration-500"
            >
              <span className="text-xs text-muted-foreground tracking-widest uppercase mb-6 block">
                0{index + 1}
              </span>
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SecuritySection;
