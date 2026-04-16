import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ai, SYSTEM_INSTRUCTION } from '@/lib/gemini';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function RecoveryAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your FunctionalHealth Recovery Assistant. How can I help you understand the science of your recovery today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ googleSearch: {} }],
        },
        history: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      });

      const result = await chat.sendMessage({
        message: userMessage
      });

      const responseText = result.text || "I apologize, but I'm having trouble processing that right now. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please check your connection and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-functional-green p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-sunrise-yellow" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm">Recovery Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sunrise-yellow animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest opacity-70">Physician-Led AI</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 bg-warm-sunrise/5"
            >
              {messages.map((m, i) => (
                <div 
                  key={`msg-${i}`}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-clinical-blue text-white rounded-tr-none' 
                      : 'bg-white border border-border text-foreground rounded-tl-none shadow-sm'
                  }`}>
                    {m.role === 'user' ? (
                      m.content
                    ) : (
                      <div className="markdown-body">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <Loader2 size={16} className="animate-spin text-functional-green" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your recovery..."
                  className="rounded-xl border-border focus-visible:ring-functional-green"
                />
                <Button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-functional-green hover:bg-functional-green/90 rounded-xl px-3"
                >
                  <Send size={18} />
                </Button>
              </form>
              <div className="mt-2 text-[8px] text-center text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-1">
                <Sparkles size={8} />
                Powered by Gemini Intelligence
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-functional-green text-white shadow-xl shadow-functional-green/20 flex items-center justify-center relative group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <div className="absolute right-full mr-3 px-3 py-1.5 bg-white border border-border rounded-lg shadow-lg text-xs font-bold text-functional-green whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Need recovery help?
          </div>
        )}
      </motion.button>
    </div>
  );
}
