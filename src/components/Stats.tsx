"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Students Guided", sublabel: "across Telangana" },
  { value: "98%", label: "Visa Success Rate", sublabel: "StudySquare" },
  { value: "40K+", label: "Student Network", sublabel: "LoopEarn reach" },
  { value: "15+", label: "Countries", sublabel: "university partners" },
];

export default function Stats() {
  return (
    <section id="impact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Dark bg */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Impact
            </span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-cream"
          >
            Numbers that
            <br />
            <span className="italic font-medium text-gold">speak volumes</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-charcoal p-8 lg:p-12 text-center group hover:bg-warm-gray transition-colors duration-700"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                className="block font-display text-4xl lg:text-5xl font-bold text-gold mb-3"
              >
                {stat.value}
              </motion.span>
              <span className="block text-sm font-semibold text-cream mb-1">
                {stat.label}
              </span>
              <span className="block text-xs text-cream/40">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-cream/50">
            Every number represents a student whose life trajectory changed — a
            visa approved, a deal discovered, a campus connection made.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
