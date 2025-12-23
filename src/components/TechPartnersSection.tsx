import { motion } from "framer-motion";

const partners = [
  { name: "Cloudflare", logo: "☁️" },
  { name: "Vercel", logo: "▲" },
  { name: "Oracle", logo: "◈" },
  { name: "Microsoft Azure", logo: "⬡" },
  { name: "Rust", logo: "🦀" },
  { name: "Polar", logo: "❄️" },
];

const TechPartnersSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Powered By
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Enterprise-grade stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on the same technologies trusted by the world's largest companies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glow-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-reach-surface-hover"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {partner.logo}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
