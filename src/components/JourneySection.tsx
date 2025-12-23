import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Shield, Rocket, Users } from "lucide-react";

const journeySteps = [
  {
    step: "01",
    title: "Create",
    description: "Build your Minecraft experience with our powerful SDK and intuitive tools.",
    icon: Code2,
  },
  {
    step: "02",
    title: "Protect",
    description: "Your creation is encrypted with ReachC algorithm. No leaks, no worries.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Deploy",
    description: "One click deployment to our global infrastructure. Instant scaling.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Grow",
    description: "Reach millions of players. Monetize through our marketplace.",
    icon: Users,
  },
];

const JourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section Header */}
        <motion.div 
          style={{ opacity }}
          className="container px-6 mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Your journey with Reach
          </h2>
        </motion.div>

        {/* Horizontal Scroll Content */}
        <motion.div 
          style={{ x }}
          className="flex gap-8 pl-6 md:pl-[calc(50vw-600px)]"
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="flex-shrink-0 w-[85vw] md:w-[500px] group"
            >
              <div className="relative h-full p-8 md:p-12 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card/50">
                {/* Step Number */}
                <span className="text-[120px] md:text-[180px] font-bold text-muted/10 absolute -top-4 -left-2 select-none">
                  {step.step}
                </span>
                
                {/* Content */}
                <div className="relative z-10 mt-20 md:mt-28">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:bg-muted transition-colors">
                    <step.icon className="w-5 h-5 text-foreground" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border/50" />
                )}
              </div>
            </motion.div>
          ))}

          {/* Final CTA Card */}
          <motion.div className="flex-shrink-0 w-[85vw] md:w-[400px] flex items-center justify-center">
            <div className="text-center p-12">
              <p className="text-muted-foreground mb-4">Ready to start?</p>
              <a 
                href="#pricing" 
                className="inline-flex items-center gap-2 text-lg font-medium hover:text-muted-foreground transition-colors"
              >
                View pricing
                <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="container px-6 mt-12">
          <div className="h-px bg-border/30 max-w-xl">
            <motion.div 
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-foreground/50 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
