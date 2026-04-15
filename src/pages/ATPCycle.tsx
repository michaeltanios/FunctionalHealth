import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Microscope, 
  HeartPulse, 
  ChevronRight,
  ChevronDown,
  Info,
  CheckCircle2,
  Stethoscope,
  Award,
  FlaskConical
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function ATPCycle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col text-base md:text-lg">
      {/* Breadcrumb & Hero */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-warm-sunrise/30 relative overflow-hidden">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-clinical-blue/60 mb-8">
            <Link to="/science" className="hover:text-clinical-blue transition-colors">Science</Link>
            <ChevronRight size={12} />
            <span className="text-clinical-blue/40">Energy Metabolism</span>
            <ChevronRight size={12} />
            <span className="text-clinical-blue">ATP Cycle</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit bg-functional-green/5">
              <Activity size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Energy Metabolism</span>
            </Badge>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-functional-green leading-[1.1]">
                ATP: your body's <br />
                <span className="text-clinical-blue/70 italic">energy currency</span>
              </h1>
              <p className="text-2xl md:text-3xl font-serif text-functional-green/80 leading-tight">
                Every movement, every heartbeat requires ATP.
              </p>
            </div>
            <div className="max-w-2xl pt-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we age or recover from illness, mitochondrial efficiency declines. This means less ATP is available for muscle contraction and cellular repair — precisely when your body needs it most.<sup>2,3</sup>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Links / Icon Bar */}
      <section className="py-8 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: <Zap size={18} />, label: "Energy Production", href: "#atp-cp" },
              { icon: <Activity size={18} />, label: "Muscle Function", href: "#metabolic-buffering" },
              { icon: <Microscope size={18} />, label: "Cellular Repair", href: "#mitochondrial-support" },
              { icon: <HeartPulse size={18} />, label: "Recovery Support", href: "#neuro-metabolic" }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-border/50 shadow-sm hover:shadow-md hover:border-functional-green/30 transition-all group"
              >
                <div className="text-functional-green/60 group-hover:text-functional-green transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-clinical-blue uppercase tracking-widest">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Gradient Transition */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-sunrise/10 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-serif font-bold text-functional-green">The Phosphocreatine Shuttle</h2>
            <p className="text-muted-foreground">Visualizing how creatine regenerates cellular energy in real-time.</p>
          </div>

          <div className="relative max-w-[700px] mx-auto group">
            <div className="w-full aspect-square bg-clinical-blue/5 rounded-[60px] border-2 border-clinical-blue/10 flex flex-col items-center justify-center p-12 shadow-inner relative overflow-hidden">
              {/* Pulsing Background Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-functional-green/10 rounded-full blur-[100px]"
              />

              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Nodes */}
                {/* ATP (Top) */}
                <g>
                  <motion.circle 
                    cx="200" cy="60" r="45" 
                    fill="currentColor" 
                    className="text-functional-green"
                    animate={{ filter: ["drop-shadow(0 0 0px #2D5A27)", "drop-shadow(0 0 10px #2D5A27)", "drop-shadow(0 0 0px #2D5A27)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <text x="200" y="65" textAnchor="middle" className="fill-white font-bold text-lg">ATP</text>
                </g>

                {/* Muscle Contraction (Right) */}
                <g>
                  <rect x="290" y="160" width="80" height="80" rx="24" fill="currentColor" className="text-clinical-blue/20" />
                  <text x="330" y="195" textAnchor="middle" className="fill-clinical-blue font-bold text-[11px]">Muscle</text>
                  <text x="330" y="212" textAnchor="middle" className="fill-clinical-blue font-bold text-[11px]">Work</text>
                </g>

                {/* ADP + Creatine (Bottom) */}
                <g>
                  <circle cx="200" cy="340" r="40" fill="currentColor" className="text-functional-green/40" />
                  <text x="200" y="338" textAnchor="middle" className="fill-white font-bold text-[10px]">ADP +</text>
                  <text x="200" y="352" textAnchor="middle" className="fill-white font-bold text-[10px]">Creatine</text>
                </g>

                {/* Phosphocreatine (Left) */}
                <g>
                  <rect x="30" y="160" width="80" height="80" rx="24" fill="currentColor" className="text-clinical-blue/20" />
                  <text x="70" y="205" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">Phospho-</text>
                  <text x="70" y="220" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">creatine</text>
                </g>

                {/* Animated Arrows */}
                {/* ATP -> Muscle */}
                <g>
                  <path 
                    id="path1"
                    d="M 245 80 Q 330 100 330 150" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green/30" 
                  />
                  <motion.path 
                    d="M 245 80 Q 330 100 330 150" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green"
                    strokeDasharray="10, 20"
                    animate={{ strokeDashoffset: [0, -30] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <text x="315" y="105" className="fill-functional-green font-black text-[12px] rotate-[25deg] origin-[245px_80px]">ENERGY USED</text>
                </g>

                {/* Muscle -> ADP */}
                <g>
                  <path 
                    d="M 330 250 Q 330 300 245 320" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green/30" 
                  />
                  <motion.path 
                    d="M 330 250 Q 330 300 245 320" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green"
                    strokeDasharray="10, 20"
                    animate={{ strokeDashoffset: [0, -30] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* ADP -> PCr */}
                <g>
                  <path 
                    d="M 155 320 Q 70 300 70 250" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green/30" 
                  />
                  <motion.path 
                    d="M 155 320 Q 70 300 70 250" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green"
                    strokeDasharray="10, 20"
                    animate={{ strokeDashoffset: [0, -30] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <text x="140" y="265" textAnchor="middle" className="fill-functional-green font-black text-[12px]">CREATINE KINASE</text>
                </g>

                {/* PCr -> ATP */}
                <g>
                  <path 
                    d="M 70 150 Q 70 100 155 80" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green/30" 
                  />
                  <motion.path 
                    d="M 70 150 Q 70 100 155 80" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    className="text-functional-green"
                    strokeDasharray="10, 20"
                    animate={{ strokeDashoffset: [0, -30] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <text x="65" y="105" className="fill-functional-green font-black text-[12px] -rotate-[25deg] origin-[70px_150px]">ATP REGENERATED</text>
                </g>
              </svg>
            </div>
            <p className="mt-8 text-center text-sm font-medium text-muted-foreground italic">
              This is how creatine helps your muscles regenerate energy — and why supplementation matters for recovery.
            </p>
          </div>
        </div>
      </section>

      {/* The Biochemistry of Recovery Section */}
      <section className="py-24 bg-pathway relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <Badge className="bg-functional-green text-white border-none px-4 py-1 font-bold mx-auto w-fit flex items-center gap-2">
              <FlaskConical size={16} />
              <span className="tracking-widest uppercase">Biochemistry of Recovery</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">
              Metabolic pathways for <br />functional strength
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: "atp-cp",
                icon: <Zap className="text-functional-green" size={28} />,
                takeaway: "Your fastest energy system",
                title: "The ATP-CP System",
                desc: "The ATP-CP (Adenosine Triphosphate-Creatine Phosphate) system is the body's fastest way to regenerate energy. Unlike oxidative phosphorylation (which requires oxygen and time), the CP system is anaerobic and instantaneous.<sup>2,4</sup>",
                soWhat: "When you stand up from a chair or perform a sudden movement, your muscles rely almost exclusively on this system for the first 10-15 seconds of effort."
              },
              {
                id: "metabolic-buffering",
                icon: <Activity className="text-functional-green" size={28} />,
                takeaway: "Less fatigue during PT sessions",
                title: "Metabolic Buffering",
                desc: "Creatine doesn't just provide energy; it acts as a metabolic buffer. By facilitating the rapid recycling of ADP back into ATP, it prevents the accumulation of metabolic byproducts that lead to muscle fatigue and 'burning.'<sup>1,4</sup>",
                soWhat: "In clinical recovery, this buffering effect is crucial for allowing patients to complete their physical therapy sessions with less perceived exertion and faster inter-set recovery.",
                highlight: true
              },
              {
                id: "mitochondrial-support",
                icon: <Microscope className="text-functional-green" size={28} />,
                takeaway: "Bypassing energy bottlenecks",
                title: "Mitochondrial Support",
                desc: "While creatine operates in the cytosol, it is intimately linked to mitochondrial health. The 'shuttle' mechanism moves energy from the mitochondria to the muscle fibers.<sup>1,5</sup>",
                soWhat: "Supplementation helps bypass mitochondrial bottlenecks that occur during aging or chronic illness, ensuring that the energy produced actually reaches the structural proteins of the muscle.",
                highlight: true
              },
              {
                id: "neuro-metabolic",
                icon: <HeartPulse className="text-functional-green" size={28} />,
                takeaway: "Fueling the neurological drive",
                title: "Neuro-Metabolic Protection",
                desc: "The brain is the most energy-demanding organ in the body. Research indicates that the phosphocreatine system is vital for maintaining cognitive function during periods of metabolic stress.<sup>3</sup>",
                soWhat: "For recovery patients, this means supporting not just physical strength, but the neurological drive required for motor control and rehabilitation."
              }
            ].map((card, idx) => (
              <Card 
                key={idx} 
                id={card.id}
                className={`group border-2 transition-all duration-500 rounded-[40px] overflow-hidden bg-white ${
                  card.highlight 
                    ? "border-functional-green/20 shadow-xl ring-4 ring-functional-green/5" 
                    : "border-border/50 shadow-sm hover:border-functional-green/30"
                }`}
              >
                <CardContent className="p-12 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      card.highlight ? "bg-functional-green text-white" : "bg-functional-green/5 text-functional-green"
                    }`}>
                      {card.icon}
                    </div>
                    {card.highlight && (
                      <Badge className="bg-sunrise-yellow text-black border-none font-bold">Key for Recovery</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-black text-clinical-blue uppercase tracking-widest">{card.takeaway}</p>
                      <h3 className="text-3xl font-serif font-bold text-functional-green">{card.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: card.desc }} />
                    
                    <div className={`p-6 rounded-2xl border-l-4 ${
                      card.highlight 
                        ? "bg-functional-green/5 border-l-functional-green" 
                        : "bg-muted/30 border-l-muted-foreground/20"
                    }`}>
                      <p className="text-sm font-bold text-foreground leading-relaxed italic">
                        {card.soWhat}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Box */}
          <div className="mt-20 max-w-4xl mx-auto p-12 bg-functional-green text-white rounded-[48px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Info size={32} className="text-sunrise-yellow" />
                </div>
                <h3 className="text-3xl font-serif font-bold">What this means for your recovery</h3>
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
      </section>

      {/* Scientific References Section */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="references" className="border-none">
                <AccordionTrigger className="hover:no-underline py-0 group">
                  <div className="flex items-center gap-4 text-clinical-blue">
                    <div className="w-12 h-12 rounded-full bg-clinical-blue/5 flex items-center justify-center group-hover:bg-clinical-blue group-hover:text-white transition-all">
                      <ChevronDown className="w-6 h-6 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Evidence-Based Science</p>
                      <h2 className="text-xl font-serif font-bold">Sources & Citations (5)</h2>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-12">
                  <p className="text-sm text-muted-foreground mb-8 italic">Our science is backed by peer-reviewed research. Click to view sources.</p>
                  <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground leading-relaxed pl-16">
                    {[
                      { id: 1, text: "Wallimann T, et al. (1992). Intracellular compartmentation, structure and function of creatine kinase isoenzymes in tissues with high and fluctuating energy demands: the 'phosphocreatine circuit' for cellular energy homeostasis. Biochem J, 281(Pt 1): 21–40." },
                      { id: 2, text: "Kreider RB, et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr, 14: 18." },
                      { id: 3, text: "Gualano B, et al. (2012). Creatine supplementation in the aging population: effects on skeletal muscle, bone and brain. Amino Acids, 43(1): 51–62." },
                      { id: 4, text: "Persky AM, Brazeau GA. (2001). Clinical pharmacology of the dietary supplement creatine monohydrate. Pharmacol Rev, 53(2): 161–176." },
                      { id: 5, text: "Bessman SP, Carpenter CL. (1985). The creatine-creatine phosphate energy shuttle. Annu Rev Biochem, 54: 831–862." }
                    ].map((ref) => (
                      <div key={ref.id} className="flex gap-6 group">
                        <span className="font-black text-functional-green shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">{ref.id}.</span>
                        <p className="group-hover:text-foreground transition-colors">{ref.text}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-pathway border-t relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green">Evidence-based recovery starts here.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FunctionalHealth Clinical Creatine is formulated to maximize these metabolic pathways, providing the energy foundation your body needs to rebuild.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button asChild size="lg" className="rounded-full h-16 px-12 bg-functional-green hover:bg-functional-green/90 shadow-xl shadow-functional-green/20 font-bold text-lg">
                <Link to="/product">Shop Clinical Creatine</Link>
              </Button>
              <Link to="/science" className="text-clinical-blue font-bold hover:underline flex items-center gap-2 group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Science
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <Stethoscope size={14} /> Physician Formulated
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <Award size={14} /> NSF Certified
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} /> 3rd-Party Tested
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-xl font-serif font-bold text-functional-green">Continue Learning</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/science" className="px-6 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-sm font-bold text-clinical-blue">
                Sarcopenia & Aging
              </Link>
              <Link to="/education" className="px-6 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-sm font-bold text-clinical-blue">
                Patient Education
              </Link>
              <Link to="/about" className="px-6 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-sm font-bold text-clinical-blue">
                Our Clinical Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
