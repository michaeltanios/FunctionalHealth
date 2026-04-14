import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, MessageSquare, Heart, Share2, Shield, MessageCircle, ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 1500);
  };

  const discussions = [
    {
      title: "First week home after ICU - what to expect?",
      author: "Sarah M.",
      replies: 24,
      likes: 42,
      tags: ["Recovery", "Advice"],
      timestamp: "2 hours ago"
    },
    {
      title: "Nutrition tips for regaining muscle mass",
      author: "David K.",
      replies: 15,
      likes: 38,
      tags: ["Nutrition", "Strength"],
      timestamp: "5 hours ago"
    },
    {
      title: "Managing fatigue and brain fog",
      author: "Elena R.",
      replies: 31,
      likes: 56,
      tags: ["Mental Health", "Fatigue"],
      timestamp: "1 day ago"
    }
  ];

  const stories = [
    {
      quote: "Finding this community made me realize I wasn't alone in my struggle. The advice here helped me navigate the first few months of recovery when I felt completely lost.",
      author: "James L.",
      role: "Post-ICU Survivor"
    },
    {
      quote: "As a caregiver, I found so much support here. Learning from others who have been through the same thing was invaluable for my husband's recovery.",
      author: "Maria G.",
      role: "Caregiver"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 md:py-56 bg-warm-sunrise border-b overflow-hidden">
        {/* Large Background Watermark Logo */}
        <div className="absolute -right-32 -top-32 opacity-[0.05] pointer-events-none select-none">
          <img 
            src="/logo.png" 
            alt="" 
            className="w-[1200px] h-auto rotate-12 blur-[3px]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <img 
              src="/logo.png" 
              alt="FunctionalHealth Logo" 
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <Badge variant="outline" className="rounded-full px-6 py-2 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <Users size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Recovery Community</span>
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-functional-green leading-[1.1]">
              You are not alone in <br />
              <span className="text-clinical-blue/60 italic">your recovery journey.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A dedicated space for post-ICU survivors and caregivers to share stories, exchange advice, and support each other through the path to functional health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-8 bg-functional-green hover:bg-functional-green/90 h-14 text-lg">
                Join the Forum
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-border bg-background hover:bg-secondary/50 h-14 text-lg">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-functional-green">5,000+</div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Members</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-functional-green">12k+</div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Stories Shared</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-functional-green">24/7</div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Support</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-functional-green">100%</div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Peer-Led</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl space-y-4">
              <Badge variant="outline" className="rounded-full px-4 py-1 border-clinical-blue/20 text-clinical-blue flex items-center gap-2 w-fit bg-clinical-blue/5">
                <MessageSquare size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Latest Discussions</span>
              </Badge>
              <h2 className="text-4xl font-serif font-bold text-functional-green">Active Conversations</h2>
              <p className="text-muted-foreground">Join the conversation and learn from others who have walked the same path.</p>
            </div>
            <Button variant="link" className="text-clinical-blue font-bold flex items-center gap-2 p-0 h-auto">
              View all discussions <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {discussions.map((discussion, idx) => (
              <Card key={idx} className="group hover:shadow-md transition-all duration-300 border-border/50 overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-functional-green/5 text-functional-green border-none text-[10px] uppercase tracking-widest">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-functional-green group-hover:text-clinical-blue transition-colors cursor-pointer">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="font-bold text-foreground">By {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-bold text-functional-green">{discussion.replies}</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Replies</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-bold text-functional-green">{discussion.likes}</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Likes</span>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full hover:bg-functional-green/5 text-functional-green">
                      <ChevronRight size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <Heart size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Community Stories</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-functional-green">Voices of Recovery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stories.map((story, idx) => (
              <Card key={idx} className="bg-white border-none shadow-sm relative p-8 md:p-10 rounded-[32px]">
                <Quote className="absolute top-6 right-8 text-functional-green/10" size={60} />
                <CardContent className="p-0 space-y-6 relative z-10">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "{story.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-functional-green/10 flex items-center justify-center text-functional-green font-bold">
                      {story.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-functional-green">{story.author}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{story.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-functional-green rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-16 space-y-8 text-white">
              <h2 className="text-4xl font-serif font-bold leading-tight">Join the Recovery Community</h2>
              <p className="text-white/70 leading-relaxed">
                Get access to our private forum, weekly support calls, and a library of peer-shared recovery resources.
              </p>
              <div className="space-y-4">
                {[
                  "Private, moderated discussion boards",
                  "Weekly peer-led support groups",
                  "Direct access to clinical recovery guides",
                  "A safe space for survivors and caregivers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Shield size={20} className="text-sunrise-yellow" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 md:p-16 flex flex-col justify-center">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-functional-green/10 flex items-center justify-center mx-auto text-functional-green">
                    <Heart size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-functional-green">Welcome to the Community</h3>
                    <p className="text-muted-foreground">Check your email for your invitation to the private forum.</p>
                  </div>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full">
                    Join another account
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleJoin} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 rounded-xl border-border focus-visible:ring-functional-green"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl bg-functional-green hover:bg-functional-green/90 text-white font-bold text-lg"
                  >
                    {isSubmitting ? "Processing..." : "Request Access"}
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                    By joining, you agree to our community guidelines.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 bg-secondary/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Our Community Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                  <Heart className="text-functional-green" size={24} />
                </div>
                <h4 className="font-bold text-functional-green">Empathy First</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">We listen without judgment and support with kindness.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                  <Shield className="text-functional-green" size={24} />
                </div>
                <h4 className="font-bold text-functional-green">Safe Space</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Privacy and respect are non-negotiable in our community.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                  <Share2 className="text-functional-green" size={24} />
                </div>
                <h4 className="font-bold text-functional-green">Shared Wisdom</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Every story has the power to help someone else heal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
