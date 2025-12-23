import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const legalLinks = [
  { path: '/legal/privacy', label: 'Privacy Policy' },
  { path: '/legal/terms', label: 'Terms of Service' },
];

const LegalLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="container px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation tabs */}
          <nav className="flex gap-1 p-1 bg-muted/50 rounded-lg w-fit mb-12">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm transition-colors"
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="legal-tab"
                    className="absolute inset-0 bg-background rounded-md shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={cn(
                  "relative z-10",
                  location.pathname === link.path 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Content */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-auto">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Reach</p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
