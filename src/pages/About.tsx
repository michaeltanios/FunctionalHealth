import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Microscope, ShieldCheck, HeartPulse, Users, Instagram, Twitter, Linkedin, Activity, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col text-base md:text-lg">
      {/* About Hero */}
      <section className="relative py-32 md:py-48 bg-warm-sunrise border-b overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <img 
                src="/logo.png" 
                alt="FunctionalHealth Logo" 
                className="h-24 md:h-32 w-auto drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-3">
                <Badge className="bg-functional-green text-white border-none px-6 py-2 text-sm font-bold">Our Mission</Badge>
                <div className="text-sm text-clinical-blue font-bold tracking-widest uppercase">Est. 2024 • Physician Led</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-functional-green leading-[1.1]">
              Bridging the Gap Between <br />
              <span className="text-clinical-blue/70 italic font-semibold">Research and Recovery.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10 max-w-3xl">
              FunctionalHealth was founded by a team of physicians and researchers who saw a critical missing link in patient care: evidence-based nutrition for functional recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full h-16 px-10 bg-functional-green hover:bg-functional-green/90 shadow-xl shadow-functional-green/20 font-bold text-lg">
                <Link to="/product">Start Your Recovery</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 border-clinical-blue text-clinical-blue hover:bg-clinical-blue hover:text-white font-bold text-lg">
                <Link to="/science">Learn How We Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sunrise-yellow/10 border border-sunrise-yellow/20 text-sunrise-yellow text-xs font-bold uppercase tracking-widest">
                <Activity className="w-3 h-3" />
                <span>The Origin</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">The Physician's Perspective</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                In clinical practice, we often see patients struggle after hospitalization or during aging. They lose muscle mass rapidly, their energy levels plummet, and their path back to independence becomes longer and more difficult.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We realized that while medical treatments were advancing, the nutritional support for "functional recovery" remained stuck in the past. FunctionalHealth was born from the need to provide patients with the same level of scientific rigor in their supplements as they receive in their medical care.
              </p>
              <div className="pt-4 border-t border-border/50">
                <blockquote className="text-xl font-serif italic text-clinical-blue leading-relaxed">
                  "Our goal is to restore not just health, but the independence that makes life meaningful."
                </blockquote>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/5] rounded-3xl bg-warm-sunrise/20 overflow-hidden shadow-lg border border-border/50">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" 
                  alt="Compassionate care in a clinical setting" 
                  className="w-full h-full object-cover sepia-[0.1] hover:sepia-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl bg-warm-sunrise/20 overflow-hidden shadow-lg border border-border/50">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinical consultation and physician-patient partnership" 
                  className="w-full h-full object-cover sepia-[0.1] hover:sepia-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Recovery Matters - NEW SECTION */}
      <section className="py-24 bg-pathway border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-sunrise-yellow text-black border-none px-4 py-1 font-bold">For You</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green mb-6">Built For Your Independence</h2>
            <p className="text-lg text-muted-foreground font-medium">
              We understand that recovery isn't just about numbers on a chart—it's about getting back to the things you love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Restore Your Strength",
                desc: "Combat muscle loss and rebuild the physical foundation you need for daily life.",
                icon: <Activity className="text-sunrise-yellow" size={32} />
              },
              {
                title: "Reclaim Your Energy",
                desc: "Support cellular energy production to overcome the fatigue that often follows illness.",
                icon: <HeartPulse className="text-sunrise-yellow" size={32} />
              },
              {
                title: "Return to Independence",
                desc: "Our goal is to help you move from recovery to active living as quickly and safely as possible.",
                icon: <Users className="text-sunrise-yellow" size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-[32px] shadow-xl shadow-black/5 border border-border/50 hover:translate-y-[-4px] transition-all duration-300">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-functional-green mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-functional-green text-white relative overflow-hidden">
        {/* Subtle accent decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sunrise-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Core Principles</h2>
            <p className="text-white/70 text-lg">Every decision we make is guided by three fundamental pillars.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Evidence-Based",
                desc: "We don't follow trends or marketing hype. If the clinical data doesn't support it, we don't build it. Our formulations are rooted in peer-reviewed science.",
                icon: <Microscope size={48} />,
                label: "Clinical First"
              },
              {
                title: "Quality Certified",
                desc: "Our products are manufactured in NSF-certified facilities and undergo rigorous third-party testing for heavy metals, contaminants, and potency.",
                icon: <ShieldCheck size={48} />,
                label: "Absolute Purity"
              },
              {
                title: "Real Results",
                desc: "We measure success by real-world outcomes: improved mobility, faster recovery, and the preservation of independence for our community.",
                icon: <HeartPulse size={48} />,
                label: "Functional Outcomes"
              }
            ].map((pillar, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] overflow-hidden shadow-2xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-10 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-sunrise-yellow/20 flex items-center justify-center text-sunrise-yellow border border-sunrise-yellow/30">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-sunrise-yellow font-bold">{pillar.label}</div>
                    <h3 className="text-2xl font-serif font-bold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">Physician-Led Innovation</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our leadership team includes specialists in geriatric medicine, rehabilitation, and metabolic research. This multidisciplinary approach ensures that we consider the whole patient, not just a single symptom.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "15+", label: "Clinical Trials Supported" },
                  { value: "100%", label: "Third-Party Tested" },
                  { value: "50k+", label: "Recoveries Supported" },
                  { value: "0", label: "Artificial Additives" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-warm-sunrise/30 rounded-3xl border border-sunrise-yellow/10 text-center hover:bg-warm-sunrise/50 transition-colors">
                    <div className="text-4xl md:text-5xl font-serif font-bold text-functional-green mb-2">{stat.value}</div>
                    <p className="text-[10px] md:text-xs text-clinical-blue uppercase font-bold tracking-widest leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-sunrise-yellow/5 rounded-[40px] -rotate-3 scale-105" />
              <Card className="relative border-none shadow-2xl rounded-[40px] overflow-hidden bg-white">
                <CardContent className="p-12 text-center space-y-8">
                  <div className="relative mx-auto w-40 h-40">
                    <div className="absolute inset-0 bg-functional-green/10 rounded-full scale-110 animate-pulse" />
                    <div className="relative w-40 h-40 rounded-full bg-muted overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" 
                        alt="Dr. Maged Tanios" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <blockquote className="text-2xl font-serif italic text-foreground leading-relaxed">
                      "We don't just formulate supplements; we design protocols for independence. Every patient deserves a recovery path built on evidence."
                    </blockquote>
                    <div className="pt-6 border-t border-border/50">
                      <h4 className="text-xl font-bold text-functional-green">Dr. Maged Tanios, MD, MPH, MBA</h4>
                      <p className="text-xs text-clinical-blue uppercase tracking-widest font-bold mt-1">Chief Medical Officer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter Section */}
      <section className="py-24 bg-warm-sunrise/20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sunrise-yellow/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif font-bold text-functional-green">Connect With Us</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Follow our journey and stay updated with the latest clinical research, recovery tips, and community stories.
                  </p>
                </div>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram size={24} />, label: "Instagram", href: "https://instagram.com/functionalhealth" },
                    { icon: <Twitter size={24} />, label: "Twitter", href: "https://twitter.com/functionalhealth" },
                    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://linkedin.com/company/functionalhealth" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md border border-border hover:border-sunrise-yellow hover:text-sunrise-yellow transition-all duration-300 group"
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

              <Card className="rounded-[32px] border-none shadow-2xl bg-white p-10">
                <CardContent className="p-0 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-functional-green/10 flex items-center justify-center text-functional-green mb-2">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-functional-green">Stay Informed</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Receive recovery insights, research summaries, and community updates directly in your inbox.
                    </p>
                  </div>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <Input 
                      placeholder="Enter your email" 
                      className="h-14 rounded-xl bg-muted/30 border-border focus-visible:ring-sunrise-yellow"
                    />
                    <Button className="w-full h-14 rounded-xl bg-functional-green hover:bg-functional-green/90 font-bold text-white shadow-lg shadow-functional-green/20">
                      Join Our Newsletter
                    </Button>
                  </form>
                  <p className="text-[10px] text-center text-muted-foreground italic">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
