import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Activity, ShieldCheck, Microscope, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ATPCycle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <Link to="/science" className="inline-flex items-center gap-2 text-sm font-bold text-clinical-blue mb-6 hover:translate-x-1 transition-transform">
            <ArrowLeft size={16} /> Back to Science
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-warm-sunrise">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <Activity size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Energy Metabolism</span>
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-functional-green leading-tight">
              ATP: your body's <br />energy currency
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Every movement, every heartbeat, every cellular repair process requires adenosine triphosphate (ATP). Your body produces and uses approximately its own weight in ATP every single day.<sup>1</sup>
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              As we age, mitochondrial efficiency declines. This means less ATP is available for muscle contraction, tissue repair, and recovery — precisely when the body needs it most.<sup>2,3</sup>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="flex flex-col items-center gap-2">
                <Zap className="text-functional-green/60" size={24} />
                <span className="text-[10px] font-bold text-functional-green uppercase tracking-wider">Energy Production</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Activity className="text-functional-green/60" size={24} />
                <span className="text-[10px] font-bold text-functional-green uppercase tracking-wider">Muscle Function</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Microscope className="text-functional-green/60" size={24} />
                <span className="text-[10px] font-bold text-functional-green uppercase tracking-wider">Cellular Repair</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <HeartPulse className="text-functional-green/60" size={24} />
                <span className="text-[10px] font-bold text-functional-green uppercase tracking-wider">Recovery Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative aspect-square max-w-[600px] mx-auto w-full">
            <div className="w-full h-full bg-pathway/30 rounded-[60px] border border-functional-green/10 flex items-center justify-center p-8 shadow-inner">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Nodes */}
                {/* ATP (Top) */}
                <g>
                  <circle cx="200" cy="60" r="40" fill="currentColor" className="text-functional-green" />
                  <text x="200" y="65" textAnchor="middle" className="fill-white font-bold text-sm">ATP</text>
                </g>

                {/* Muscle Contraction (Right) */}
                <g>
                  <rect x="290" y="160" width="80" height="80" rx="20" fill="currentColor" className="text-clinical-blue/10" />
                  <text x="330" y="195" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">Muscle</text>
                  <text x="330" y="210" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">Contraction</text>
                </g>

                {/* ADP + Creatine (Bottom) */}
                <g>
                  <circle cx="200" cy="340" r="40" fill="currentColor" className="text-functional-green/60" />
                  <text x="200" y="338" textAnchor="middle" className="fill-white font-bold text-[10px]">ADP +</text>
                  <text x="200" y="352" textAnchor="middle" className="fill-white font-bold text-[10px]">Creatine</text>
                </g>

                {/* Phosphocreatine (Left) */}
                <g>
                  <rect x="30" y="160" width="80" height="80" rx="20" fill="currentColor" className="text-clinical-blue/10" />
                  <text x="70" y="205" textAnchor="middle" className="fill-clinical-blue font-bold text-[10px]">Phosphocreatine</text>
                </g>

                {/* Arrows with Labels */}
                {/* ATP -> Muscle */}
                <g>
                  <path d="M 245 80 Q 330 100 330 150" fill="none" stroke="currentColor" strokeWidth="3" className="text-functional-green/20" />
                  <polygon points="330,150 335,140 325,140" fill="currentColor" className="text-functional-green/20" />
                  <text x="310" y="100" className="fill-functional-green font-bold text-[10px] rotate-[25deg] origin-[245px_80px]">Energy used</text>
                </g>

                {/* Muscle -> ADP */}
                <g>
                  <path d="M 330 250 Q 330 300 245 320" fill="none" stroke="currentColor" strokeWidth="3" className="text-functional-green/20" />
                  <polygon points="245,320 255,315 255,325" fill="currentColor" className="text-functional-green/20" />
                </g>

                {/* ADP -> PCr */}
                <g>
                  <path d="M 155 320 Q 70 300 70 250" fill="none" stroke="currentColor" strokeWidth="3" className="text-functional-green/20" />
                  <polygon points="70,250 65,260 75,260" fill="currentColor" className="text-functional-green/20" />
                  <text x="140" y="260" textAnchor="middle" className="fill-functional-green font-bold text-[10px]">Creatine Kinase</text>
                </g>

                {/* PCr -> ATP */}
                <g>
                  <path d="M 70 150 Q 70 100 155 80" fill="none" stroke="currentColor" strokeWidth="3" className="text-functional-green/20" />
                  <polygon points="155,80 145,85 145,75" fill="currentColor" className="text-functional-green/20" />
                  <text x="60" y="100" className="fill-functional-green font-bold text-[10px] -rotate-[25deg] origin-[70px_150px]">ATP Regenerated</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Scientific Explanation */}
      <section className="py-24 bg-pathway">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif font-bold text-functional-green">The Biochemistry of Recovery</h2>
              <p className="text-muted-foreground">A deeper look at the metabolic pathways that drive functional strength.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border">
                  <Zap className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-functional-green">The ATP-CP System</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The ATP-CP (Adenosine Triphosphate-Creatine Phosphate) system is the body's fastest way to regenerate energy. Unlike oxidative phosphorylation (which requires oxygen and time), the CP system is anaerobic and instantaneous.<sup>2,4</sup>
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  When you stand up from a chair or perform a sudden movement, your muscles rely almost exclusively on this system for the first 10-15 seconds of effort.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border">
                  <Activity className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-functional-green">Metabolic Buffering</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Creatine doesn't just provide energy; it acts as a metabolic buffer. By facilitating the rapid recycling of ADP back into ATP, it prevents the accumulation of metabolic byproducts that lead to muscle fatigue and "burning."<sup>1,4</sup>
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  In clinical recovery, this buffering effect is crucial for allowing patients to complete their physical therapy sessions with less perceived exertion and faster inter-set recovery.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border">
                  <Microscope className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-functional-green">Mitochondrial Support</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  While creatine operates in the cytosol, it is intimately linked to mitochondrial health. The "shuttle" mechanism moves energy from the mitochondria to the muscle fibers.<sup>1,5</sup>
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Supplementation helps bypass mitochondrial bottlenecks that occur during aging or chronic illness, ensuring that the energy produced actually reaches the structural proteins of the muscle.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border">
                  <ShieldCheck className="text-functional-green" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-functional-green">Neuro-Metabolic Protection</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The brain is the most energy-demanding organ in the body. Research indicates that the phosphocreatine system is vital for maintaining cognitive function during periods of metabolic stress.<sup>3</sup>
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  For recovery patients, this means supporting not just physical strength, but the neurological drive required for motor control and rehabilitation.
                </p>
              </div>
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
                1. Wallimann T, et al. (1992). Intracellular compartmentation, structure and function of creatine kinase isoenzymes in tissues with high and fluctuating energy demands: the 'phosphocreatine circuit' for cellular energy homeostasis. <span className="italic">Biochem J</span>, 281(Pt 1): 21–40.
              </p>
              <p>
                2. Kreider RB, et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. <span className="italic">J Int Soc Sports Nutr</span>, 14: 18.
              </p>
              <p>
                3. Gualano B, et al. (2012). Creatine supplementation in the aging population: effects on skeletal muscle, bone and brain. <span className="italic">Amino Acids</span>, 43(1): 51–62.
              </p>
              <p>
                4. Persky AM, Brazeau GA. (2001). Clinical pharmacology of the dietary supplement creatine monohydrate. <span className="italic">Pharmacol Rev</span>, 53(2): 161–176.
              </p>
              <p>
                5. Bessman SP, Carpenter CL. (1985). The creatine-creatine phosphate energy shuttle. <span className="italic">Annu Rev Biochem</span>, 54: 831–862.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif font-bold">Evidence-based recovery starts here.</h2>
            <p className="text-muted-foreground">
              FunctionalHealth Clinical Creatine is formulated to maximize these metabolic pathways, providing the energy foundation your body needs to rebuild.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/product">Shop Clinical Creatine</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/science">Back to Science</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
