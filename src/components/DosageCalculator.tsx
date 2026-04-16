import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Info, Zap, Calendar, ArrowRight, Weight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DosageCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');

  const weightInKg = unit === 'lbs' ? (parseFloat(weight) || 0) * 0.453592 : (parseFloat(weight) || 0);
  
  const loadingDosage = Math.round(weightInKg * 0.3);
  const maintenanceDosage = 5; // Standard clinical maintenance dose
  
  const loadingPacks = Math.ceil(loadingDosage / 5);
  const maintenancePacks = 1;

  return (
    <div className="bg-white rounded-[40px] shadow-2xl border border-border overflow-hidden max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Input Side */}
        <div className="lg:col-span-2 p-10 bg-clinical-blue/5 border-r border-border">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-clinical-blue font-bold text-xs uppercase tracking-widest">
                <Calculator size={14} />
                <span>Dosage Calculator</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-functional-green">
                Find your clinical protocol
              </h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Your Weight</label>
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="h-14 rounded-xl border-border focus-visible:ring-clinical-blue text-lg font-bold"
                  />
                  <div className="flex bg-muted rounded-xl p-1">
                    <button 
                      onClick={() => setUnit('lbs')}
                      className={`px-4 rounded-lg text-xs font-bold transition-all ${unit === 'lbs' ? 'bg-white shadow-sm text-clinical-blue' : 'text-muted-foreground'}`}
                    >
                      LBS
                    </button>
                    <button 
                      onClick={() => setUnit('kg')}
                      className={`px-4 rounded-lg text-xs font-bold transition-all ${unit === 'kg' ? 'bg-white shadow-sm text-clinical-blue' : 'text-muted-foreground'}`}
                    >
                      KG
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                *Dosage is calculated based on clinical research for optimal muscle saturation.
              </p>
            </div>
          </div>
        </div>

        {/* Results Side */}
        <div className="lg:col-span-3 p-10">
          <Tabs defaultValue="loading" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-2xl h-14">
              <TabsTrigger value="loading" className="rounded-xl font-bold text-sm data-[state=active]:bg-white data-[state=active]:text-clinical-blue data-[state=active]:shadow-sm">
                <Zap size={14} className="mr-2" /> Loading Phase
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="rounded-xl font-bold text-sm data-[state=active]:bg-white data-[state=active]:text-clinical-blue data-[state=active]:shadow-sm">
                <Calendar size={14} className="mr-2" /> Maintenance
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="loading" className="space-y-8 outline-none mt-0">
                <div className="flex items-center justify-between p-8 bg-functional-green/5 rounded-3xl border border-functional-green/10">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-functional-green uppercase tracking-widest">Daily Dosage</div>
                    <div className="text-4xl font-serif font-bold text-functional-green">{weight ? `${loadingDosage}g` : '--'}</div>
                  </div>
                  <div className="h-12 w-px bg-functional-green/20" />
                  <div className="space-y-1 text-right">
                    <div className="text-xs font-bold text-functional-green uppercase tracking-widest">Stick Packs</div>
                    <div className="text-4xl font-serif font-bold text-functional-green">{weight ? loadingPacks : '--'}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-foreground flex items-center gap-2">
                    <Info size={16} className="text-clinical-blue" />
                    Protocol Details
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span>Duration: First 5–7 days of recovery.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span>Goal: Rapidly saturate muscle creatine stores to jumpstart ATP regeneration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span>Tip: Split dosage throughout the day (e.g., 2 packs in morning, 2 in evening).</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="space-y-8 outline-none mt-0">
                <div className="flex items-center justify-between p-8 bg-clinical-blue/5 rounded-3xl border border-clinical-blue/10">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-clinical-blue uppercase tracking-widest">Daily Dosage</div>
                    <div className="text-4xl font-serif font-bold text-clinical-blue">5g</div>
                  </div>
                  <div className="h-12 w-px bg-clinical-blue/20" />
                  <div className="space-y-1 text-right">
                    <div className="text-xs font-bold text-clinical-blue uppercase tracking-widest">Stick Packs</div>
                    <div className="text-4xl font-serif font-bold text-clinical-blue">1</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-foreground flex items-center gap-2">
                    <Info size={16} className="text-clinical-blue" />
                    Protocol Details
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span>Duration: Ongoing daily use.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span>Goal: Maintain elevated muscle creatine levels for long-term functional strength.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue mt-1.5 shrink-0" />
                      <span>Tip: Take at the same time every day to build a consistent habit.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
