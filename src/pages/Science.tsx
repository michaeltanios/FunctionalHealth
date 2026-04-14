import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Zap, Dna, Activity, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export default function Science() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Research & Evidence Header */}
      <section className="pt-32 pb-24 bg-warm-sunrise border-b">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-10">
            <img 
              src="/logo.png" 
              alt="FunctionalHealth Logo" 
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <Badge variant="outline" className="rounded-full px-6 py-2 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <Microscope size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Research & Evidence</span>
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-functional-green leading-tight">
              The science behind <br />functional recovery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding how the body loses — and can regain — strength, energy, and independence through evidence-based nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="rounded-full px-4 py-1 border-clinical-blue/20 text-clinical-blue flex items-center gap-2 w-fit bg-clinical-blue/5">
                  <Activity size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">The Problem</span>
                </Badge>
                <h2 className="text-3xl font-serif font-bold text-functional-green">
                  Muscle loss during illness and aging
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Sarcopenia — the progressive loss of muscle mass — begins as early as age 30 and accelerates with illness, hospitalization, and inactivity.<sup>1</sup> Patients can lose up to 5% of muscle mass in just 10 days of bed rest.<sup>2</sup>
                  </p>
                  <p>
                    This isn't just about strength. Muscle loss reduces metabolic function, impairs immune response, slows wound healing, and increases fall risk — creating a cycle of decline that's difficult to reverse without targeted intervention.<sup>3</sup>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: "Age 30–40", value: "3–5% loss per decade", width: "30%", ref: "1" },
                { label: "Age 50–60", value: "5–8% loss per decade", width: "50%", ref: "1" },
                { label: "Post-hospitalization", value: "Up to 5% in 10 days", width: "75%", ref: "2" },
                { label: "Age 70+", value: "10–15% loss per decade", width: "90%", ref: "1" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-border/50 space-y-3 shadow-sm">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-functional-green">{stat.label}<sup>{stat.ref}</sup></span>
                    <span className="text-muted-foreground">{stat.value}</span>
                  </div>
                  <div className="h-2 w-full bg-border/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-functional-green/60 rounded-full transition-all duration-1000" 
                      style={{ width: stat.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ATP & Creatine Section */}
      <section className="py-20 bg-functional-green text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The ATP Cycle: Cellular Fuel</h2>
            <p className="text-white/70 text-lg mb-8">
              Every movement, from standing up to breathing, requires Adenosine Triphosphate (ATP). Creatine acts as a rapid-response reservoir for ATP regeneration.
            </p>
            <Button asChild className="rounded-full bg-white text-functional-green hover:bg-sunrise-yellow border-none transition-colors">
              <Link to="/science/atp-cycle">Explore the Phosphocreatine Shuttle</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Zap className="text-sunrise-yellow" size={32} />
              </div>
              <h3 className="text-xl font-bold">Energy Demand</h3>
              <p className="text-white/60 text-sm">During activity, ATP is broken down into ADP, releasing energy but leaving the cell "empty."</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Dna className="text-sunrise-yellow" size={32} />
              </div>
              <h3 className="text-xl font-bold">Creatine Phosphate</h3>
              <p className="text-white/60 text-sm">Creatine donates a phosphate molecule to ADP, instantly turning it back into functional ATP.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Activity className="text-sunrise-yellow" size={32} />
              </div>
              <h3 className="text-xl font-bold">Functional Output</h3>
              <p className="text-white/60 text-sm">This rapid recycling allows for sustained muscle contraction and improved mobility.</p>
            </div>
          </div>

          <div className="mt-20 p-8 bg-white/5 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-white/80 italic">
              "In clinical populations, creatine supplementation has been shown to increase muscle strength by up to 15% and improve functional performance in activities of daily living."
            </p>
            <p className="text-xs font-bold mt-4 text-white/40 uppercase tracking-widest">— Meta-analysis of Clinical Recovery Trials</p>
          </div>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sunrise-yellow rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sunrise-yellow rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Mechanism of Action Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-clinical-blue/20 text-clinical-blue flex items-center gap-2 w-fit mx-auto bg-clinical-blue/5">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Mechanism of Action</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green">
              How creatine restores cellular energy
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: "01",
                title: "Phosphocreatine Storage",
                description: "Creatine is stored in muscles as phosphocreatine — a high-energy reserve that can rapidly regenerate ATP when energy demand spikes."
              },
              {
                number: "02",
                title: "Rapid ATP Regeneration",
                description: "When muscles contract, ATP is consumed. Phosphocreatine donates its phosphate group to replenish ATP within seconds — faster than any other metabolic pathway."
              },
              {
                number: "03",
                title: "Enhanced Recovery",
                description: "With larger phosphocreatine reserves, muscles recover faster between efforts. This is critical for rehabilitation, daily activities, and maintaining functional independence."
              },
              {
                number: "04",
                title: "Neuroprotective Benefits",
                description: "Emerging research shows creatine also supports brain energy metabolism, potentially protecting cognitive function during aging and recovery."
              }
            ].map((step) => (
              <Card key={step.number} className="group border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-functional-green/10 group-hover:text-functional-green/20 transition-colors shrink-0 tabular-nums">
                    {step.number}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-functional-green">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clinical Research */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-3xl font-serif font-bold mb-6">Our Clinical Research</h2>
              <p className="text-muted-foreground mb-8">
                We are currently conducting and supporting several independent trials focused on functional outcomes.
              </p>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border bg-secondary/50 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-functional-green uppercase tracking-widest">Current Trial</p>
                    <a 
                      href="https://clinicaltrials.gov/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-clinical-blue uppercase tracking-widest flex items-center gap-1 hover:text-functional-green transition-colors"
                    >
                      ClinicalTrials.gov <ChevronRight size={10} />
                    </a>
                  </div>
                  <p className="text-sm font-bold text-foreground leading-relaxed">
                    RECOVER-ICU: Randomized, double-Blind, placebo-controlled trial of Enteral Creatine supplementation to imprOve functional recoVERy in mechanically ventilated ICU Patients, Phase II trial.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold">Evidence Hierarchy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize randomized controlled trials (RCTs) and systematic reviews. Our formulations are not based on "emerging" or "anecdotal" evidence, but on established physiological principles and proven clinical outcomes.
                </p>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Microscope size={18} className="text-muted-foreground/50" /> Purity Testing
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">Every batch is third-party tested for heavy metals, contaminants, and label accuracy.</p>
                    <a 
                      href="https://www.creavitalis.com/en/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:underline"
                    >
                      Our Partner: Creavitalis® <ChevronRight size={10} />
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Zap size={18} className="text-muted-foreground/50" /> Bioavailability
                    </h4>
                    <p className="text-sm text-muted-foreground">We use micronized forms and specific delivery systems to ensure maximum absorption.</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-secondary/50 border border-border shadow-none">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-4 text-functional-green">Access Our Research Library</h3>
                  <p className="text-foreground/80 text-sm mb-6">
                    Are you a healthcare professional? Access our full library of white papers and clinical summaries.
                  </p>
                  <Button variant="outline" className="rounded-full">
                    Professional Portal <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Scientific References Section */}
      <section className="py-20 bg-secondary/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-clinical-blue mb-8">Scientific References</h2>
            <div className="grid grid-cols-1 gap-4 text-[11px] text-foreground/70 leading-relaxed">
              <p>
                1. Larsson L, et al. (2019). Sarcopenia: Aging-Related Loss of Muscle Mass and Function. <span className="italic">Physiol Rev</span>, 99(1): 427–511.
              </p>
              <p>
                2. Paddon-Jones D, et al. (2004). Muscle loss in the elderly: Cup of tea and a toast? <span className="italic">Nutr Clin Pract</span>, 19(2): 128–139.
              </p>
              <p>
                3. Argilés JM, et al. (2016). Sarcopenia: a molecule-to-bedside approach. <span className="italic">J Am Med Dir Assoc</span>, 17(9): 784–806.
              </p>
              <p>
                4. Rawson ES, Volek JS. (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. <span className="italic">J Strength Cond Res</span>, 17(4): 822–831.
              </p>
              <p>
                5. Kreider RB, et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. <span className="italic">J Int Soc Sports Nutr</span>, 14: 18.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
