import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Clock, Lock, Layers, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type OsType = "windows" | "macos" | "linux" | "unknown";

const detectOS = (): OsType => {
  if (typeof window === "undefined") return "unknown";
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux")) return "linux";
  return "unknown";
};

const osConfig = {
  windows: { label: "Windows", arch: "x64" },
  macos: { label: "macOS", arch: "Universal" },
  linux: { label: "Linux", arch: "x64" },
  unknown: { label: "your system", arch: "" },
};

const Hero = () => {
  const [os, setOs] = useState<OsType>("unknown");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    setOs(detectOS());
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center">
      {/* Minimal glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-foreground/[0.02] to-transparent blur-3xl" />

      <motion.div style={{ opacity, y }} className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
              v0.5.0-beta
            </span>
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight"
            >
              Get Reach
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground/80 max-w-md mx-auto leading-relaxed"
            >
              The launcher that keeps your Minecraft experiences secure, encrypted, and always up to date.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <Button size="lg" className="h-14 px-10 text-base group">
              <Download className="w-4 h-4 mr-3 transition-transform group-hover:-translate-y-0.5" />
              Download for {osConfig[os].label}
              {osConfig[os].arch && (
                <span className="ml-2 text-primary-foreground/60 text-sm">
                  {osConfig[os].arch}
                </span>
              )}
            </Button>
            <button
              onClick={() => document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors flex items-center gap-1"
            >
              Other platforms
              <ChevronDown className="w-3 h-3" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"
        />
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: Clock,
    title: "Always current",
    description: "Automatic updates from official sources. Experience packs stay secure end-to-end.",
  },
  {
    icon: Lock,
    title: "Encrypted",
    description: "Your data is protected with unique encryption designed by the Reach team.",
  },
  {
    icon: Layers,
    title: "Game overlay",
    description: "View achievements, organization info, and more while you play.",
  },
];

const platforms = [
  { name: "Windows", versions: "10, 11", arch: "x64 / x86" },
  { name: "macOS", versions: "12+", arch: "Apple Silicon / Intel" },
  { name: "Linux", versions: "Ubuntu 20.04+", arch: "x64 / ARM" },
];

const resources = [
  { title: "Instance Template", description: "Start your own Minecraft instance", github: false },
  { title: "ReachY Checker", description: "Verify your instances", github: true },
  { title: "ReachY CLI", description: "Manage instances from terminal", github: true },
];

const Downloads = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <feature.icon className="w-5 h-5 text-muted-foreground/60" strokeWidth={1.5} />
                <h3 className="text-sm font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="container mx-auto px-4 py-32 border-t border-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-medium tracking-tight">All platforms</h2>
            <p className="text-muted-foreground/70">
              Available for major operating systems
            </p>
          </motion.div>

          <div className="space-y-1">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center justify-between py-6 border-b border-border/30 hover:border-border transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-lg font-medium w-24">{platform.name}</span>
                  <span className="text-sm text-muted-foreground/50">{platform.versions}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-muted-foreground/40 tracking-wide">
                    {platform.arch}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto px-4 py-32 border-t border-border/50">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-medium tracking-tight">Resources</h2>
            <p className="text-muted-foreground/70">
              Tools and templates for developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-border/30 hover:border-border/60 hover:bg-card/30 transition-all cursor-pointer"
              >
                <div className="space-y-3">
                  <h3 className="text-sm font-medium group-hover:text-foreground transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-xs text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Download
                    </span>
                    {resource.github && (
                      <span className="text-xs text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors flex items-center gap-1">
                        <Github className="w-3 h-3" />
                        Source
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Downloads;
