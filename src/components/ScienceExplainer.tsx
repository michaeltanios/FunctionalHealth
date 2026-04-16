import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Loader2, BookOpen, ArrowRight, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ai, SYSTEM_INSTRUCTION } from '@/lib/gemini';

interface ScienceExplainerProps {
  topic: string;
  context: string;
}

export default function ScienceExplainer({ topic, context }: ScienceExplainerProps) {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async () => {
    setIsLoading(true);
    try {
      const prompt = `
        The user is reading about "${topic}" in the context of: "${context}".
        
        Please provide a "Science Deep Dive" explanation that:
        1. Simplifies the complex clinical concepts.
        2. Explains the "Why it matters" for functional recovery.
        3. Uses a professional yet accessible tone.
        4. Keeps it under 150 words.
        5. Include the medical disclaimer.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION + "\n\nYou are an expert at simplifying clinical research for patients. Use Google Search to find the latest studies and evidence-based data regarding the topic provided. Always cite your sources.",
          tools: [{ googleSearch: {} }],
        },
        contents: prompt
      });

      setExplanation(response.text || "I apologize, but I'm having trouble generating an explanation right now.");
    } catch (error) {
      console.error("Explainer Error:", error);
      setExplanation("I encountered an error while trying to simplify this topic. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-12 p-8 bg-clinical-blue/5 rounded-[32px] border border-clinical-blue/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={120} className="text-clinical-blue" />
      </div>

      <div className="relative z-10">
        {!explanation ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-clinical-blue font-bold text-sm uppercase tracking-widest">
                <Sparkles size={16} />
                <span>AI Science Explainer</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-functional-green">
                Want a deeper dive into {topic}?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Ask our AI assistant to simplify the clinical research and explain how it applies to your recovery.
              </p>
            </div>
            <Button 
              onClick={handleExplain}
              disabled={isLoading}
              className="rounded-full h-14 px-8 bg-clinical-blue hover:bg-clinical-blue/90 font-bold text-lg shadow-lg shadow-clinical-blue/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={20} />
                  Analyzing...
                </>
              ) : (
                <>
                  Explain This Study <ArrowRight className="ml-2" size={20} />
                </>
              )}
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-clinical-blue font-bold text-sm uppercase tracking-widest">
                <BookOpen size={16} />
                <span>Clinical Insight: {topic}</span>
              </div>
              <button 
                onClick={() => setExplanation(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="prose prose-slate max-w-none">
              <div className="text-lg leading-relaxed text-foreground/80 whitespace-pre-wrap italic border-l-4 border-clinical-blue/30 pl-6 markdown-body">
                <ReactMarkdown>{explanation}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
