"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Global Access",
    description:
      "Breaking geographical barriers so every student in Telangana can access world-class education opportunities abroad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Student Economy",
    description:
      "Creating real earning pathways for college students through hyperlocal rewards, cashback, and creator campaigns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Technology First",
    description:
      "Leveraging AI, mobile-native platforms, and smart integrations to deliver seamless experiences at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M4 6h16M4 12h16M4 18h8" strokeLinecap="round" />
        <circle cx="19" cy="18" r="3" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative py-32 lg:py-40">
      {/* Subtle bg shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-off-white to-cream" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Our Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              Education is the
              <br />
              <span className="italic font-medium text-gold">great equalizer</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pt-16"
          >
            <p className="text-lg leading-relaxed text-slate-soft">
              White Glove Education exists at the intersection of education and
              technology. We build and operate platforms that remove friction
              from the student journey — whether that&apos;s navigating the
              complexities of studying abroad or discovering hyperlocal earning
              opportunities on campus.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-soft">
              Our portfolio companies share a common thread: empowering students
              with the tools, access, and financial independence they need to
              thrive.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid md:grid-cols-3 gap-px bg-charcoal/10 rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-cream p-10 lg:p-12 hover:bg-charcoal transition-all duration-700"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-soft group-hover:text-gold transition-colors duration-500">
                  {pillar.number}
                </span>
                <div className="text-slate-soft group-hover:text-gold transition-colors duration-500">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-cream transition-colors duration-500">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-soft group-hover:text-cream/60 transition-colors duration-500">
                {pillar.description}
              </p>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
