import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Subtle gradient orb */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.03] blur-3xl"
        initial={{ background: "radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)" }}
      />

      <motion.div 
        style={{ opacity, scale }}
        className="container relative z-10 px-4 py-32"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Minimal badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
              Beta v0.9.2
            </span>
          </motion.div>

          {/* Headline with stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fast. Reliable.
            </motion.h1>
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-muted-foreground/60"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Secure.
            </motion.h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Infrastructure for Minecraft studios. 
            Build and distribute with enterprise-grade security.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="h-12 px-8 group">
              <Download className="w-4 h-4 mr-2" />
              Get Launcher
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="ghost" className="h-12 px-8 text-muted-foreground hover:text-foreground">
              View pricing
            </Button>
          </motion.div>
        </div>

        {/* Parallax floating elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Floating dashboard - right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute right-[5%] top-[20%] hidden lg:block"
          >
            <div className="w-72 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm font-medium">R</div>
                  <div>
                    <p className="text-sm font-medium">Dashboard</p>
                    <p className="text-[10px] text-muted-foreground">v0.9.2</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {["2.4K", "99.9%", "156"].map((val, i) => (
                  <div key={i} className="p-2 rounded-lg bg-secondary/50">
                    <p className="text-sm font-semibold">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating card - left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
            className="absolute left-[8%] bottom-[25%] hidden lg:block"
          >
            <div className="w-48 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-500">🦀</span>
                <p className="text-xs font-medium">Rust Engine</p>
              </div>
              <p className="text-[10px] text-muted-foreground">Native performance</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border/50 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
