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
  ChevronRight
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { useState, useEffect } from "react";

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Product Hero */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-sunrise-yellow/20 rounded-[40px] flex items-center justify-center overflow-hidden border border-border">
                {/* Placeholder for product image */}
                <div className="relative w-64 h-80 bg-white rounded-xl shadow-2xl border border-border flex flex-col items-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-functional-green flex items-center justify-center text-white mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-1">
                    <span className="text-functional-green">Functional</span>
                    <span className="text-clinical-blue">Health</span>
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-6">Clinical Grade</p>
                  <div className="w-full h-px bg-border mb-6" />
                  <h4 className="text-2xl font-serif font-bold text-functional-green">CREATINE</h4>
                  <p className="text-xs text-muted-foreground mt-2">Recovery & Mobility Protocol</p>
                  <div className="mt-auto text-[8px] text-muted-foreground/30 uppercase tracking-widest">
                    Physician Formulated • 500g
                  </div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute top-10 right-10 bg-white/80 backdrop-blur shadow-sm border rounded-full px-4 py-2 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-functional-green" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-blue">NSF Certified</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 border-clinical-blue/20 text-clinical-blue bg-clinical-blue/5">Clinical Recovery Series</Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-functional-green mb-4">Clinical Creatine</h1>
                <p className="text-2xl font-light text-muted-foreground">$48.00</p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A high-purity, micronized creatine monohydrate designed specifically for adults focused on functional recovery, muscle preservation, and long-term mobility.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-check-green" />
                  <span className="text-foreground">Supports muscle energy & ATP regeneration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-check-green" />
                  <span className="text-foreground">Aids recovery after illness or surgery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-check-green" />
                  <span className="text-foreground">Helps maintain functional independence</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-full px-12 h-14 text-lg bg-functional-green hover:bg-functional-green/90">Add to Cart</Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 border-clinical-blue text-clinical-blue hover:bg-clinical-blue hover:text-white">Subscribe & Save 15%</Button>
              </div>
              
              <div className="flex items-center gap-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-xs text-clinical-blue font-medium uppercase tracking-widest">
                  <ShieldCheck size={16} /> Third-Party Tested
                </div>
                <div className="flex items-center gap-2 text-xs text-clinical-blue font-medium uppercase tracking-widest">
                  <Activity size={16} /> Physician Formulated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-pathway">
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
                icon: <Zap className="text-functional-green" size={20} />,
                title: "Muscle Energy",
                description: "Supports ATP regeneration for sustained muscle function and daily activity"
              },
              {
                icon: <HeartPulse className="text-functional-green" size={20} />,
                title: "Recovery Aid",
                description: "Helps restore strength after illness, surgery, or extended bed rest"
              },
              {
                icon: <UserCheck className="text-functional-green" size={20} />,
                title: "Independence",
                description: "Maintains the physical capacity needed for independent living"
              },
              {
                icon: <Clock className="text-functional-green" size={20} />,
                title: "Daily Use",
                description: "Simple once-daily serving that integrates into any routine"
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-functional-green/5 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-functional-green">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 text-primary flex items-center gap-2 w-fit mx-auto bg-primary/5">
              <Activity size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Usage Guide</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Simple, consistent, effective
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                number: "1",
                title: "One Scoop Daily",
                description: "Mix 5g (one scoop) into water, juice, or any beverage of your choice."
              },
              {
                number: "2",
                title: "Take Consistently",
                description: "Creatine works best with daily use. Benefits build over 2–4 weeks of consistent intake."
              },
              {
                number: "3",
                title: "Maintain Long-Term",
                description: "Continued daily use supports ongoing muscle energy and functional recovery."
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto font-bold text-lg border border-primary/20">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purity Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 text-primary flex items-center gap-2 w-fit mx-auto bg-primary/5">
              <FlaskConical size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Pharmaceutical-Grade Purity</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Why our creatine is different
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We use Creavitalis® — a ≥99.9% pure creatine monohydrate manufactured in Germany under pharmaceutical-grade standards — ensuring every dose meets the highest level of safety, consistency, and scientific integrity.
            </p>
            <div className="pt-4">
              <Button variant="outline" size="sm" className="rounded-full border-primary/20 text-primary hover:bg-primary/5" asChild>
                <a href="https://www.creavitalis.com/en/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit Creavitalis <ChevronRight size={14} />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <FlaskConical className="text-primary" size={20} />,
                title: "≥99.9% Chemical Purity",
                description: "Virtually no inactive byproducts or contaminants. Minimal creatinine, extremely low process impurities, and tight heavy metal limits for lead, mercury, cadmium, and arsenic."
              },
              {
                icon: <Atom className="text-primary" size={20} />,
                title: "Pharmaceutical-Grade Process",
                description: "Produced using a closed-system, water-based synthesis — no harsh organic solvents, no residual chemicals. Multi-step purification ensures batch-to-batch consistency."
              },
              {
                icon: <Award className="text-primary" size={20} />,
                title: "Third-Party Tested",
                description: "Every batch undergoes identity verification, heavy metal testing, microbial screening, and purity assays. Manufactured in GMP-certified facilities meeting global safety standards."
              },
              {
                icon: <ShieldCheck className="text-primary" size={20} />,
                title: "Fully Reacted Monohydrate",
                description: "No free creatine salts or incomplete reactions. A stable molecular structure ensures predictable absorption and bioavailability with minimal gastrointestinal issues."
              },
              {
                icon: <Microscope className="text-primary" size={20} />,
                title: "Micronized for Clinical Use",
                description: "Ultra-fine particle size improves solubility, gastrointestinal tolerance, consistent dosing, and absorption efficiency — critical for clinical and aging populations."
              },
              {
                icon: <Sparkles className="text-primary" size={20} />,
                title: "Designed for Vulnerable Populations",
                description: "Unlike commodity creatine, Creavitalis® meets the rigorous quality demands of post-acute care patients, older adults, and long-term supplementation protocols."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border border-border/50 shadow-sm rounded-2xl bg-card">
                <CardContent className="p-8 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-10 bg-background rounded-[32px] border border-border/50 shadow-sm text-center space-y-6">
            <h3 className="text-2xl font-serif font-bold text-foreground">Why Purity Matters in Clinical Use</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Lower-quality creatine products — often sourced from poorly controlled manufacturing — can contain residual solvents, heavy metals, and degradation products. These risks are unacceptable for medically vulnerable populations and long-term supplementation protocols.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <CheckCircle2 size={14} className="text-primary" /> ≥99.9% pure creatine monohydrate
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <CheckCircle2 size={14} className="text-primary" /> Manufactured in Germany under GMP
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <CheckCircle2 size={14} className="text-primary" /> Third-party tested for contaminants
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <CheckCircle2 size={14} className="text-primary" /> Free from additives and fillers
              </div>
            </div>
            <div className="pt-6 border-t border-border/50">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-3">Our Manufacturing Partner</p>
              <a 
                href="https://www.creavitalis.com/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors border border-border/50 group"
              >
                <div className="text-sm font-serif font-bold text-foreground">Creavitalis®</div>
                <div className="w-px h-4 bg-border" />
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1 group-hover:text-primary transition-colors">
                  View Website <ChevronRight size={12} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 text-primary flex items-center gap-2 w-fit bg-primary/5">
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
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary/60" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border border-border/50 shadow-sm rounded-[32px] bg-card overflow-hidden">
              <CardContent className="p-10 space-y-8">
                <h3 className="text-2xl font-serif font-bold text-foreground">Safety Profile</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Creatine monohydrate has been extensively studied for safety across all age groups, including older adults and clinical populations.
                </p>
                <div className="space-y-4">
                  {[
                    "FDA GRAS (Generally Recognized As Safe) status",
                    "No significant side effects at recommended doses",
                    "Safe for long-term daily use",
                    "Compatible with most medications (consult your physician)",
                    "Third-party tested for purity and potency"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-primary/40 mt-1 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 bg-card rounded-2xl px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">Is creatine safe for older adults?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Yes. Extensive clinical research has shown that creatine is safe and well-tolerated in older populations. It is often recommended by geriatricians to help combat sarcopenia (age-related muscle loss).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-border/50 bg-card rounded-2xl px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">Will this make me look like a bodybuilder?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                No. Creatine supports muscle energy and function. Significant muscle growth requires specific high-intensity resistance training and a caloric surplus. For most, it simply helps maintain existing muscle and improves functional strength.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-border/50 bg-card rounded-2xl px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">Do I need to "load" creatine?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                While some athletes use a loading phase, it is not necessary. Taking 5g daily will saturate your muscle stores within 3-4 weeks and is generally easier on the digestive system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
