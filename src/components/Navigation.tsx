"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,168,76,0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-charcoal group-hover:bg-gold transition-colors duration-500" />
                <span className="relative font-display text-lg font-bold text-cream">
                  W
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg font-semibold tracking-tight text-charcoal">
                  White Glove
                </span>
                <span className="ml-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-soft">
                  Education
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {["Mission", "Portfolio", "Impact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium tracking-wide text-warm-gray hover:text-charcoal transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a
                href="mailto:hello@whitegloveeducation.com"
                className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium text-cream hover:bg-gold hover:text-charcoal transition-all duration-500"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {["Mission", "Portfolio", "Impact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-semibold text-charcoal"
                >
                  {item}
                </motion.a>
              ))}
              <a
                href="mailto:hello@whitegloveeducation.com"
                className="mt-4 inline-block rounded-full bg-charcoal px-8 py-3 text-center text-sm font-medium text-cream"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
