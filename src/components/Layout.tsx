import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Activity, ShieldCheck, Microscope, BookOpen, Info } from "lucide-react";
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
    { name: "Science", href: "/science", icon: Microscope },
    { name: "Education", href: "/education", icon: BookOpen },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-functional-green flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">
              <span className="text-functional-green">Functional</span>
              <span className="text-clinical-blue">Health</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="rounded-full px-6">
              <Link to="/product">Shop Now</Link>
            </Button>
          </nav>

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
                className="md:hidden border-b bg-background absolute top-16 left-0 w-full p-4 space-y-4 shadow-xl z-50"
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
                  <Link to="/product">Shop Now</Link>
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
      <footer className="bg-background border-t py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <ShieldCheck className="text-functional-green" />
                <span className="text-xl font-serif font-bold">
                  <span className="text-functional-green">Functional</span>
                  <span className="text-clinical-blue">Health</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Translating clinical research into real-world health. Physician-led and evidence-based nutrition for recovery.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/science" className="hover:text-primary transition-colors">The Science</Link></li>
                <li><Link to="/education" className="hover:text-primary transition-colors">Education</Link></li>
                <li><Link to="/media-lab" className="hover:text-primary transition-colors">Media Lab</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/product" className="hover:text-primary transition-colors">Clinical Creatine</Link></li>
                <li><Link to="/product" className="hover:text-primary transition-colors">Recovery Protocol</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li className="text-[10px] pt-4 leading-tight opacity-60">
                  *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} FunctionalHealth. All rights reserved. Built for recovery.
          </div>
        </div>
      </footer>
    </div>
  );
}
