import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Activity, ShieldCheck, Microscope, BookOpen, Info, Home, Users } from "lucide-react";
import { useState, useEffect } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Science", href: "/science", icon: Microscope },
    { name: "Education", href: "/education", icon: BookOpen },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/logo.png" 
              alt="FunctionalHealth Logo" 
              className="h-12 md:h-16 w-auto transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              <span className="text-functional-green">Functional</span>
              <span className="text-clinical-blue">Health</span>
            </span>
          </Link>

          {/* Desktop Nav & Actions */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild variant="outline" className="rounded-full h-12 px-8 border-clinical-blue text-clinical-blue hover:bg-clinical-blue hover:text-white font-bold text-base transition-all whitespace-nowrap">
                <Link to="/community">Join Community</Link>
              </Button>
              <Button asChild className="rounded-full h-12 px-8 bg-functional-green hover:bg-functional-green/90 shadow-lg shadow-functional-green/20 font-bold text-base whitespace-nowrap">
                <Link to="/product">Begin Your Recovery</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[-1] md:hidden"
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden border-b bg-background absolute top-24 left-0 w-full p-4 space-y-4 shadow-xl z-50"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center gap-3 text-lg font-medium p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <link.icon size={20} className="text-muted-foreground" />
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="w-full rounded-full">
                  <Link to="/product">Begin Your Recovery</Link>
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-functional-green text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="FunctionalHealth Logo" 
                  className="h-12 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xl font-serif font-bold">
                  <span className="text-white">Functional</span>
                  <span className="text-white/80">Health</span>
                </span>
              </Link>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                Translating clinical research into real-world health. Physician-led and evidence-based nutrition for recovery.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-sunrise-yellow">
                Built for Independence.
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-white/60 hover:text-sunrise-yellow transition-colors"><Activity size={20} /></a>
                <a href="#" className="text-white/60 hover:text-sunrise-yellow transition-colors"><Users size={20} /></a>
                <a href="#" className="text-white/60 hover:text-sunrise-yellow transition-colors"><ShieldCheck size={20} /></a>
                <a href="#" className="text-white/60 hover:text-sunrise-yellow transition-colors"><Microscope size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/science" className="hover:text-white transition-colors">The Science</Link></li>
                <li><Link to="/education" className="hover:text-white transition-colors">Education</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Recovery Community</Link></li>
                <li><Link to="/media-lab" className="hover:text-white transition-colors">Media Lab</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-6 text-lg">Products</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/product" className="hover:text-white transition-colors">Micronized Creatine Monohydrate</Link></li>
                <li><Link to="/product" className="hover:text-white transition-colors">Recovery Protocol</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li className="text-[10px] pt-6 leading-tight opacity-40">
                  *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
            © {new Date().getFullYear()} FunctionalHealth. All rights reserved. Designed for functional independence.
          </div>
        </div>
      </footer>
    </div>
  );
}
