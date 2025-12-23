import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-reach-surface via-transparent to-transparent" />
      <div className="absolute inset-0 hero-glow opacity-50" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to launch?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Start building with Reach today
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join thousands of Minecraft creators who trust Reach for their infrastructure. 
            Get started in minutes with our free tier.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No credit card required • Free tier included • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
