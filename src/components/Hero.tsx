"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gold accent line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "40%" }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-12 lg:left-24 top-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-32">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Holding Company
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-charcoal"
          >
            Building the
            <br />
            <span className="relative inline-block">
              future
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-gold"
              />
            </span>{" "}
            of student
            <br />
            <span className="italic font-medium text-slate-soft">
              empowerment
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-slate-soft"
          >
            White Glove Education invests in and operates platforms that
            transform how students learn, earn, and grow — from Hyderabad to the
            world.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-cream transition-all duration-500 hover:bg-gold hover:text-charcoal"
            >
              Our Portfolio
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-3 rounded-full border border-charcoal/20 px-8 py-4 text-sm font-semibold text-charcoal transition-all duration-500 hover:border-gold hover:text-gold"
            >
              Our Mission
            </a>
          </motion.div>
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute right-6 lg:right-12 bottom-32 hidden lg:flex flex-col items-center"
        >
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-gold/30">
            <div className="absolute inset-2 rounded-full border border-gold/10" />
            <div className="text-center">
              <span className="block font-display text-2xl font-bold text-charcoal">
                2
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-soft">
                Ventures
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-soft">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
