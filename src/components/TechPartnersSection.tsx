import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const partners = ["Cloudflare", "Vercel", "Oracle", "Azure", "Rust", "Polar"];

const TechPartnersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <motion.div style={{ opacity }} className="container px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest uppercase text-muted-foreground text-center mb-12"
        >
          Powered by
        </motion.p>

        <motion.div style={{ x }} className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
          {partners.map((partner, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-lg md:text-xl font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechPartnersSection;
