import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Microscope, 
  Zap, 
  Dna, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Battery, 
  Brain, 
  Heart, 
  Quote,
  ChevronDown,
  CheckCircle2,
  TrendingDown,
  Stethoscope,
  Mail,
  FlaskConical,
  Info,
  Award,
  HeartPulse
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { useEffect, useState, useRef } from "react";

export default function Science() {
  const [activeTab, setActiveTab] = useState("muscle-loss");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTabs = (tabValue: string) => {
    setActiveTab(tabValue);
    setTimeout(() => {
      tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="flex flex-col text-base md:text-lg">
      {/* Research & Evidence Header */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-warm-sunrise border-b overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <Badge className="bg-functional-green text-white border-none px-6 py-2 text-sm font-bold mx-auto w-fit flex items-center gap-2 shadow-lg shadow-functional-green/10">
                <Microscope size={16} />
                <span className="tracking-widest uppercase">Research & Evidence</span>
              </Badge>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-functional-green leading-[1.1]">
                The science behind <br />
                <span className="text-clinical-blue/70 italic">functional recovery</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Understanding how the body loses — and can regain — strength, energy, and independence through evidence-based nutrition.
            </p>
            <div className="pt-4">
              <Button 
                onClick={() => scrollToTabs("muscle-loss")}
                size="lg" 
                className="rounded-full h-16 px-10 bg-functional-green hover:bg-functional-green/90 shadow-xl shadow-functional-green/20 font-bold text-lg cursor-pointer"
              >
                See the Evidence <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - The Core Science Deep-Dive */}
      <section ref={tabsRef} className="py-24 bg-background relative scroll-mt-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col">
            <div className="flex flex-col items-center mb-16 text-center w-full">
              <div className="max-w-2xl mb-10 space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-functional-green">Evidence-Based Insights</h2>
                <p className="text-muted-foreground">Explore the clinical foundations of functional recovery across multiple domains.</p>
              </div>
              
              <TabsList className="flex flex-row flex-wrap justify-center gap-4 bg-transparent h-auto p-0 w-full">
                {[
                  { value: "muscle-loss", label: "Muscle Health" },
                  { value: "atp-cycle", label: "Energy Metabolism" },
                  { value: "mechanism", label: "Mechanism of Action" },
                  { value: "outcomes", label: "Clinical Outcomes" }
                ].map((tab) => (
                  <TabsTrigger 
                    key={tab.value}
                    value={tab.value} 
                    className="rounded-xl px-8 py-4 bg-white border border-border/60 shadow-sm hover:bg-muted hover:border-border transition-all duration-200 data-[state=active]:bg-functional-green data-[state=active]:text-white data-[state=active]:border-functional-green data-[state=active]:shadow-md font-bold text-sm md:text-base cursor-pointer w-auto flex-none min-w-[180px]"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Muscle Health Tab */}
                <TabsContent value="muscle-loss" className="mt-0 outline-none">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinical-blue/10 border border-clinical-blue/20 text-clinical-blue text-xs font-bold uppercase tracking-widest">
                          <TrendingDown className="w-3 h-3" />
                          <span>The Challenge</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">
                          Muscle loss during illness and aging
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                          <p>
                            Sarcopenia — the progressive loss of muscle mass — begins as early as age 30 and accelerates with illness, hospitalization, and inactivity.<sup>1</sup> Patients can lose up to 5% of muscle mass in just 10 days of bed rest.<sup>2</sup>
                          </p>
                          <p>
                            This isn't just about strength. Muscle loss reduces metabolic function, impairs immune response, slows wound healing, and increases fall risk — creating a cycle of decline that's difficult to reverse without targeted intervention.<sup>3</sup>
                          </p>
                        </div>
                        <div className="pt-4">
                          <Button 
                            onClick={() => scrollToTabs("atp-cycle")}
                            variant="outline" 
                            className="rounded-full border-functional-green text-functional-green hover:bg-functional-green hover:text-white font-bold"
                          >
                            Next: Energy Metabolism <ChevronRight className="ml-2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[
                        { label: "Age 30–40", value: "3–5% loss per decade", width: "30%", color: "bg-functional-green/40", ref: "1" },
                        { label: "Age 50–60", value: "5–8% loss per decade", width: "55%", color: "bg-functional-green/70", ref: "1" },
                        { label: "Post-hospitalization", value: "Up to 5% in 10 days", width: "80%", color: "bg-sunrise-yellow", ref: "2", highlight: true },
                        { label: "Age 70+", value: "10–15% loss per decade", width: "95%", color: "bg-clinical-blue", ref: "1" }
                      ].map((stat, idx) => (
                        <div 
                          key={idx} 
                          className={`p-6 rounded-3xl border transition-all duration-300 shadow-sm space-y-4 ${
                            stat.highlight 
                              ? "bg-white border-sunrise-yellow ring-4 ring-sunrise-yellow/10 scale-[1.02] z-10" 
                              : "bg-white border-border/50"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className={`font-bold text-lg ${stat.highlight ? "text-functional-green" : "text-muted-foreground"}`}>
                              {stat.label}<sup>{stat.ref}</sup>
                            </span>
                            <span className={`font-bold ${stat.highlight ? "text-sunrise-yellow" : "text-functional-green"}`}>{stat.value}</span>
                          </div>
                          <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: stat.width }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className={`h-full rounded-full ${stat.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Energy Metabolism Tab (ATP Cycle) */}
                <TabsContent value="atp-cycle" className="mt-0 outline-none">
                  <div className="space-y-24">
                    {/* Intro & Diagram */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit bg-functional-green/5">
                            <Activity size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Energy Metabolism</span>
                          </Badge>
                          <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">
                            ATP: your body's <br />energy currency
                          </h2>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            Every movement, every heartbeat requires ATP. As we age or recover from illness, mitochondrial efficiency declines, meaning less ATP is available for muscle contraction and cellular repair.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: <Zap size={18} />, label: "Energy Production" },
                            { icon: <Activity size={18} />, label: "Muscle Function" },
                            { icon: <Microscope size={18} />, label: "Cellular Repair" },
                            { icon: <HeartPulse size={18} />, label: "Recovery Support" }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border/50 shadow-sm">
                              <div className="text-functional-green/60">{item.icon}</div>
                              <span className="text-[10px] font-bold text-clinical-blue uppercase tracking-widest">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="w-full aspect-square bg-clinical-blue/5 rounded-[48px] border-2 border-clinical-blue/10 flex flex-col items-center justify-center p-8 shadow-inner relative overflow-hidden">
                          {/* Pulsing Background Glow */}
                          <motion.div 
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-functional-green/10 rounded-full blur-[80px]"
                          />

                          <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                            {/* Simplified ATP Cycle Diagram for Tab */}
                            <g>
                              <motion.circle 
                                cx="200" cy="60" r="40" 
                                fill="currentColor" 
                                className="text-functional-green"
                                animate={{ filter: ["drop-shadow(0 0 0px #2D5A27)", "drop-shadow(0 0 8px #2D5A27)", "drop-shadow(0 0 0px #2D5A27)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <text x="200" y="65" textAnchor="middle" className="fill-white font-bold text-base">ATP</text>
                            </g>
                            <g>
                              <rect x="290" y="160" width="80" height="80" rx="20" fill="currentColor" className="text-clinical-blue/20" />
                              <text x="330" y="205" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">Muscle Work</text>
                            </g>
                            <g>
                              <circle cx="200" cy="340" r="35" fill="currentColor" className="text-functional-green/40" />
                              <text x="200" y="345" textAnchor="middle" className="fill-white font-bold text-[9px]">ADP + Cr</text>
                            </g>
                            <g>
                              <rect x="30" y="160" width="80" height="80" rx="20" fill="currentColor" className="text-clinical-blue/20" />
                              <text x="70" y="205" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">Phospho-Cr</text>
                            </g>
                            {/* Animated Arrows */}
                            <motion.path 
                              d="M 245 80 Q 330 100 330 150" fill="none" stroke="currentColor" strokeWidth="3" className="text-functional-green"
                              strokeDasharray="5, 10" animate={{ strokeDashoffset: [0, -15] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.path 
                              d="M 70 150 Q 70 100 155 80" fill="none" stroke="currentColor" strokeWidth="3" className="text-functional-green"
                              strokeDasharray="5, 10" animate={{ strokeDashoffset: [0, -15] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                          </svg>
                        </div>
                        <p className="mt-6 text-center text-xs font-medium text-muted-foreground italic">
                          The Phosphocreatine Shuttle: Regenerating energy in real-time.
                        </p>
                      </div>
                    </div>

                    {/* Biochemistry Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        {
                          icon: <Zap className="text-functional-green" size={24} />,
                          takeaway: "Fastest energy system",
                          title: "The ATP-CP System",
                          desc: "The body's fastest way to regenerate energy, anaerobic and instantaneous. Critical for sudden movements and standing up.",
                          highlight: false
                        },
                        {
                          icon: <Activity className="text-functional-green" size={24} />,
                          takeaway: "Less fatigue in PT",
                          title: "Metabolic Buffering",
                          desc: "Prevents the accumulation of metabolic byproducts that lead to 'burning' and fatigue during physical therapy.",
                          highlight: true
                        }
                      ].map((card, idx) => (
                        <Card key={idx} className={`border-2 rounded-[32px] overflow-hidden bg-white ${card.highlight ? "border-functional-green/20 shadow-lg" : "border-border/50"}`}>
                          <CardContent className="p-8 space-y-4">
                            <div className="flex justify-between items-center">
                              <div className="w-12 h-12 rounded-xl bg-functional-green/5 flex items-center justify-center text-functional-green">
                                {card.icon}
                              </div>
                              <span className="text-[10px] font-black text-clinical-blue uppercase tracking-widest">{card.takeaway}</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-functional-green">{card.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <Button 
                        onClick={() => scrollToTabs("mechanism")}
                        variant="outline" 
                        className="rounded-full border-functional-green text-functional-green hover:bg-functional-green hover:text-white font-bold"
                      >
                        Next: Mechanism of Action <ChevronRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Mechanism Tab */}
                <TabsContent value="mechanism" className="mt-0 outline-none">
                  <div className="space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                      <Badge className="bg-clinical-blue text-white border-none px-4 py-1 font-bold mx-auto w-fit flex items-center gap-2">
                        <ShieldCheck size={16} />
                        <span className="tracking-widest uppercase">Mechanism of Action</span>
                      </Badge>
                      <h2 className="text-4xl font-serif font-bold text-functional-green">How creatine restores cellular energy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        {
                          number: "01",
                          title: "Phosphocreatine Storage",
                          icon: <Battery className="text-functional-green" size={32} />,
                          description: "Creatine is stored in muscles as phosphocreatine — a high-energy reserve that can rapidly regenerate ATP when energy demand spikes."
                        },
                        {
                          number: "02",
                          title: "Rapid ATP Regeneration",
                          icon: <Zap className="text-functional-green" size={32} />,
                          description: "When muscles contract, ATP is consumed. Phosphocreatine donates its phosphate group to replenish ATP within seconds — faster than any other metabolic pathway."
                        },
                        {
                          number: "03",
                          title: "Enhanced Recovery",
                          icon: <Heart className="text-functional-green" size={32} />,
                          description: "With larger phosphocreatine reserves, muscles recover faster between efforts. This is critical for rehabilitation, daily activities, and maintaining functional independence."
                        },
                        {
                          number: "04",
                          title: "Neuroprotective Benefits",
                          icon: <Brain className="text-functional-green" size={32} />,
                          description: "Emerging research shows creatine also supports brain energy metabolism, potentially protecting cognitive function during aging and recovery."
                        }
                      ].map((step) => (
                        <Card key={step.number} className="group border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-[32px] overflow-hidden bg-white">
                          <CardContent className="p-10 space-y-6">
                            <div className="flex justify-between items-start">
                              <div className="w-16 h-16 rounded-2xl bg-functional-green/5 flex items-center justify-center text-functional-green group-hover:bg-functional-green group-hover:text-white transition-all duration-300">
                                {step.icon}
                              </div>
                              <div className="text-4xl font-serif font-bold text-functional-green/20 group-hover:text-functional-green transition-colors tabular-nums">
                                {step.number}
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h3 className="text-2xl font-serif font-bold text-functional-green">{step.title}</h3>
                              <p className="text-muted-foreground leading-relaxed text-base">{step.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <Button 
                        onClick={() => scrollToTabs("outcomes")}
                        variant="outline" 
                        className="rounded-full border-functional-green text-functional-green hover:bg-functional-green hover:text-white font-bold"
                      >
                        Next: Clinical Outcomes <ChevronRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Outcomes Tab */}
                <TabsContent value="outcomes" className="mt-0 outline-none">
                  <div className="space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                      <Badge className="bg-sunrise-yellow text-black border-none px-4 py-1 font-bold mx-auto w-fit">Real World Impact</Badge>
                      <h2 className="text-4xl font-serif font-bold text-functional-green">What This Means For Your Recovery</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          title: "Faster Return to Activity",
                          desc: "Reduce the time it takes to get back on your feet after a period of bed rest or illness.",
                          icon: <Activity className="text-functional-green" size={32} />
                        },
                        {
                          title: "Preserved Muscle Mass",
                          desc: "Minimize the rapid muscle wasting that occurs during hospitalization and recovery.",
                          icon: <ShieldCheck className="text-functional-green" size={32} />
                        },
                        {
                          title: "Improved Daily Living",
                          desc: "Gain the strength and energy needed for independent living, from climbing stairs to grocery shopping.",
                          icon: <CheckCircle2 className="text-functional-green" size={32} />
                        }
                      ].map((item, i) => (
                        <div key={i} className="p-10 bg-white rounded-[40px] shadow-xl shadow-black/5 border border-border/50 text-center space-y-6">
                          <div className="w-16 h-16 rounded-2xl bg-functional-green/10 flex items-center justify-center mx-auto text-functional-green">
                            {item.icon}
                          </div>
                          <h3 className="text-2xl font-serif font-bold text-functional-green">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Summary Box Integration */}
                    <div className="max-w-4xl mx-auto p-12 bg-functional-green text-white rounded-[48px] shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                            <Info size={32} className="text-sunrise-yellow" />
                          </div>
                          <h3 className="text-3xl font-serif font-bold">The Recovery Advantage</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            "More energy for physical therapy sessions",
                            "Reduced muscle fatigue during daily tasks",
                            "Faster recovery between periods of activity",
                            "Support for both physical and cognitive drive"
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 size={18} className="text-sunrise-yellow shrink-0" />
                              <span className="text-sm font-bold opacity-90">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Our Clinical Research */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-2/5 sticky top-24 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">Our Clinical Research</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are currently conducting and supporting several independent trials focused on functional outcomes.
                </p>
              </div>
              
              <Card className="bg-functional-green text-white rounded-[32px] border-none shadow-2xl overflow-hidden">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 text-white border-none font-bold">Current Trial</Badge>
                    <a 
                      href="https://clinicaltrials.gov/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-1 hover:text-white transition-colors"
                    >
                      ClinicalTrials.gov <ChevronRight size={10} />
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif font-bold leading-tight">RECOVER-ICU Trial</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Randomized, double-Blind, placebo-controlled trial of Enteral Creatine supplementation to imprOve functional recoVERy in mechanically ventilated ICU Patients, Phase II trial.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold text-sunrise-yellow uppercase tracking-widest">
                      <Stethoscope size={14} />
                      <span>Phase II • Multi-Center</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:w-3/5 space-y-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-functional-green">Evidence Hierarchy</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We prioritize randomized controlled trials (RCTs) and systematic reviews. Our formulations are not based on "emerging" or "anecdotal" evidence, but on established physiological principles and proven clinical outcomes.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="rounded-3xl border border-border/50 shadow-sm bg-white p-8 space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-functional-green/5 flex items-center justify-center text-functional-green">
                      <Microscope size={24} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-functional-green">Purity Testing</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">Every batch is third-party tested for heavy metals, contaminants, and label accuracy.</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <a 
                        href="https://www.creavitalis.com/en/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-[10px] font-bold text-clinical-blue uppercase tracking-widest hover:bg-clinical-blue hover:text-white transition-all"
                      >
                        Partner: Creavitalis® <ChevronRight size={10} />
                      </a>
                    </div>
                  </Card>

                  <Card className="rounded-3xl border border-border/50 shadow-sm bg-white p-8 space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-functional-green/5 flex items-center justify-center text-functional-green">
                      <Zap size={24} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-functional-green">Bioavailability</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">We use micronized forms and specific delivery systems to ensure maximum absorption.</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-functional-green uppercase tracking-widest">
                        <CheckCircle2 size={12} />
                        <span>Optimized Absorption</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <Card className="bg-functional-green rounded-[40px] border-none shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <CardContent className="p-12 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                        <Mail size={28} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-3xl font-serif font-bold text-white">Research Library</h3>
                        <p className="text-white/80 text-base leading-relaxed">
                          Access our full library of white papers, clinical summaries, and patient-friendly research guides.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full h-14 rounded-xl bg-white text-functional-green hover:bg-sunrise-yellow font-bold text-lg shadow-xl">
                        Professional Portal <ArrowRight size={20} className="ml-2" />
                      </Button>
                      <p className="text-xs text-center text-white/60 italic">
                        Patients: explore our simplified research summaries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific References Section */}
      <section className="py-24 bg-warm-sunrise/20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="references" className="border-none">
                <AccordionTrigger className="hover:no-underline py-0">
                  <div className="flex items-center gap-4 text-clinical-blue group">
                    <div className="w-10 h-10 rounded-full bg-clinical-blue/10 flex items-center justify-center group-hover:bg-clinical-blue group-hover:text-white transition-colors">
                      <ChevronDown className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Sources & Citations</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-8">
                  <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground leading-relaxed pl-14">
                    {[
                      { id: 1, text: "Larsson L, et al. (2019). Sarcopenia: Aging-Related Loss of Muscle Mass and Function. Physiol Rev, 99(1): 427–511." },
                      { id: 2, text: "Paddon-Jones D, et al. (2004). Muscle loss in the elderly: Cup of tea and a toast? Nutr Clin Pract, 19(2): 128–139." },
                      { id: 3, text: "Argilés JM, et al. (2016). Sarcopenia: a molecule-to-bedside approach. J Am Med Dir Assoc, 17(9): 784–806." },
                      { id: 4, text: "Rawson ES, Volek JS. (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. J Strength Cond Res, 17(4): 822–831." },
                      { id: 5, text: "Kreider RB, et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr, 14: 18." }
                    ].map((ref) => (
                      <div key={ref.id} className="flex gap-4">
                        <span className="font-bold text-functional-green shrink-0">{ref.id}.</span>
                        <p>{ref.text}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
