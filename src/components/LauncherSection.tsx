import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LauncherSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 relative overflow-hidden">
      <motion.div style={{ opacity }} className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Code preview with parallax */}
          <motion.div style={{ y: imageY }} className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="ml-4 text-[10px] text-muted-foreground font-mono">main.rs</span>
              </div>
              
              {/* Code */}
              <div className="p-6 font-mono text-xs leading-relaxed text-muted-foreground/80">
                <pre>
{`use reach_core::{Launcher, Config};

fn main() -> Result<()> {
    let launcher = Launcher::new()
        .with_encryption(ReachC::new())
        .with_protection(RPB::enabled())
        .build()?;
    
    launcher.run()
}`}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Content with parallax */}
          <motion.div style={{ y: textY }} className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Launcher</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Native performance
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Built in Rust for maximum speed. No Electron bloat, no memory leaks—pure native code.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Sub-50ms cold boot",
                "Zero-copy memory",
                "Sandboxed execution",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LauncherSection;
