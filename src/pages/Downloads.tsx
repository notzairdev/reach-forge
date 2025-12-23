import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Download, Lock, ScreenShare, Github, ArrowLeft, Monitor, Apple } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
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

const Hero = () => {
  const [isEnded, setIsEnded] = useState(false);
  const [os, setOs] = useState<OsType>("unknown");

  useEffect(() => {
    setOs(detectOS());
  }, []);

  const getOSTitle = () => {
    switch (os) {
      case "windows": return "Download Reach Client for Windows";
      case "macos": return "Download Reach Client for MacOS";
      case "linux": return "Download Reach Client for Linux";
      default: return "Download Reach Client now";
    }
  };

  const getOSButton = () => {
    switch (os) {
      case "windows": return "Download for Windows";
      case "macos": return "Download for MacOS";
      case "linux": return "Download for Linux";
      default: return "Download now";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.03] blur-3xl bg-gradient-radial from-foreground to-transparent" />
      
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Version badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isEnded ? 1 : 0, y: isEnded ? 0 : 10 }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="outline" className="border-border text-sm py-1.5 px-5">
              The current version is 0.5.0-beta.canary
            </Badge>
          </motion.div>

          {/* Animated title */}
          <BlurText
            text={getOSTitle()}
            delay={200}
            onAnimationComplete={() => setIsEnded(true)}
            className="text-5xl md:text-6xl lg:text-7xl"
          />

          {/* Description and buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isEnded ? 1 : 0, y: isEnded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reach Client is a Minecraft launcher that allows you to join
              public or private events and servers hosted by our clients,
              keeping your data secure, encrypted, and up to date at all times.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 group">
                <Download className="w-4 h-4 mr-2" />
                {getOSButton()}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8"
                onClick={() => {
                  document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                More options
              </Button>
            </div>
          </motion.div>

          {/* App preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: isEnded ? 1 : 0, y: isEnded ? 0 : 40, scale: isEnded ? 1 : 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-12 hidden md:block"
          >
            <div className="relative mx-auto max-w-2xl">
              <div className="w-full rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">Reach Client</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Active Users", value: "2.4K+" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Experiences", value: "156" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isEnded ? 1 : 0 }}
        transition={{ delay: 0.5 }}
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

const features = [
  {
    icon: Clock,
    title: "Files always up to date",
    description: "Reach Launcher is always up to date with the latest version of Minecraft clients from official sources. It also keeps experience packs secure from end to end.",
  },
  {
    icon: Lock,
    title: "Encrypted data",
    description: "Reach Client encrypts your data to keep it safe from prying eyes. It uses unique encryption methods designed by the Reach Team to keep everything in order for both users and developers.",
  },
  {
    icon: ScreenShare,
    title: "Game Overlay",
    description: "Reach Client builds a game overlay that allows you to see relevant information about the organizations behind the experience you are playing, global and unique achievements per experience, and other important information while you play.",
  },
];

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    badge: "x86 - x64",
    description: "The Reach Client is available for Windows 10 and Windows 11.",
  },
  {
    name: "Linux",
    icon: Monitor,
    badge: "x86 - x64 - ARM",
    description: "The Reach Client is available for Linux or another Unix-like operating system.",
  },
  {
    name: "MacOS",
    icon: Apple,
    badge: "Apple Silicon or Intel",
    description: "The Reach Client is available for MacOS with Intel or Apple Silicon.",
  },
];

const resources = [
  {
    title: "Minecraft Instance Template",
    description: "Download a Minecraft instance template to start your own instance.",
    hasGithub: false,
  },
  {
    title: "ReachY Checker",
    description: "Verify your Minecraft instances with the ReachY Checker.",
    hasGithub: true,
  },
  {
    title: "ReachY",
    description: "The ReachY is a tool to manage your Minecraft instances.",
    hasGithub: true,
  },
];

const Downloads = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 lg:py-32 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Features</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Reach Client has defining features, and the Reach team develops new
            skills for the Minecraft launcher every day. Learn about some of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-card/50 p-8 rounded-2xl space-y-4 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <feature.icon className="w-5 h-5 text-foreground" />
                <h3 className="text-xl font-medium">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Download Platforms Section */}
      <section id="downloads" className="container mx-auto px-4 py-24 lg:py-32 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Download the Reach Client for your operating system.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            The Reach Client is available for the following operating systems:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <platform.icon className="w-6 h-6" />
                <h3 className="text-2xl font-medium">{platform.name}</h3>
                <Badge variant="outline" className="ml-auto border-border text-xs py-1 px-3">
                  {platform.badge}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {platform.description}
              </p>
              <Button className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download for {platform.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border" />
      </div>

      {/* More Resources Section */}
      <section className="container mx-auto px-4 py-24 lg:py-32 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">More resources</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Here you can find more resources about the Reach Infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium">{resource.title}</h3>
              <p className="text-muted-foreground">
                {resource.description}
              </p>
              {resource.hasGithub ? (
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              ) : (
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Downloads;
