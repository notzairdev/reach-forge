import { motion } from "framer-motion";
import { Shield, Lock, Key } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Data Encryption",
    description: "Our proprietary ReachC algorithm combines military-grade encryption with unique, unrepeatable keys. Your data remains impenetrable.",
  },
  {
    icon: Lock,
    title: "No leaks. Everything secure.",
    description: "RPB protection system blocks unauthorized screenshots and recordings. Your creations stay yours, protected at the system level.",
  },
  {
    icon: Key,
    title: "You create it. You control it.",
    description: "Complete ownership over your data and projects. Granular permissions, audit logs, and instant access revocation.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SecuritySection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Security First
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for paranoid creators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We take security seriously. Every layer of Reach is designed with protection in mind.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group glow-card rounded-2xl p-8 transition-all duration-300 hover:bg-reach-surface-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
