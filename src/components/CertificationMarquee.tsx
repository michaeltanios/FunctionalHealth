import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Microscope, Award, CheckCircle2, FlaskConical, Stethoscope } from 'lucide-react';

const certifications = [
  { icon: <ShieldCheck size={20} />, label: "NSF Certified Facility" },
  { icon: <Microscope size={20} />, label: "Third-Party Tested" },
  { icon: <Award size={20} />, label: "Physician Formulated" },
  { icon: <CheckCircle2 size={20} />, label: "Pharmaceutical Grade" },
  { icon: <FlaskConical size={20} />, label: "Micronized for Absorption" },
  { icon: <Stethoscope size={20} />, label: "Clinical Standard" },
];

export default function CertificationMarquee() {
  return (
    <div className="py-12 bg-white border-y border-border overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-16 whitespace-nowrap"
      >
        {[...certifications, ...certifications, ...certifications].map((cert, i) => (
          <div key={`cert-${i}`} className="flex items-center gap-3 text-clinical-blue/60 group">
            <div className="w-10 h-10 rounded-xl bg-clinical-blue/5 flex items-center justify-center group-hover:bg-clinical-blue/10 transition-colors">
              {cert.icon}
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em]">
              {cert.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
