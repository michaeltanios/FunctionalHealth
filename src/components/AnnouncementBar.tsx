import { motion } from "motion/react";

const announcements = [
  "Physician-formulated for functional recovery",
  "Free shipping on orders over $50",
  "Join our community for expert recovery tips",
  "Evidence-based nutrition for independence",
  "Trusted by 5,000+ recovery patients",
  "NSF Certified for Sport & Purity"
];

export default function AnnouncementBar() {
  return (
    <div className="bg-sunrise-yellow py-3 overflow-hidden border-b border-black/5 select-none relative flex items-center">
      <div className="flex whitespace-nowrap w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 pr-12"
        >
          {/* First set of items */}
          {announcements.map((text, i) => (
            <div key={`set1-${i}`} className="flex items-center gap-12">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-functional-green leading-none">
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-functional-green/20" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {announcements.map((text, i) => (
            <div key={`set2-${i}`} className="flex items-center gap-12">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-functional-green leading-none">
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-functional-green/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
