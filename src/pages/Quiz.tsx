import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, ArrowLeft, Sparkles, Loader2, CheckCircle2, Microscope, Activity, Users, HeartPulse, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ai, SYSTEM_INSTRUCTION } from '@/lib/gemini';
import { Link } from 'react-router-dom';

interface QuizStep {
  id: number;
  question: string;
  options: { label: string; value: string; icon: React.ReactNode }[];
}

const steps: QuizStep[] = [
  {
    id: 1,
    question: "What is your primary recovery goal?",
    options: [
      { label: "Restore Muscle & Strength", value: "muscle", icon: <Activity size={24} /> },
      { label: "Reclaim Energy Levels", value: "energy", icon: <HeartPulse size={24} /> },
      { label: "Return to Independence", value: "independence", icon: <Users size={24} /> },
      { label: "Support Cognitive Health", value: "cognitive", icon: <Microscope size={24} /> }
    ]
  },
  {
    id: 2,
    question: "What is your age bracket?",
    options: [
      { label: "Under 50", value: "under-50", icon: <div className="text-sm font-bold opacity-50">{"<"}50</div> },
      { label: "50 - 65", value: "50-65", icon: <div className="text-sm font-bold opacity-50">50+</div> },
      { label: "65 - 80", value: "65-80", icon: <div className="text-sm font-bold opacity-50">65+</div> },
      { label: "80+", value: "80-plus", icon: <div className="text-sm font-bold opacity-50">80+</div> }
    ]
  },
  {
    id: 3,
    question: "What is your current activity level?",
    options: [
      { label: "Limited / Bedrest", value: "limited", icon: <div className="w-2 h-2 rounded-full bg-red-500" /> },
      { label: "Light Walking", value: "light", icon: <div className="w-2 h-2 rounded-full bg-orange-500" /> },
      { label: "Moderate Activity", value: "moderate", icon: <div className="w-2 h-2 rounded-full bg-yellow-500" /> },
      { label: "Active / Maintaining", value: "active", icon: <div className="w-2 h-2 rounded-full bg-green-500" /> }
    ]
  },
  {
    id: 4,
    question: "Are you recovering from a specific event?",
    options: [
      { label: "Post-Surgery", value: "surgery", icon: <ShieldCheck size={24} /> },
      { label: "Recent Illness", value: "illness", icon: <Activity size={24} /> },
      { label: "Aging / General Health", value: "aging", icon: <HeartPulse size={24} /> },
      { label: "Other / Maintenance", value: "other", icon: <Microscope size={24} /> }
    ]
  },
  {
    id: 5,
    question: "How long has it been since this event?",
    options: [
      { label: "Days / Very Recent", value: "days", icon: <Clock className="w-6 h-6" /> },
      { label: "Weeks", value: "weeks", icon: <Clock className="w-6 h-6 opacity-80" /> },
      { label: "Months", value: "months", icon: <Clock className="w-6 h-6 opacity-60" /> },
      { label: "Chronic / Not Applicable", value: "not-applicable", icon: <Clock className="w-6 h-6 opacity-40" /> }
    ]
  },
  {
    id: 6,
    question: "What best describes your typical diet?",
    options: [
      { label: "Omnivore / Balanced", value: "omnivore", icon: <Activity size={24} className="opacity-80" /> },
      { label: "Vegetarian", value: "vegetarian", icon: <Activity size={24} className="text-green-500" /> },
      { label: "Vegan", value: "vegan", icon: <Activity size={24} className="text-emerald-600" /> },
      { label: "Restricted / Specialized", value: "restricted", icon: <ShieldCheck size={24} className="opacity-60" /> }
    ]
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOptionSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [steps[currentStep].id]: value }));
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = async () => {
    setIsCalculating(true);
    try {
      const prompt = `
        Based on these user answers for a recovery quiz:
        1. Goal: ${answers[1]}
        2. Age: ${answers[2]}
        3. Activity Level: ${answers[3]}
        4. Event: ${answers[4]}
        5. Time since event: ${answers[5]}
        6. Diet: ${answers[6]}

        Generate a highly individualized recovery summary (about 250 words).
        - Use Google Search to find specific clinical evidence or research that connects their goal (${answers[1]}), age bracket (${answers[2]}), and diet (${answers[6]}) to creatine monohydrate supplementation in a clinical recovery context.
        - **MANDATORY: Include at least 2-3 direct citations from reputable scientific journals (e.g., PubMed, NIH) to support your claims.**
        - Explain the physiological mechanism (e.g., ATP regeneration, protein synthesis) in simple but clinical terms, specifically how it relates to their current time since event (${answers[5]}).
        - Provide 4 specific, actionable "Recovery Milestones" tailored to their activity level (${answers[3]}) and goal (${answers[1]}).
        - Maintain a physician-led, evidence-based tone.
        - IMPORTANT: Avoid making definitive medical diagnoses or promises of cure. Use phrases like "Research suggests," "May support," or "Clinical studies have shown."
        - ALWAYS include the medical disclaimer: "This information is for educational purposes based on clinical research and does not constitute medical advice. Please consult your physician before starting any new supplement protocol."
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION + "\n\nYou are a clinical recovery expert. Your goal is to provide research-backed, individualized guidance while strictly adhering to safety and liability constraints.",
          tools: [{ googleSearch: {} }],
        },
        contents: prompt
      });

      setResult(response.text || "We've analyzed your profile. Please contact our team for a detailed protocol.");
    } catch (error) {
      console.error("Quiz Error:", error);
      setResult("I apologize, but I encountered an error while analyzing your profile. Please try again later.");
    } finally {
      setIsCalculating(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (result) {
    return (
      <div className="min-h-screen bg-warm-sunrise/10 py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] shadow-2xl border border-border overflow-hidden"
          >
            <div className="bg-functional-green p-10 text-white text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-sunrise-yellow" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Your Recovery Profile</h1>
              <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Personalized Clinical Summary</p>
            </div>
            
            <div className="p-10 space-y-8">
              <div className="prose prose-slate max-w-none">
                <div className="text-lg leading-relaxed text-foreground/80 whitespace-pre-wrap markdown-body">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </div>

              <div className="pt-8 border-t border-border flex flex-col md:flex-row gap-4">
                <Button asChild size="lg" className="flex-grow rounded-full bg-functional-green hover:bg-functional-green/90 h-14 font-bold">
                  <Link to="/product">View Recommended Protocol</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full h-14 font-bold border-clinical-blue text-clinical-blue"
                  onClick={() => {
                    setResult(null);
                    setCurrentStep(0);
                    setAnswers({});
                  }}
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-sunrise/10 py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-functional-green text-white border-none px-4 py-1 font-bold">Recovery Quiz</Badge>
          <h1 className="text-4xl font-serif font-bold text-functional-green mb-4">Discover Your Path to Independence</h1>
          <p className="text-muted-foreground">Answer 6 simple questions to receive a personalized clinical recovery summary.</p>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl border border-border p-8 md:p-12 relative overflow-hidden">
          {isCalculating ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-functional-green/10 rounded-full scale-150 animate-ping" />
                <Loader2 size={48} className="animate-spin text-functional-green relative z-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-functional-green">Analyzing Your Profile...</h3>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Sparkles size={14} className="text-sunrise-yellow" />
                  Consulting our clinical database
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-functional-green transition-all duration-500" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-functional-green">
                    {steps[currentStep].question}
                  </h2>

                  <div className="grid grid-cols-1 gap-4">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleOptionSelect(option.value)}
                        className="flex items-center gap-6 p-6 rounded-2xl border-2 border-border hover:border-functional-green hover:bg-functional-green/5 transition-all text-left group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-functional-green/10 flex items-center justify-center text-muted-foreground group-hover:text-functional-green transition-colors">
                          {option.icon}
                        </div>
                        <span className="text-lg font-bold text-foreground/80 group-hover:text-functional-green transition-colors">
                          {option.label}
                        </span>
                        <ArrowRight size={20} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-functional-green" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="mt-8 flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-functional-green transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to previous question
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  );
}
