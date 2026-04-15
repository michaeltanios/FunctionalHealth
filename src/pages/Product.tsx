import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Users, 
  Zap, 
  HeartPulse, 
  UserCheck, 
  FlaskConical, 
  Atom, 
  Award, 
  Microscope, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  Quote,
  ArrowRight,
  Info,
  Stethoscope,
  PackageCheck,
  GlassWater,
  CalendarCheck
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function Product() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSticky, setShowSticky] = useState(false);

  const productImages = [
    {
      id: 1,
      type: 'lifestyle',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200',
      alt: 'Recovery patient feeling energized and active'
    },
    {
      id: 2,
      type: 'render',
      title: 'Clinical Design',
      alt: 'Product Design Concept'
    },
    {
      id: 3,
      type: 'lifestyle',
      url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=1200',
      alt: 'Mixing creatine in a clean clinical environment'
    },
    {
      id: 4,
      type: 'purity',
      url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200',
      alt: 'Laboratory testing for pharmaceutical purity'
    }
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col text-base md:text-lg">
      {/* Sticky CTA Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm py-3 px-4 hidden md:block"
          >
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                <span className="font-serif font-bold text-functional-green">Micronized Creatine</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-bold text-lg">$48.00</span>
                <Button className="bg-functional-green hover:bg-functional-green/90 font-bold px-8 rounded-full">
                  Get Notified at Launch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image Gallery */}
            <div className="relative group">
              <div className="aspect-square bg-functional-green/5 rounded-[40px] flex items-center justify-center overflow-hidden border border-border relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {productImages[currentImage].type === 'render' ? (
                      <div className="relative flex items-end gap-4 p-8">
                        {/* Pouch */}
                        <div className="relative w-48 h-64 bg-white rounded-xl shadow-2xl border border-border flex flex-col items-center p-6 text-center transform -rotate-3 translate-y-4">
                          <div className="w-10 h-10 rounded-full bg-functional-green flex items-center justify-center text-white mb-3">
                            <ShieldCheck size={20} />
                          </div>
                          <h3 className="font-serif font-bold text-lg mb-1">
                            <span className="text-functional-green text-sm">Functional</span>
                            <span className="text-clinical-blue text-sm">Health</span>
                          </h3>
                          <div className="w-full h-px bg-border mb-4" />
                          <h4 className="text-xl font-serif font-bold text-functional-green">CREATINE</h4>
                          <p className="text-[8px] text-muted-foreground mt-1 uppercase tracking-widest">Clinical Recovery Series</p>
                          <div className="mt-auto text-[6px] text-muted-foreground/30 uppercase tracking-widest">
                            30 Stick Packs • Pharmaceutical Grade
                          </div>
                        </div>
                        {/* Stick Pack */}
                        <div className="relative w-12 h-56 bg-white rounded-md shadow-xl border border-border flex flex-col items-center p-2 text-center transform rotate-6">
                          <div className="w-4 h-4 rounded-full bg-functional-green flex items-center justify-center text-white mb-2">
                            <ShieldCheck size={8} />
                          </div>
                          <div className="text-[4px] font-bold text-functional-green uppercase vertical-text">Creatine</div>
                          <div className="mt-auto text-[4px] text-muted-foreground font-bold">5g</div>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={productImages[currentImage].url} 
                        alt={productImages[currentImage].alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {productImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`h-2.5 rounded-full transition-all border border-white/50 ${
                        currentImage === idx 
                          ? "w-8 bg-functional-green shadow-sm" 
                          : "w-2.5 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right: Product Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-clinical-blue/20 text-clinical-blue bg-clinical-blue/5 px-3 py-1">Clinical Recovery Series</Badge>
                  <div className="flex items-center gap-2 bg-white shadow-sm border rounded-full px-3 py-1">
                    <ShieldCheck size={14} className="text-functional-green" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-blue">NSF Certified</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-functional-green">Micronized Creatine Monohydrate</h1>
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-bold text-foreground">$48.00</p>
                  <div className="flex items-center gap-4 py-1 px-2 border rounded-full bg-muted/30">
                    <div className="flex items-center gap-2 text-[10px] text-clinical-blue font-bold uppercase tracking-widest">
                      <ShieldCheck size={14} /> 3rd-Party Tested
                    </div>
                    <div className="w-px h-3 bg-border" />
                    <div className="flex items-center gap-2 text-[10px] text-clinical-blue font-bold uppercase tracking-widest">
                      <Activity size={14} /> Physician Formulated
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A high-purity, micronized creatine monohydrate designed specifically for adults focused on functional recovery, muscle preservation, and long-term mobility.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-functional-green/10 text-functional-green border-none">5g clinical dose</Badge>
                  <Badge variant="secondary" className="bg-clinical-blue/10 text-clinical-blue border-none">30 Individual Stick Packs</Badge>
                  <Badge variant="secondary" className="bg-functional-green/10 text-functional-green border-none">Unflavored</Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Supports muscle energy & ATP",
                    "Aids recovery after illness",
                    "Helps maintain independence",
                    "Pharmaceutical-grade purity"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-functional-green shrink-0" />
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 space-y-6">
                <div className="p-8 bg-warm-sunrise/50 rounded-[32px] border border-functional-green/10 space-y-6 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-sunrise-yellow text-black border-none font-bold">Pre-Launch</Badge>
                      <h3 className="text-xl font-serif font-bold text-functional-green">Get Notified at Launch</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Be the first to know when our Clinical Stick Packs are available.</p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-xl bg-white overflow-hidden">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-3 hover:bg-muted transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center font-bold">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-3 hover:bg-muted transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <Button className="flex-1 h-14 rounded-xl bg-functional-green hover:bg-functional-green/90 font-bold text-white shadow-lg shadow-functional-green/20 text-lg">
                        Start Your Recovery
                      </Button>
                    </div>

                    <form 
                      onSubmit={async (e) => {
                        e.preventDefault();
                        if (!email) return;
                        setStatus("loading");
                        // Mock success for now
                        setTimeout(() => {
                          setStatus("success");
                          setMessage("Thank you! We'll notify you at launch.");
                          setEmail("");
                        }, 1000);
                      }} 
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                        required
                        className="rounded-xl h-12 bg-white border-border focus-visible:ring-functional-green px-4"
                      />
                      <Button 
                        type="submit"
                        disabled={status === "loading"}
                        variant="outline"
                        className="rounded-xl h-12 px-8 border-functional-green text-functional-green hover:bg-functional-green/5 font-bold"
                      >
                        {status === "loading" ? "Joining..." : "Notify me"}
                      </Button>
                    </form>
                  </div>
                  
                  {status === "success" && (
                    <p className="text-sm font-medium text-functional-green animate-in fade-in slide-in-from-top-1">
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-pathway">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Key Benefits</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green">
              Designed for real-world recovery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="text-functional-green" size={24} />,
                title: "Muscle Energy",
                description: "Supports ATP regeneration for sustained muscle function and daily activity",
                bg: "bg-sunrise-yellow/5"
              },
              {
                icon: <HeartPulse className="text-functional-green" size={24} />,
                title: "Recovery Aid",
                description: "Helps restore strength after illness, surgery, or extended bed rest",
                bg: "bg-clinical-blue/5"
              },
              {
                icon: <UserCheck className="text-functional-green" size={24} />,
                title: "Independence",
                description: "Maintains the physical capacity needed for independent living",
                bg: "bg-functional-green/5"
              },
              {
                icon: <Clock className="text-functional-green" size={24} />,
                title: "Daily Use",
                description: "Simple once-daily serving that integrates into any routine",
                bg: "bg-warm-sunrise/5"
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="group border border-border/50 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 rounded-[32px] bg-white overflow-hidden">
                <CardContent className="p-10 space-y-6">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-functional-green">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonial Section */}
      <section className="py-20 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunrise-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <div className="flex justify-center text-sunrise-yellow/20">
                <Quote size={80} fill="currentColor" />
              </div>
              <p className="text-2xl md:text-3xl font-serif italic text-functional-green leading-relaxed">
                "After my surgery, I felt like my strength was gone. Adding FunctionalHealth creatine to my daily routine was a turning point. Within weeks, I had the energy to get back to my morning walks and reclaim my independence."
              </p>
              <div className="pt-8 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden border-2 border-white shadow-md">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Patient" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Sarah J., 62</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Post-Op Recovery Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide Section */}
      <section className="py-20 bg-warm-sunrise/20 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <Activity size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Usage Guide</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Simple, consistent, effective
            </h2>
            <p className="text-muted-foreground">Pre-measured 5g stick packs for effortless daily support.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-functional-green/10 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  number: "1",
                  title: "One Stick Pack Daily",
                  description: "Tear open one pre-packaged 5g stick pack and mix into any beverage.",
                  icon: <PackageCheck className="text-functional-green" size={32} />
                },
                {
                  number: "2",
                  title: "Take Consistently",
                  description: "Benefits build over 2–4 weeks of consistent daily intake.",
                  icon: <CalendarCheck className="text-functional-green" size={32} />
                },
                {
                  number: "3",
                  title: "Maintain Long-Term",
                  description: "Continued use supports ongoing muscle energy and functional recovery.",
                  icon: <GlassWater className="text-functional-green" size={32} />
                }
              ].map((step, idx) => (
                <div key={idx} className="text-center space-y-6 group">
                  <div className="w-20 h-20 rounded-[28px] bg-white shadow-lg border border-border/50 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform relative">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-functional-green text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                    {step.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-clinical-blue/20 text-clinical-blue flex items-center gap-2 w-fit mx-auto bg-clinical-blue/5">
              <FlaskConical size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Pharmaceutical-Grade Purity</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Why our creatine is different
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We use Creavitalis® — a ≥99.9% pure creatine monohydrate manufactured in Germany under pharmaceutical-grade standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                stat: "≥99.9%",
                title: "Chemical Purity",
                description: "Virtually no inactive byproducts or contaminants. Extremely low process impurities and tight heavy metal limits."
              },
              {
                stat: "H2O",
                title: "Pure Synthesis",
                description: "Produced using a closed-system, water-based synthesis — no harsh organic solvents or residual chemicals."
              },
              {
                stat: "GMP",
                title: "Certified Quality",
                description: "Every batch undergoes identity verification, heavy metal testing, and microbial screening in GMP facilities."
              },
              {
                stat: "100%",
                title: "Fully Reacted",
                description: "Stable molecular structure ensures predictable absorption with minimal gastrointestinal issues."
              },
              {
                stat: "200μ",
                title: "Micronized",
                description: "Ultra-fine particle size improves solubility and absorption efficiency — critical for clinical populations."
              },
              {
                stat: "SAFE",
                title: "Clinical Standard",
                description: "Meets the rigorous quality demands of post-acute care patients and long-term supplementation protocols."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border border-border/50 shadow-sm rounded-[32px] bg-card hover:border-functional-green/30 transition-colors">
                <CardContent className="p-10 space-y-6">
                  <div className="text-3xl font-serif font-bold text-functional-green/40">{item.stat}</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 p-10 bg-white rounded-[40px] border-l-8 border-l-functional-green border-y border-r border-border/50 shadow-xl space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-functional-green/5 flex items-center justify-center text-functional-green shrink-0">
                  <Info size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-foreground">Why Purity Matters in Clinical Use</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lower-quality creatine products can contain residual solvents and heavy metals. These risks are unacceptable for medically vulnerable populations and long-term protocols.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "≥99.9% pure creatine monohydrate",
                  "Manufactured in Germany under GMP",
                  "Third-party tested for contaminants",
                  "Free from additives and fillers"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 size={18} className="text-functional-green" /> {text}
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="rounded-[40px] border border-border/50 bg-warm-sunrise/30 p-10 text-center space-y-6">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Our Manufacturing Partner</p>
              <div className="space-y-4">
                <div className="text-3xl font-serif font-bold text-functional-green">Creavitalis®</div>
                <p className="text-xs text-muted-foreground leading-relaxed">The gold standard in pharmaceutical-grade creatine monohydrate.</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="partner-info" className="border-none">
                  <AccordionTrigger className="justify-center gap-2 hover:no-underline text-xs font-bold uppercase tracking-widest text-clinical-blue py-2">
                    Learn More
                  </AccordionTrigger>
                  <AccordionContent className="text-[10px] text-muted-foreground text-left pt-4 leading-relaxed">
                    Creavitalis® is produced by Alzchem in Germany using a patented process that ensures the highest purity levels globally. It is the preferred choice for clinical research and pharmaceutical applications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button variant="outline" size="sm" className="w-full rounded-xl border-clinical-blue/20 text-clinical-blue hover:bg-clinical-blue hover:text-white transition-all" asChild>
                <a href="https://www.creavitalis.com/en/" target="_blank" rel="noopener noreferrer">
                  Official Website <ArrowRight size={14} className="ml-2" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-pathway">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[48px] border border-border/50 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 space-y-10">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full px-4 py-1 border-clinical-blue/20 text-clinical-blue flex items-center gap-2 w-fit bg-clinical-blue/5">
                    <Users size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Who It's For</span>
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                    Built for people who <br />need it most
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our creatine is specifically formulated for adults managing recovery, aging, or chronic conditions — not athletes looking for a performance edge.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Adults 40+ experiencing age-related muscle loss",
                    "Patients recovering from hospitalization or surgery",
                    "Individuals in physical rehabilitation programs",
                    "Caregivers supporting recovery at home",
                    "Health-conscious adults focused on longevity"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-functional-green/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-functional-green" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-clinical-blue/5 p-12 md:p-20 flex flex-col justify-center">
                <Card className="border-none shadow-xl rounded-[32px] bg-white overflow-hidden">
                  <CardContent className="p-10 space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-clinical-blue/10 flex items-center justify-center text-clinical-blue">
                        <ShieldCheck size={24} />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground">Safety Profile</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Creatine monohydrate has been extensively studied for safety across all age groups, including older adults and clinical populations.
                    </p>
                    <div className="space-y-4">
                      {[
                        "**FDA GRAS** (Generally Recognized As Safe) status",
                        "No significant side effects at recommended doses",
                        "**Safe for long-term daily use**",
                        "Compatible with most medications (consult your physician)",
                        "Third-party tested for purity and potency"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-functional-green/40 mt-1 shrink-0" />
                          <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-warm-sunrise/20 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about Clinical Creatine support.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Is creatine safe for older adults?",
                a: "Yes. Extensive clinical research has shown that creatine is safe and well-tolerated in older populations. It is often recommended by geriatricians to help combat sarcopenia (age-related muscle loss)."
              },
              {
                q: "Can I take this with my medications?",
                a: "While creatine is generally safe, we always recommend consulting your physician before starting any new supplement, especially if you are taking medications for kidney function or blood pressure."
              },
              {
                q: "How soon will I see results?",
                a: "Most patients report feeling improvements in energy and functional strength within 2–4 weeks of consistent daily use. Long-term benefits for muscle preservation continue with ongoing supplementation."
              },
              {
                q: "Is this safe after surgery?",
                a: "Yes, creatine is often used in post-operative recovery protocols to help minimize muscle loss during periods of reduced mobility. Always follow your surgeon's specific nutritional guidance."
              },
              {
                q: "Will this make me look like a bodybuilder?",
                a: "No. Creatine supports muscle energy and function. For most adults, it simply helps maintain existing muscle and improves the physical capacity needed for daily living."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 bg-white rounded-[24px] px-8 overflow-hidden shadow-sm">
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6 text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Still have questions? <Link to="/about" className="text-clinical-blue font-bold hover:underline">Contact our clinical team</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Bar */}
      <section className="py-12 bg-functional-green text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold">5,000+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Recoveries Supported</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Purity Guaranteed</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold">Physician</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Led Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Medical Disclaimer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center gap-8">
            <Link to="/about" className="text-xs font-bold text-muted-foreground hover:text-functional-green transition-colors uppercase tracking-widest">About</Link>
            <Link to="/science" className="text-xs font-bold text-muted-foreground hover:text-functional-green transition-colors uppercase tracking-widest">Science</Link>
            <Link to="/education" className="text-xs font-bold text-muted-foreground hover:text-functional-green transition-colors uppercase tracking-widest">Education</Link>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
              *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="text-xs font-bold text-clinical-blue">
              <Stethoscope size={14} className="inline mr-2" />
              Always consult your physician before starting any new supplement protocol.
            </p>
          </div>
          <div className="pt-6 text-[10px] text-muted-foreground/40">
            © {new Date().getFullYear()} FunctionalHealth. Designed for Functional Independence.
          </div>
        </div>
      </footer>
    </div>
  );
}
