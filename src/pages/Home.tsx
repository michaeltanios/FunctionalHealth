import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldCheck, Activity, Microscope, HeartPulse, CheckCircle2, Zap, Sparkles, Users, Loader2, Send, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from 'react-markdown';
import { ai, SYSTEM_INSTRUCTION } from "@/lib/gemini";

import React, { useState, useEffect } from "react";
import CertificationMarquee from "../components/CertificationMarquee";
import logo from "../assets/logo.png";
import productPouch from "../assets/product-pouch.png";

export default function Home() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const heroSlides = [
      {
        title: "Physician-Formulated, Evidence-Led Recovery.",
        subtitle: "The only recovery protocol designed to bridge the gap between hospital and home. Micronized Creatine Monohydrate for functional independence.",
        cta: "Shop the Protocol",
        link: "/product",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200",
        badge: "Clinical Standard"
      },
      {
        title: "Recover Together, ICU Survivor Community.",
        subtitle: "Join our peer-led collective specifically designed for ICU survivors and their families. Find support, share stories, and regain your confidence.",
        cta: "Join the Collective",
        link: "/community",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
        badge: "Peer-Led Support"
      },
      {
        title: "Clinical Research, Translated for You.",
        subtitle: "Led by Dr. Maged Tanios, MD, MPH, MBA. We strip away the hype and focus on peer-reviewed data to deliver real-world functional outcomes.",
        cta: "Meet the Team",
        link: "/about",
        image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=1200",
        badge: "Physician-Led"
      }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [faqQuestion, setFaqQuestion] = useState("");
    const [faqAnswer, setFaqAnswer] = useState("");
    const [isFaqLoading, setIsFaqLoading] = useState(false);

    const handleFaqAsk = async (question?: string) => {
      const query = question || faqQuestion;
      if (!query.trim() || isFaqLoading) return;

      setIsFaqLoading(true);
      setFaqAnswer("");
      if (!question) setFaqQuestion("");

      try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: SYSTEM_INSTRUCTION + "\n\nYou are an expert on functional recovery. Answer the user's general question about recovery, nutrition, or muscle health. Keep it clinical, empathetic, and concise. **MANDATORY: Include at least one direct citation from a peer-reviewed source (e.g., PubMed, NIH) if providing scientific claims.** Always include the medical disclaimer. Use Google Search to find specific clinical data if needed.",
            tools: [{ googleSearch: {} }],
          },
          contents: query,
        });

        setFaqAnswer(response.text || "I couldn't find a specific answer to that. Please try asking about muscle loss during aging or recovery after surgery.");
      } catch (error) {
        console.error("Smart FAQ error:", error);
        setFaqAnswer("Sorry, I'm having trouble connecting to my research database. Please try again in a moment.");
      } finally {
        setIsFaqLoading(false);
      }
    };

    useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
      return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) return;

      setStatus("loading");
      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setStatus("success");
          setMessage("Thank you! You've been added to our waitlist.");
          setEmail("");
        } else {
          const data = await response.json();
          setStatus("error");
          setMessage(data.error || "Something went wrong. Please try again.");
        }
      } catch (err) {
        setStatus("error");
        setMessage("Failed to connect to the server. Please check your connection.");
      }
    };

    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:min-h-[90vh] flex items-center overflow-hidden bg-warm-sunrise">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="max-w-3xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <img 
                      src={logo} 
                      alt="FunctionalHealth Logo" 
                      className="h-24 md:h-32 w-auto drop-shadow-md"
                    />
                    <Badge variant="secondary" className="px-4 py-1 text-xs font-bold tracking-wider uppercase bg-white/80 text-clinical-blue border-none backdrop-blur-sm shadow-sm">
                      {heroSlides[currentSlide].badge}
                    </Badge>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.05] mb-6 text-functional-green tracking-tight">
                    {heroSlides[currentSlide].title.split(',').map((part, i) => (
                      <React.Fragment key={`hero-title-part-${i}`}>
                        {i === 1 ? <span className="text-clinical-blue">{part}</span> : part}
                        {i < heroSlides[currentSlide].title.split(',').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed max-w-2xl font-medium">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild size="lg" className="rounded-full px-10 text-lg bg-functional-green hover:bg-functional-green/90 shadow-xl shadow-functional-green/20 font-bold h-16">
                      <Link to={heroSlides[currentSlide].link}>{heroSlides[currentSlide].cta}</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-10 text-lg border-clinical-blue text-clinical-blue hover:bg-clinical-blue hover:text-white transition-all h-16 font-bold">
                      <Link to="/quiz" className="flex items-center gap-2">
                        Take Recovery Quiz <Sparkles size={20} className="text-sunrise-yellow" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-sm font-bold text-clinical-blue/80">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={`user-avatar-${i}`} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 text-sunrise-yellow">
                          {"★★★★★".split("").map((s, i) => <span key={`star-${i}`}>{s}</span>)}
                        </div>
                        <span>Trusted by 5,000+ patients</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {heroSlides.map((_, i) => (
                        <button 
                          key={`hero-dot-${i}`}
                          onClick={() => setCurrentSlide(i)}
                          className={`h-1.5 rounded-full transition-all ${currentSlide === i ? "w-8 bg-functional-green" : "w-2 bg-functional-green/20"}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative hidden lg:block lg:-mt-48"
                >
                  <div className="w-full aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl ring-1 ring-white/20">
                    <img 
                      src={heroSlides[currentSlide].image} 
                      alt="Recovery focus" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-border/50 max-w-[240px]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-functional-green animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-clinical-blue">Clinical Standard</span>
                    </div>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      Optimized for post-operative and age-related recovery.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
        
        <CertificationMarquee />

        {/* Problem Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 bg-secondary/5"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green tracking-tight">
                  The Challenge of Recovery
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  During illness, hospitalization, or simply as we age, the body undergoes a rapid decline in muscle mass and cellular energy. This "recovery gap" often leads to a loss of independence and a slower return to daily activities.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    "Accelerated muscle loss (Sarcopenia)",
                    "Reduced mitochondrial energy production",
                    "Extended rehabilitation timelines",
                    "Decreased functional mobility"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="text-functional-green mt-1 shrink-0" size={20} />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <div className="w-full max-w-sm aspect-[4/3] rounded-3xl bg-white overflow-hidden shadow-inner ring-1 ring-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" 
                    alt="Modern clinical recovery environment" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:left-4 lg:-left-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-border/50 max-w-[220px]">
                  <p className="text-[11px] font-medium italic text-clinical-blue leading-relaxed">
                    "Our goal is to bridge the gap between clinical research and patient recovery."
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <p className="text-[9px] font-bold text-functional-green tracking-widest uppercase">Dr. Maged Tanios, MD, MPH, MBA</p>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-widest mt-0.5">Chief Medical Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution Section: Creatine */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 bg-pathway"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-functional-green text-white border-none px-4 py-1 font-bold">The Solution</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-functional-green tracking-tight">Restoring Cellular Energy</h2>
              <p className="text-lg text-foreground/80 font-medium">
                Creatine is one of the most researched molecules in clinical nutrition. Beyond the gym, it is a vital tool for maintaining muscle energy and supporting functional recovery in aging adults.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-xl bg-white hover:translate-y-[-4px] transition-transform duration-300">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-functional-green/10 flex items-center justify-center mb-6">
                    <Activity className="text-functional-green" size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-functional-green">Muscle Energy</h3>
                  <p className="text-foreground/70 text-base leading-relaxed font-medium">
                    Supports the rapid regeneration of ATP, the primary energy currency for muscle contraction and mobility.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl bg-white hover:translate-y-[-4px] transition-transform duration-300">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-functional-green/10 flex items-center justify-center mb-6">
                    <ShieldCheck className="text-functional-green" size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-functional-green">Functional Strength</h3>
                  <p className="text-foreground/70 text-base leading-relaxed font-medium">
                    Helps maintain muscle mass during periods of reduced activity, preserving the ability to perform daily tasks.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl bg-white hover:translate-y-[-4px] transition-transform duration-300">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-functional-green/10 flex items-center justify-center mb-6">
                    <HeartPulse className="text-functional-green" size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-functional-green">Cognitive Support</h3>
                  <p className="text-foreground/70 text-base leading-relaxed font-medium">
                    Emerging research indicates creatine's role in supporting brain energy metabolism, especially during recovery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Product Showcase Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[60px] bg-warm-sunrise/30 flex items-center justify-center p-12">
                  <img 
                    src={productPouch} 
                    alt="FunctionalHealth Micronized Creatine Monohydrate" 
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-functional-green/10 flex items-center gap-2">
                  <CheckCircle2 className="text-functional-green" size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest text-clinical-blue">NSF Certified Purity</span>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-clinical-blue text-white border-none font-bold">Featured Product</Badge>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green tracking-tight">
                    Micronized Creatine <br />Monohydrate
                  </h2>
                  <p className="text-xl text-foreground/80 font-medium leading-relaxed">
                    The gold standard for functional recovery. Ultra-pure, physician-formulated, and designed for maximum bioavailability.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Pure Creavitalis®", desc: "Highest clinical grade available." },
                    { title: "Zero Additives", desc: "No fillers, flavors, or sweeteners." },
                    { title: "Physician Led", desc: "Formulated for clinical outcomes." },
                    { title: "Third Party Tested", desc: "Verified for purity and potency." }
                  ].map((benefit, i) => (
                    <div key={`benefit-${i}`} className="flex gap-3">
                      <CheckCircle2 className="text-functional-green shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-black">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="text-3xl font-sans font-extrabold text-functional-green">$45.00 <span className="text-sm text-muted-foreground font-medium">/ 60 Servings</span></div>
                  <Button asChild size="lg" className="rounded-full px-12 bg-functional-green hover:bg-functional-green/90 shadow-xl shadow-functional-green/20 font-bold h-16 w-full sm:w-auto">
                    <Link to="/product">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 bg-secondary/5"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-functional-green tracking-tight">Voices of Recovery</h2>
              <p className="text-lg text-foreground/70 font-medium">Real stories from patients and physicians who have integrated FunctionalHealth into their recovery protocol.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Recovered 40% faster after hip surgery. My physical therapist was amazed at how quickly my strength returned.",
                  author: "Robert M.",
                  role: "Post-Op Recovery",
                  img: "https://i.pravatar.cc/100?img=12"
                },
                {
                  quote: "As a physician, I only recommend what is backed by data. FunctionalHealth is the only brand I trust for my patients' recovery.",
                  author: "Dr. Sarah L.",
                  role: "Geriatric Specialist",
                  img: "https://i.pravatar.cc/100?img=45"
                },
                {
                  quote: "I feel more energized and capable of handling my daily tasks than I have in years. It's truly life-changing.",
                  author: "Elena G.",
                  role: "Longevity Focus",
                  img: "https://i.pravatar.cc/100?img=32"
                }
              ].map((t, i) => (
                <Card key={`testimonial-${i}`} className="border-none shadow-lg bg-white p-8 rounded-[32px]">
                  <div className="flex flex-col h-full">
                    <div className="text-sunrise-yellow mb-6 text-xl">★★★★★</div>
                    <p className="text-foreground/80 font-medium leading-relaxed mb-8 flex-grow italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full border-2 border-functional-green/20" />
                      <div>
                        <div className="font-bold text-black">{t.author}</div>
                        <div className="text-xs font-bold text-clinical-blue uppercase tracking-widest">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Community Section */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="bg-functional-green rounded-[48px] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-functional-green/20">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-sunrise-yellow/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
              
              {/* Background Watermark */}
              <div className="absolute -right-16 -bottom-16 opacity-[0.05] pointer-events-none select-none">
                <img src={logo} alt="" className="w-[400px] h-auto rotate-12" />
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                  <Badge variant="outline" className="border-white/20 text-white bg-white/5 px-4 py-1.5 font-bold uppercase tracking-widest text-[10px]">
                    Recovery Community
                  </Badge>
                  <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                    A Community Built for <br />
                    <span className="text-sunrise-yellow italic">Your Recovery.</span>
                  </h2>
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                    Join our peer-led collective for post-ICU survivors and caregivers. Share your story, find advice, and reclaim your independence together.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { label: "Active Members", value: "5k+" },
                    { label: "Support Hours", value: "24/7" },
                    { label: "Stories Shared", value: "12k+" },
                    { label: "Peer-Led", value: "100%" }
                  ].map((stat, i) => (
                    <div 
                      key={`community-stat-${i}`}
                      className="p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-4xl font-serif font-bold text-white tracking-tight">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="rounded-full bg-white text-functional-green hover:bg-sunrise-yellow hover:text-functional-green px-12 font-bold h-16 text-lg shadow-xl shadow-black/10 transition-all hover:scale-105 active:scale-95">
                    <Link to="/community">Join the Community</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white/40 text-sunrise-yellow hover:bg-white hover:text-functional-green px-12 font-bold h-16 text-lg transition-all">
                    <Link to="/community">Read Stories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 bg-secondary/10 border-y"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-clinical-blue">Early Access</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-functional-green leading-tight tracking-tight">
                  Join the Waitlist — Get Founder Pricing + Early Access.
                </h2>
                <p className="text-foreground/70 text-lg font-medium">
                  Waitlist members receive early access, founder pricing, and updates directly from our research team.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className="rounded-md h-14 bg-white border-border focus-visible:ring-functional-green text-lg px-6"
                />
                <Button 
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-md h-14 px-10 bg-functional-green hover:bg-functional-green/90 font-bold text-white whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Join waitlist"}
                </Button>
              </form>
              
              {status === "success" && (
                <p className="text-sm font-medium text-functional-green animate-in fade-in slide-in-from-top-1">
                  {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-destructive animate-in fade-in slide-in-from-top-1">
                  {message}
                </p>
              )}
              
              <p className="text-sm text-muted-foreground/60">
                No spam. Research updates only.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Smart AI FAQ Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="border-clinical-blue/20 text-clinical-blue bg-clinical-blue/5 px-4 py-1.5 font-bold uppercase tracking-widest text-[10px]">
                  Smart Recovery Assistant
                </Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green tracking-tight">
                  Have a specific question <br />
                  <span className="text-clinical-blue italic">about recovery?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Ask our AI Assistant anything about functional health, muscle preservation, or clinical nutrition.
                </p>
              </div>

              <div className="bg-secondary/10 rounded-[40px] p-8 md:p-12 border border-border/50 shadow-xl">
                <div className="space-y-8">
                  <div className="relative">
                    <Input 
                      placeholder="e.g., How does creatine help with sarcopenia?"
                      value={faqQuestion}
                      onChange={(e) => setFaqQuestion(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleFaqAsk()}
                      className="rounded-2xl h-16 pr-16 border-border bg-white focus-visible:ring-functional-green text-lg px-6 shadow-sm"
                    />
                    <Button 
                      onClick={() => handleFaqAsk()}
                      disabled={isFaqLoading || !faqQuestion.trim()}
                      className="absolute right-2 top-2 w-12 h-12 rounded-xl bg-functional-green hover:bg-functional-green/90 p-0"
                    >
                      {isFaqLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "What is sarcopenia?",
                      "Recovery after surgery tips",
                      "Benefits of micronized creatine",
                      "Nutrition for aging adults"
                    ].map((q, i) => (
                      <button 
                        key={`faq-suggested-${i}`}
                        onClick={() => handleFaqAsk(q)}
                        className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white border border-border hover:border-functional-green hover:text-functional-green transition-all shadow-sm"
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {faqAnswer ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="p-8 rounded-[32px] bg-white border border-functional-green/10 shadow-lg space-y-6 relative"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-functional-green">
                            <Sparkles size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">AI Analysis</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setFaqAnswer("")}
                            className="rounded-full h-8 w-8 p-0"
                          >
                            <X size={14} />
                          </Button>
                        </div>
                        <div className="text-foreground leading-relaxed whitespace-pre-wrap font-medium markdown-body">
                          <ReactMarkdown>{faqAnswer}</ReactMarkdown>
                        </div>
                        <div className="pt-4 border-t flex items-center gap-3 text-[10px] text-muted-foreground font-bold uppercase tracking-widest italic">
                          <ShieldCheck size={14} className="text-functional-green" />
                          Consult your physician for personalized medical advice.
                        </div>
                      </motion.div>
                    ) : isFaqLoading ? (
                      <div className="flex flex-col items-center justify-center space-y-4 py-12">
                        <Loader2 className="w-10 h-10 text-functional-green animate-spin" />
                        <p className="text-sm text-muted-foreground animate-pulse font-bold uppercase tracking-widest">Analyzing clinical research...</p>
                      </div>
                    ) : (
                      <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                        <MessageCircle size={64} className="text-muted-foreground" />
                        <p className="text-sm font-bold uppercase tracking-widest">Ask a question to begin</p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-24 bg-clinical-blue/5 border-y"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-functional-green tracking-tight">Built by Scientists. <br />Designed for Recovery.</h2>
                <p className="text-foreground/90 text-lg mb-8 font-medium leading-relaxed">
                  We don't follow trends. We follow the data. Every FunctionalHealth formulation is based on peer-reviewed clinical trials and physician-led research.
                </p>
                <div className="flex flex-wrap gap-8 opacity-60 grayscale">
                  <div className="flex items-center gap-2">
                    <Microscope size={20} className="text-clinical-blue" />
                    <span className="text-xs font-bold tracking-widest uppercase text-clinical-blue">Clinical Trials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-clinical-blue" />
                    <span className="text-xs font-bold tracking-widest uppercase text-clinical-blue">Physician Led</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity size={20} className="text-clinical-blue" />
                    <span className="text-xs font-bold tracking-widest uppercase text-clinical-blue">Evidence Based</span>
                  </div>
                </div>
              </div>
              <div className="bg-functional-green text-white p-10 rounded-3xl max-w-md shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4">The Evidence Protocol</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  We are committed to absolute transparency. Every claim we make is backed by peer-reviewed clinical data, ensuring we avoid the pseudoscientific hype common in the industry. Our focus is purely on evidence-based functional outcomes.
                </p>
                <Button asChild variant="secondary" className="w-full rounded-full bg-white text-functional-green hover:bg-clinical-blue hover:text-white">
                  <Link to="/education">Read the Research</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    );
}
