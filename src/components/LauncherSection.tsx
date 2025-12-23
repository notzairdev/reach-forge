import { motion } from "framer-motion";
import { ArrowRight, Zap, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const LauncherSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-reach-surface/50 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Code preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="glow-card rounded-2xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">reach-launcher/src/main.rs</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-muted-foreground">
                  <code>
{`// Reach Launcher - Native Performance
use reach_core::{Launcher, Config};
use tokio::runtime::Runtime;

fn main() -> Result<(), Box<dyn Error>> {
    let config = Config::load()?;
    
    // Initialize with zero-copy memory
    let launcher = Launcher::new(config)
        .with_encryption(ReachC::new())
        .with_protection(RPB::enabled())
        .build()?;
    
    // Start with blazing fast cold boot
    Runtime::new()?.block_on(launcher.run())
}`}
                  </code>
                </pre>
              </div>
              
              {/* Disclaimer */}
              <div className="px-6 py-3 bg-secondary/30 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  * Simplified code preview. Actual implementation is proprietary.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Reach Launcher
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Native desktop power
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Built from the ground up in Rust for maximum performance. No Electron bloat, 
                no memory leaks—just pure, blazing-fast native code that respects your system.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                { icon: Zap, text: "Sub-50ms cold boot time" },
                { icon: Cpu, text: "Zero-copy memory architecture" },
                { icon: Shield, text: "Sandboxed execution environment" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="group">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LauncherSection;
