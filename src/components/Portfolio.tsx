"use client";

import { motion } from "framer-motion";

const ventures = [
  {
    id: "studysquare",
    name: "StudySquare Telangana",
    tagline: "Your gateway to global education",
    url: "https://studysquaretelangana.com",
    color: "study-blue",
    colorHex: "#2563EB",
    bgGradient: "from-study-blue/5 to-study-blue/10",
    description:
      "One of Telangana's most trusted overseas education consultancies — guiding students from Hyderabad and Warangal to top universities in the USA, UK, Canada, Australia, Germany, and beyond.",
    services: [
      "University Admissions & Selection",
      "Student Visa Processing",
      "IELTS, PTE, GRE, TOEFL Coaching",
      "Career Counselling",
      "Scholarship Guidance",
      "Post-Arrival Support",
    ],
    destinations: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland"],
    locations: ["Hyderabad (Ameerpet)", "Warangal"],
    highlight: "Free end-to-end visa processing with 98% success rate",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <rect width="48" height="48" rx="12" fill="#2563EB" />
        <path
          d="M14 34V18l10-6 10 6v16M14 34h20M20 34v-8h8v8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="22" r="2" fill="white" />
      </svg>
    ),
  },
  {
    id: "loopearn",
    name: "LoopEarn",
    tagline: "Earn. Discover. Repeat.",
    url: "https://loopearn.com",
    color: "loop-emerald",
    colorHex: "#059669",
    bgGradient: "from-loop-emerald/5 to-loop-emerald/10",
    description:
      "A hyperlocal rewards platform connecting college students with local merchants through cashback, creator campaigns, deals, and social actions — turning everyday campus life into earning opportunities.",
    services: [
      "Cashback Campaigns",
      "DealDrop — Flash Deals",
      "UGC Creator Campaigns",
      "Social Action Rewards",
      "Merchant Subscriptions",
      "AI-Powered Campaign Creation",
    ],
    destinations: [],
    locations: ["Hyderabad (Launching)"],
    highlight:
      "Zero commission model — merchants pay a flat subscription, students keep 100% of rewards",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <rect width="48" height="48" rx="12" fill="#059669" />
        <path
          d="M24 14v20M18 20l6-6 6 6M16 28a8 8 0 0016 0"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function VentureCard({
  venture,
  index,
}: {
  venture: (typeof ventures)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-charcoal/5 shadow-[0_8px_40px_rgba(0,0,0,0.04)] ${
        isEven ? "" : "lg:direction-rtl"
      }`}
    >
      {/* Info Side */}
      <div
        className={`relative p-10 lg:p-14 bg-gradient-to-br ${venture.bgGradient} ${
          !isEven ? "lg:order-2 lg:direction-ltr" : ""
        }`}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between mb-10">
          {venture.icon}
          <span className="font-mono text-xs tracking-wider text-slate-soft">
            {String(index + 1).padStart(2, "0")} / {String(ventures.length).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-2">
          {venture.name}
        </h3>
        <p
          className="text-sm font-semibold uppercase tracking-[0.15em] mb-6"
          style={{ color: venture.colorHex }}
        >
          {venture.tagline}
        </p>
        <p className="text-base leading-relaxed text-slate-soft mb-8">
          {venture.description}
        </p>

        {/* Highlight badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white mb-8"
          style={{ backgroundColor: venture.colorHex }}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
            <path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9 5.5-.8z" />
          </svg>
          {venture.highlight}
        </div>

        {/* Locations */}
        <div className="flex items-center gap-3 text-xs text-slate-soft">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {venture.locations.join(" · ")}
        </div>
      </div>

      {/* Services / Details Side */}
      <div
        className={`relative bg-white p-10 lg:p-14 ${
          !isEven ? "lg:order-1 lg:direction-ltr" : ""
        }`}
      >
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft">
            {venture.id === "studysquare" ? "Services" : "Campaign Types"}
          </span>
        </div>

        <div className="space-y-4">
          {venture.services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="group flex items-center gap-4 rounded-xl p-3 -mx-3 hover:bg-off-white transition-colors duration-300"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: venture.colorHex + "15" }}
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: venture.colorHex }}
                />
              </div>
              <span className="text-sm font-medium text-warm-gray">
                {service}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Destinations for StudySquare */}
        {venture.destinations.length > 0 && (
          <div className="mt-10 pt-8 border-t border-charcoal/5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft mb-4 block">
              Top Destinations
            </span>
            <div className="flex flex-wrap gap-2">
              {venture.destinations.map((dest) => (
                <span
                  key={dest}
                  className="rounded-full border border-charcoal/10 px-4 py-1.5 text-xs font-medium text-warm-gray"
                >
                  {dest}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10">
          <a
            href={venture.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
            style={{ color: venture.colorHex }}
          >
            Visit {venture.id === "studysquare" ? "StudySquare" : "LoopEarn"}
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
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 lg:py-40 bg-cream">
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
              Our Portfolio
            </span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            Two platforms,
            <br />
            <span className="italic font-medium text-slate-soft">
              one mission
            </span>
          </motion.h2>
        </div>

        {/* Venture Cards */}
        <div className="space-y-12">
          {ventures.map((venture, i) => (
            <VentureCard key={venture.id} venture={venture} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
