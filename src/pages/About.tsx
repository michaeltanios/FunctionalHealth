import { Badge } from "@/components/ui/badge";
import { Microscope, ShieldCheck, HeartPulse, Users, Instagram, Twitter, Linkedin } from "lucide-react";

import { useState, useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* About Hero */}
      <section className="py-20 md:py-32 bg-warm-sunrise border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-functional-green text-white border-none">Our Mission</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-functional-green leading-tight">
              Bridging the Gap Between <br />
              <span className="text-clinical-blue/60 italic">Research and Recovery.</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              FunctionalHealth was founded by a team of physicians and researchers who saw a critical missing link in patient care: evidence-based nutrition for functional recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-functional-green">The Physician's Perspective</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In clinical practice, we often see patients struggle after hospitalization or during aging. They lose muscle mass rapidly, their energy levels plummet, and their path back to independence becomes longer and more difficult.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We realized that while medical treatments were advancing, the nutritional support for "functional recovery" remained stuck in the past. FunctionalHealth was born from the need to provide patients with the same level of scientific rigor in their supplements as they receive in their medical care.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-white overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                    alt="Patient in clinical recovery environment" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-white overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600" 
                    alt="Determination during functional rehabilitation" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="aspect-[2/3] rounded-2xl bg-white overflow-hidden h-full shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1581056399312-60301e72c09b?auto=format&fit=crop&q=80&w=600" 
                  alt="Clinical consultation and physician-patient partnership" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-functional-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Core Principles</h2>
            <p className="text-white/70">Every decision we make is guided by three fundamental pillars.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sunrise-yellow border border-white/20">
                <Microscope size={24} />
              </div>
              <h3 className="text-xl font-bold">Clinical First</h3>
              <p className="text-white/60 text-sm leading-relaxed">We don't follow trends or marketing hype. If the clinical data doesn't support it, we don't build it. Our formulations are rooted in peer-reviewed science.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sunrise-yellow border border-white/20">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold">Absolute Purity</h3>
              <p className="text-white/60 text-sm leading-relaxed">Our products are manufactured in NSF-certified facilities and undergo rigorous third-party testing for heavy metals, contaminants, and potency.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sunrise-yellow border border-white/20">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold">Functional Outcomes</h3>
              <p className="text-white/60 text-sm leading-relaxed">We measure success by real-world outcomes: improved mobility, faster recovery, and the preservation of independence for our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-functional-green">Physician-Led Innovation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our leadership team includes specialists in geriatric medicine, rehabilitation, and metabolic research. This multidisciplinary approach ensures that we consider the whole patient, not just a single symptom.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Dr. Maged Tanios" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-functional-green">Dr. Maged Tanios, MD, MPH, MBA</h4>
                  <p className="text-xs text-clinical-blue uppercase tracking-widest font-bold">Chief Medical Officer</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-serif font-bold text-functional-green">15+</div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Clinical Trials Supported</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-serif font-bold text-functional-green">100%</div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Third-Party Tested</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-serif font-bold text-functional-green">50k+</div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Recoveries Supported</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-serif font-bold text-functional-green">0</div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Artificial Additives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-secondary/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Connect With Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow our journey and stay updated with the latest clinical research, recovery tips, and community stories.
            </p>
            <div className="flex justify-center gap-8">
              {[
                { icon: <Instagram size={24} />, label: "Instagram", href: "#" },
                { icon: <Twitter size={24} />, label: "Twitter", href: "#" },
                { icon: <Linkedin size={24} />, label: "LinkedIn", href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center shadow-sm border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-bold">@FunctionalHealthClinical</p>
          </div>
        </div>
      </section>
    </div>
  );
}
