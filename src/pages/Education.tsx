import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen, Microscope, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: "Recovery After Hospitalization: What You Need to Know",
      category: "Recovery",
      readTime: "8 min read",
      excerpt: "Extended hospital stays can cause significant muscle loss and functional decline. Learn what happens to the body during hospitalization and evidence-based strategies for recovery."
    },
    {
      title: "Aging and Muscle Loss: Understanding Sarcopenia",
      category: "Aging",
      readTime: "8 min read",
      excerpt: "Sarcopenia affects nearly everyone over 40. Discover the science behind age-related muscle loss, its consequences, and what can be done to slow or reverse it."
    },
    {
      title: "Why Traditional Nutrition Isn't Enough for Recovery",
      category: "Nutrition",
      readTime: "5 min read",
      excerpt: "Standard dietary guidelines weren't designed for recovery and rehabilitation. Explore why targeted nutritional supplementation may be necessary during critical recovery periods."
    },
    {
      title: "Creatine Beyond the Gym: Clinical Applications",
      category: "Research",
      readTime: "7 min read",
      excerpt: "Creatine is one of the most studied nutrients in clinical science — with applications far beyond athletic performance. Review the evidence for its use in aging and recovery populations."
    },
    {
      title: "Maintaining Functional Independence as You Age",
      category: "Longevity",
      readTime: "6 min read",
      excerpt: "Independence isn't just about strength — it's about the cellular energy to perform daily tasks. Learn how muscle health and ATP production connect to long-term autonomy."
    },
    {
      title: "A Caregiver's Guide to Recovery Nutrition",
      category: "Caregiving",
      readTime: "5 min read",
      excerpt: "Supporting a loved one through recovery? Understand the nutritional needs that matter most, and how targeted supplementation can support better outcomes."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Education Header */}
      <section className="py-24 bg-warm-sunrise">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <BookOpen size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Education & Insights</span>
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-functional-green leading-tight">
              Understanding recovery through <br />science
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Clear, evidence-based articles on muscle health, recovery, and the science of aging — written by our clinical team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guide Section (Moved & Resized) */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-center bg-functional-green rounded-[32px] overflow-hidden text-white shadow-lg">
              <div className="lg:col-span-3 p-10 md:p-12 space-y-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-none">Featured Guide</Badge>
                <h2 className="text-3xl font-serif font-bold leading-tight">The Comprehensive Guide to Post-Surgical Recovery</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  A physician-led breakdown of the nutritional and physical protocols required to maximize recovery after major surgery.
                </p>
                <div className="flex items-center gap-6 text-xs text-white/50">
                  <span className="flex items-center gap-2"><Clock size={14} /> 15 min read</span>
                  <span className="flex items-center gap-2"><Microscope size={14} /> Evidence-Backed</span>
                </div>
                <Button className="rounded-full bg-white text-functional-green hover:bg-sunrise-yellow px-8 border-none transition-colors">Read the Full Guide</Button>
              </div>
              <div className="lg:col-span-2 h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical professional consulting" 
                  className="w-full h-full object-cover opacity-60 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl bg-white flex flex-col h-full">
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-functional-green/5 text-functional-green border-functional-green/10 text-[10px] uppercase tracking-widest px-3 py-0.5">{article.category}</Badge>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      <Clock size={12} />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-serif font-bold text-functional-green leading-tight">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button variant="link" className="p-0 h-auto text-clinical-blue font-bold flex items-center gap-1 group">
                      Read article <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section (Moved Above CTA) */}
      <section className="py-24 bg-pathway border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-sm border border-border">
              <BookOpen className="text-functional-green" size={32} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-functional-green">Stay Informed</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join our community of healthcare professionals and health-conscious individuals. Receive monthly summaries of the latest research in functional recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-3 rounded-full border bg-white focus:outline-none focus:ring-2 focus:ring-functional-green/20 transition-all text-foreground"
              />
              <Button className="rounded-full px-8 h-12 bg-functional-green hover:bg-functional-green/90">Subscribe</Button>
            </div>
            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-bold">No spam. Only evidence-based knowledge.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA Section (Moved to Bottom & Updated) */}
      <section className="py-24 bg-secondary/30 border-t">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Have questions about recovery nutrition?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our clinical team is available to answer your questions and provide guidance on our research-backed protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-border bg-background hover:bg-secondary/50">
              Email Clinical Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
