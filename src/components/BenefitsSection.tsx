import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Database, MessageSquare, Settings2 } from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "Automated Backups",
    description: "Point-in-time restoration. Roll back to any moment.",
  },
  {
    icon: MessageSquare,
    title: "Discord Integration",
    description: "Manage everything from your favorite app.",
  },
  {
    icon: Settings2,
    title: "Client Management",
    description: "Analytics, users, and deployments unified.",
  },
];

const BenefitsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 relative">
      <motion.div style={{ opacity }} className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Platform</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-xl">
            Everything to ship
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
