import { motion } from "framer-motion";
import { Database, MessageSquare, Settings2 } from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "Automated Backups",
    description: "Never lose your work. Automatic backups with point-in-time restoration. Roll back to any moment with a single click.",
    highlight: "99.99% durability",
  },
  {
    icon: MessageSquare,
    title: "Discord Integration",
    description: "Manage everything from Discord. Real-time notifications, server commands, and team collaboration—all in your favorite app.",
    highlight: "Full bot integration",
  },
  {
    icon: Settings2,
    title: "Client Management",
    description: "Advanced control panel for your experiences. Analytics, user management, and deployment automation in one unified dashboard.",
    highlight: "Complete control",
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

const BenefitsSection = () => {
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
            All-in-One Platform
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to ship
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Focus on creating. We handle the infrastructure, backups, and tooling.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative glow-card rounded-2xl p-8 transition-all duration-300 hover:bg-reach-surface-hover"
            >
              {/* Highlight badge */}
              <span className="absolute top-6 right-6 px-2 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
                {benefit.highlight}
              </span>
              
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
