import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Hobby",
    price: 5,
    description: "For enthusiasts",
    features: ["1 project", "5GB storage", "Basic encryption", "Community support"],
  },
  {
    name: "Standard",
    price: 25,
    description: "For teams",
    features: ["10 projects", "50GB storage", "ReachC encryption", "RPB protection", "Priority support"],
    popular: true,
  },
  {
    name: "Pro",
    price: 45,
    description: "For studios",
    features: ["Unlimited projects", "500GB storage", "Full security suite", "24/7 support", "Custom integrations"],
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="pricing" className="py-32 lg:py-48 relative">
      <motion.div style={{ opacity }} className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Simple, transparent
          </h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={() => setIsYearly(false)}
              className={`text-sm transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 rounded-full bg-secondary transition-colors"
            >
              <motion.div
                animate={{ x: isYearly ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-4 h-4 rounded-full bg-foreground"
              />
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`text-sm transition-colors flex items-center gap-2 ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Yearly
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-foreground/10">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-foreground/20 bg-secondary/30' 
                  : 'border-border/50 hover:border-border hover:bg-secondary/10'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 text-[10px] tracking-widest uppercase px-2 py-1 rounded bg-foreground text-background">
                  Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">
                    ${isYearly ? Math.round(plan.price * 0.8) : plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-foreground/60" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
