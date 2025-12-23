import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled ? "hsl(var(--background) / 0.8)" : "hsl(var(--background) / 0.4)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(12px)",
          }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1 px-2 py-2 rounded-full border border-border/50 shadow-lg shadow-black/5"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 px-3">
            <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-semibold">R</span>
            </div>
            <span className="font-medium text-sm hidden sm:block">Reach</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-border/50 mx-1" />

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-xs h-8 rounded-full px-4">
              Sign in
            </Button>
            <Button size="sm" className="text-xs h-8 rounded-full px-4">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-xl">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                <Button variant="ghost" className="w-full justify-center rounded-xl">
                  Sign in
                </Button>
                <Button className="w-full justify-center rounded-xl">
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
