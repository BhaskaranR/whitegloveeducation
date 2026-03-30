"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top CTA area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s build something
            <br />
            <span className="italic font-medium text-gold">extraordinary</span>
          </h2>
          <p className="text-base text-slate-soft max-w-md mx-auto mb-10">
            Whether you&apos;re a student, a merchant, an investor, or a
            potential partner — we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@whitegloveeducation.com"
            className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-10 py-4 text-sm font-semibold text-cream transition-all duration-500 hover:bg-gold hover:text-charcoal"
          >
            hello@whitegloveeducation.com
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
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-charcoal/10 to-transparent mb-16" />

        {/* Footer grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal">
                <span className="font-display text-base font-bold text-cream">W</span>
              </div>
              <span className="font-display text-base font-semibold">
                White Glove Education
              </span>
            </div>
            <p className="text-xs text-slate-soft font-medium mt-1 mb-3">
              White Glove Education Services Private Limited
            </p>
            <p className="text-sm text-slate-soft leading-relaxed">
              Building the future of student empowerment through technology and education.
            </p>
          </div>

          {/* Portfolio col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft mb-6">
              Portfolio
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://studysquaretelangana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-warm-gray hover:text-study-blue transition-colors duration-300"
                >
                  StudySquare Telangana
                </a>
              </li>
              <li>
                <a
                  href="https://loopearn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-warm-gray hover:text-loop-emerald transition-colors duration-300"
                >
                  LoopEarn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Mission", "Portfolio", "Impact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-medium text-warm-gray hover:text-charcoal transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft mb-6">
              Locations
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-warm-gray">Hyderabad</p>
                <p className="text-xs text-slate-soft mt-0.5">
                  Ameerpet, Telangana
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-warm-gray">Warangal</p>
                <p className="text-xs text-slate-soft mt-0.5">
                  Telangana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-charcoal/5">
          <div>
            <p className="text-xs text-slate-soft">
              © {new Date().getFullYear()} White Glove Education Services Private Limited. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-soft">
            <span>Made with</span>
            <svg viewBox="0 0 20 20" fill="#C9A84C" className="h-3.5 w-3.5">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>for students everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
