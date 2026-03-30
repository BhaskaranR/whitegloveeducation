"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    label: "General Inquiries",
    email: "hello@whitegloveeducation.com",
    description: "Partnerships, investments, and general questions",
  },
  {
    label: "Business Development",
    email: "Randhir@whitegloveeducation.com",
    description: "Merchant onboarding, collaborations, and business proposals",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/95" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Contact Us
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-cream"
          >
            Let&apos;s start a
            <br />
            <span className="italic font-medium text-gold">conversation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg leading-relaxed text-cream/60 lg:pt-16"
          >
            Whether you&apos;re a student, merchant, investor, or potential
            partner — we&apos;d love to hear from you. Reach out to the right
            team and we&apos;ll get back to you promptly.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-px bg-cream/10 rounded-2xl overflow-hidden">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.email}
              href={`mailto:${contact.email}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-charcoal p-10 lg:p-12 hover:bg-cream/5 transition-all duration-700"
            >
              <span className="font-mono text-xs text-cream/30 group-hover:text-gold transition-colors duration-500">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold mt-6 mb-2 text-cream group-hover:text-gold transition-colors duration-500">
                {contact.label}
              </h3>
              <p className="text-sm text-cream/40 mb-6">{contact.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-base font-medium text-cream/70 group-hover:text-cream transition-colors duration-500">
                  {contact.email}
                </span>
                <svg
                  className="h-4 w-4 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.a>
          ))}
        </div>

        {/* Legal name */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center text-xs text-cream/20 tracking-wide"
        >
          White Glove Education Services Private Limited &nbsp;·&nbsp; CIN: U85499TS2024PTC186096
        </motion.p>
      </div>
    </section>
  );
}
