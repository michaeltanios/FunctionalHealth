import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldCheck, Activity, Microscope, HeartPulse, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

import React, { useState, useEffect } from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    useEffect(() => {
      window.scrollTo(0, 0);
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
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-12 md:py-20 lg:min-h-[85vh] flex items-center overflow-hidden bg-warm-sunrise"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <img 
                    src="/logo.png" 
                    alt="FunctionalHealth Logo" 
                    className="h-24 md:h-32 w-auto drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <Badge variant="secondary" className="px-4 py-1 text-xs font-bold tracking-wider uppercase bg-white/80 text-clinical-blue border-none backdrop-blur-sm shadow-sm">
                    Physician-Led Research
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] mb-6 text-functional-green tracking-tight">
                  Restoring Recovery, <br />
                  <span className="text-clinical-blue">Independence,</span> <br />
                  <span className="text-muted-foreground/60">and Longevity.</span>
                </h1>
                <p className="text-xl text-foreground/90 mb-10 leading-relaxed max-w-2xl font-medium">
                  We translate clinical research into real-world health solutions. 
                  Evidence-based supplementation designed for functional recovery and long-term vitality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="rounded-full px-10 text-lg bg-functional-green hover:bg-functional-green/90 shadow-xl shadow-functional-green/20 font-bold h-16">
                    <Link to="/product">Begin Your Recovery</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-10 text-lg border-clinical-blue text-clinical-blue hover:bg-clinical-blue hover:text-white transition-all h-16 font-bold">
                    <Link to="/science" className="flex items-center gap-2">
                      Learn the Science <ArrowRight size={20} />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold text-clinical-blue/80">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-sunrise-yellow">
                      {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                    </div>
                    <span>Trusted by 5,000+ patients</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative hidden lg:block"
              >
                <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Active senior exercising and feeling energized" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-border/50 max-w-[240px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-functional-green animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-clinical-blue">Clinical Standard</span>
                  </div>
                  <p className="text-sm font-bold text-foreground leading-tight">
                    Formulated based on peer-reviewed clinical trials for functional outcomes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

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
                  During illness, hospitalization, or simply as we age, the body undergoes a rapid decline in muscle mass and cellular energy. This \"recovery gap\" often leads to a loss of independence and a slower return to daily activities.
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
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:left-4 lg:-left-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-border/50 max-w-[220px]">
                  <p className="text-[11px] font-medium italic text-clinical-blue leading-relaxed">
                    \"Our goal is to bridge the gap between clinical research and patient recovery.\"
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
                    src="/product-pouch.png" 
                    alt="FunctionalHealth Micronized Creatine Monohydrate" 
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
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
                    <div key={i} className="flex gap-3">
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
                <Card key={i} className="border-none shadow-lg bg-white p-8 rounded-[32px]">
                  <div className="flex flex-col h-full">
                    <div className="text-sunrise-yellow mb-6 text-xl">★★★★★</div>
                    <p className="text-foreground/80 font-medium leading-relaxed mb-8 flex-grow italic">\"{t.quote}\"</p>
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
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-background overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="bg-functional-green rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-functional-green/20">
              {/* Background Watermark */}
              <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
                <img src="/logo.png" alt="" className="w-96 h-auto rotate-12" referrerPolicy="no-referrer" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 text-white">
                  <Badge variant="outline" className="border-white/20 text-white bg-white/5 font-bold">Recovery Community</Badge>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight">
                    You don't have to <br />recover alone.
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed max-w-lg font-medium">
                    Join our peer-led community for post-ICU survivors and caregivers. Share your story, find advice, and connect with others on the same journey.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full bg-white text-functional-green hover:bg-sunrise-yellow hover:text-functional-green px-10 font-bold h-16 text-lg">
                      <Link to="/community">Join the Community</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10 px-10 font-bold h-16 text-lg">
                      <Link to="/community">Read Stories</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">5k+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Members</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">12k+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Stories</div>
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Support</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Peer-Led</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

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
