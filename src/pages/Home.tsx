import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldCheck, Activity, Microscope, HeartPulse, CheckCircle2 } from "lucide-react";

import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-warm-sunrise">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6 px-4 py-1 text-xs font-medium tracking-wider uppercase bg-white/50 text-clinical-blue border-none backdrop-blur-sm">
                Physician-Led Research
              </Badge>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-black">
                Restoring Recovery, <br />
                <span className="text-muted-foreground">Independence, and Longevity.</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl">
                We translate clinical research into real-world health solutions. 
                Evidence-based supplementation designed for functional recovery and long-term vitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-clinical-blue text-clinical-blue hover:bg-clinical-blue hover:text-white transition-all">
                  <Link to="/science" className="flex items-center gap-2">
                    Learn the Science <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-full px-8 text-base bg-functional-green hover:bg-functional-green/90">
                  <Link to="/product">View Clinical Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Professional medical consultation and care" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-border/50 max-w-[200px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-check-green animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-clinical-blue">Clinical Standard</span>
                </div>
                <p className="text-xs font-medium text-foreground leading-relaxed">
                  Formulated based on peer-reviewed clinical trials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 bg-background border-b">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-clinical-blue">Early Access</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-black leading-tight">
                Be first to know when we launch.
              </h2>
              <p className="text-muted-foreground text-lg">
                Waitlist members receive early access, founder pricing, and updates directly from our research team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="rounded-md h-14 bg-white border-border focus-visible:ring-functional-green text-lg px-6"
              />
              <Button className="rounded-md h-14 px-10 bg-functional-green hover:bg-functional-green/90 font-bold text-white whitespace-nowrap">
                Join waitlist
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground/60">
              No spam. Research updates only.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-functional-green">
                The Challenge of Recovery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
                    <CheckCircle2 className="text-check-green mt-1 shrink-0" size={20} />
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
      </section>

      {/* Solution Section: Creatine */}
      <section className="py-20 bg-pathway">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-functional-green text-white border-none">The Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-functional-green">Restoring Cellular Energy</h2>
            <p className="text-lg text-muted-foreground">
              Creatine is one of the most researched molecules in clinical nutrition. Beyond the gym, it is a vital tool for maintaining muscle energy and supporting functional recovery in aging adults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-sunrise-yellow/30 flex items-center justify-center mb-6">
                  <Activity className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-functional-green">Muscle Energy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Supports the rapid regeneration of ATP, the primary energy currency for muscle contraction and mobility.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-sunrise-yellow/30 flex items-center justify-center mb-6">
                  <ShieldCheck className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-functional-green">Functional Strength</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Helps maintain muscle mass during periods of reduced activity, preserving the ability to perform daily tasks.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-sunrise-yellow/30 flex items-center justify-center mb-6">
                  <HeartPulse className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-functional-green">Cognitive Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Emerging research indicates creatine's role in supporting brain energy metabolism, especially during recovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-bold mb-6 text-functional-green">Built by Scientists. <br />Designed for Recovery.</h2>
              <p className="text-muted-foreground mb-8">
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
                Our products undergo rigorous testing for purity, potency, and bioavailability. We ensure that what is on the label is exactly what is in the bottle.
              </p>
              <Button asChild variant="secondary" className="w-full rounded-full bg-white text-functional-green hover:bg-sunrise-yellow">
                <Link to="/science">Read the Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
