"use client";

import { useState } from "react";
import Image from "next/image";

const BRAND = "#646cff";
const BRAND_DARK = "#4f57e8";

// ─── helpers ──────────────────────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white"
      style={{ background: `${BRAND}33`, border: `1px solid ${BRAND}66` }}
    >
      {children}
    </span>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: `linear-gradient(90deg, #fff 0%, ${BRAND} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em]" style={{ color: BRAND }}>
      {children}
    </p>
  );
}

// ─── navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{ background: "rgba(13,13,26,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <Image src="/images/white-logo.png" alt="RetroSet" width={120} height={36} className="object-contain" />
      <div className="flex items-center gap-3">
        <a href="/signin" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
          Sign in
        </a>
        <a
          href="#pricing"
          className="rounded-xl px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
        >
          Start free trial
        </a>
      </div>
    </nav>
  );
}

// ─── hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-40 text-center"
      style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #131320 60%, #1a1030 100%)" }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]" style={{ background: BRAND }} />

      <div className="relative z-10 max-w-4xl space-y-6">
        <Pill>Trusted by retrofit teams across the UK</Pill>
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          The retrofit platform that{" "}
          <GradientText>actually saves you money</GradientText>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
          Automate photo validation, defect reporting, survey assessments, and retrofit plan generation. Everything your team needs — built around your Microsoft 365 environment.
        </p>

        <p className="text-sm font-medium text-gray-400">
          🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#trial"
            className="rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Start your free 14-day trial
          </a>
          <a
            href="#pricing"
            className="rounded-xl border px-8 py-4 text-base font-semibold text-gray-200 transition-colors hover:text-white"
            style={{ borderColor: `${BRAND}55` }}
          >
            View pricing
          </a>
        </div>
        <p className="text-sm text-gray-500">No credit card required · Cancel any time · Full access from day one</p>
      </div>

      <div className="relative z-10 mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-6 backdrop-blur-sm">
        {[
          { value: "200+", label: "Properties assessed" },
          { value: "4.9 / 5", label: "Customer satisfaction" },
          { value: "£1,200+", label: "Avg. monthly saving" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-4">
            <span className="text-3xl font-black" style={{ color: BRAND }}>{s.value}</span>
            <span className="text-xs text-gray-400">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── testimonials & case studies ─────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote: "We went from spending a full day reviewing photos to less than an hour. RetroSet just runs in the background while we get on with the actual work.",
    name: "Sarah Mitchell",
    role: "Retrofit Project Manager",
    company: "Midlands Housing Partnership",
    initial: "S",
  },
  {
    quote: "The defect validator alone paid for the subscription in the first week. We caught three issues that would have needed revisits — that's £2,000 saved right there.",
    name: "James O'Brien",
    role: "Lead Assessor",
    company: "GreenMark Surveys Ltd",
    initial: "J",
  },
  {
    quote: "Our retrofit plans used to take two days each. Now we upload the EPC, answer a few questions and get a draft in under two hours. The quality is better than what we were producing manually.",
    name: "Priya Desai",
    role: "Energy Efficiency Coordinator",
    company: "Northern Homes Alliance",
    initial: "P",
  },
];

const CASE_STUDIES = [
  {
    tag: "Housing Association",
    stat: "68%",
    statLabel: "reduction in report turnaround time",
    body: "A 1,200-home housing association integrated RetroSet into their ECO4 programme. Photo review and defect reporting dropped from 3 days to under a day per batch of 40 properties.",
  },
  {
    tag: "Retrofit Contractor",
    stat: "£14,400",
    statLabel: "saved in the first 6 months",
    body: "A mid-size contractor eliminated 3 hours of admin per surveyor per week. With 8 surveyors, that's 24 hours a week returned to billable site time.",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        <div>
          <SectionLabel>What our customers say</SectionLabel>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
            Teams that switched don't go back
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm italic leading-relaxed text-gray-300">"{t.quote}"</p>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Case studies</SectionLabel>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
            Real results, real numbers
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CASE_STUDIES.map((c) => (
              <div
                key={c.tag}
                className="relative overflow-hidden rounded-2xl p-8"
                style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16163a 100%)", border: `1px solid ${BRAND}33` }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-15 blur-2xl" style={{ background: BRAND }} />
                <span className="mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold text-gray-400" style={{ borderColor: `${BRAND}44` }}>{c.tag}</span>
                <p className="mb-1 text-5xl font-black" style={{ color: BRAND }}>{c.stat}</p>
                <p className="mb-4 text-sm font-semibold text-white">{c.statLabel}</p>
                <p className="text-sm text-gray-400">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── free trial – solution section ───────────────────────────────────────────

function TrialSection() {
  return (
    <section id="trial" className="relative overflow-hidden px-6 py-24" style={{ background: "linear-gradient(160deg, #111128 0%, #0d0d1a 100%)" }}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full opacity-10 blur-[140px]" style={{ background: BRAND }} />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionLabel>Free trial</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-5xl">
          Try it on your own projects. Free for 14 days.
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Full access to every workflow from day one. No credit card. No hand-holding required. If it doesn't save you time in the first week, cancel with one click.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { day: "Day 1", title: "Connect & run", body: "Link SharePoint and run your first workflow on a real folder of photos. Takes under 10 minutes." },
            { day: "Day 3", title: "See the savings", body: "By day three most teams have already found issues that would have required a revisit." },
            { day: "Day 14", title: "Decide with data", body: "You'll have hard numbers on time saved. Most teams upgrade before the trial ends." },
          ].map((s) => (
            <div key={s.day} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <span className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: BRAND }}>{s.day}</span>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="rounded-xl px-10 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Start your free trial →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── detailed features ────────────────────────────────────────────────────────

const FEATURES = [
  {
    workflow: "Defect Validator",
    icon: "🔍",
    description: "Upload a folder of installation photos and get a structured defect report in minutes.",
    bullets: [
      "AI flags defects against installation standards",
      "GPS coordinates and address label pre-checks",
      "Generates a ready-to-send PDF report",
      "Saves evidence back to your SharePoint folder",
    ],
  },
  {
    workflow: "Assessment Validator",
    icon: "📋",
    description: "Validate survey photo sets against PAS 2035 requirements automatically.",
    bullets: [
      "Checks every photo for GPS and label compliance",
      "Identifies missing or non-compliant images",
      "Produces a structured assessment summary",
      "Email delivery to your whole team in one click",
    ],
  },
  {
    workflow: "Installation Photo Validator",
    icon: "🏗️",
    description: "Compare mid-install and post-install photos side-by-side with AI consistency checks.",
    bullets: [
      "Matches pre and post photos per property",
      "Detects missing post-install evidence",
      "Highlights inconsistencies between stages",
      "Full audit trail stored in Microsoft 365",
    ],
  },
  {
    workflow: "Retrofit Plan Builder",
    icon: "📐",
    description: "Turn EPC PDFs into detailed, costed improvement plans in hours not days.",
    bullets: [
      "Extracts energy data from any EPC document",
      "Maps improvement measures with cost estimates",
      "Generates a client-ready retrofit plan PDF",
      "Configurable measure library (up to 100 items)",
    ],
  },
];

function FeaturesSection() {
  const [active, setActive] = useState(0);
  const f = FEATURES[active];

  return (
    <section className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Detailed features</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Four workflows. One platform.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-400">
          Each workflow is purpose-built for a specific stage of the retrofit process — and they all share your SharePoint data.
        </p>

        {/* tab row */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FEATURES.map((feat, i) => (
            <button
              key={feat.workflow}
              onClick={() => setActive(i)}
              className="rounded-xl border px-5 py-2 text-sm font-semibold transition-all"
              style={
                active === i
                  ? { background: BRAND, borderColor: BRAND, color: "#fff" }
                  : { background: "transparent", borderColor: "rgba(255,255,255,0.12)", color: "#9ca3af" }
              }
            >
              {feat.icon} {feat.workflow}
            </button>
          ))}
        </div>

        {/* feature panel */}
        <div
          key={active}
          className="grid grid-cols-1 gap-10 rounded-2xl border border-white/10 bg-white/5 p-10 md:grid-cols-2"
        >
          <div className="space-y-4">
            <span className="text-5xl">{f.icon}</span>
            <h3 className="text-2xl font-bold text-white">{f.workflow}</h3>
            <p className="text-gray-300">{f.description}</p>
          </div>
          <ul className="space-y-3">
            {f.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: BRAND }}
                >
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── integrations ─────────────────────────────────────────────────────────────

const INTEGRATION_GROUPS = [
  {
    group: "Microsoft 365",
    items: ["SharePoint", "OneDrive", "Outlook", "Teams", "Azure AD", "Word"],
  },
  {
    group: "Communication",
    items: ["Gmail", "Slack", "Twilio SMS", "SendGrid", "Mailchimp", "Intercom"],
  },
  {
    group: "Project & CRM",
    items: ["HubSpot", "Salesforce", "Monday.com", "Asana", "Notion", "Trello"],
  },
  {
    group: "Storage & Docs",
    items: ["Google Drive", "Dropbox", "Box", "Docusign", "Adobe PDF", "AWS S3"],
  },
  {
    group: "Finance & Billing",
    items: ["Xero", "QuickBooks", "Stripe", "GoCardless", "Sage"],
  },
];

function IntegrationsSection() {
  const allItems = INTEGRATION_GROUPS.flatMap((g) => g.items);

  return (
    <section className="px-6 py-24" style={{ background: "linear-gradient(180deg, #111128 0%, #0d0d1a 100%)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Integrations</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Integrated with over 30 tools your team already uses
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          RetroSet connects to your existing stack. No migration. No new logins. Just plug in and go.
        </p>

        {/* pill grid */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {allItems.map((item) => (
            <span
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-[#646cff]/50 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* group rows */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {INTEGRATION_GROUPS.map((g) => (
            <div key={g.group} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: BRAND }}>{g.group}</p>
              <ul className="space-y-1">
                {g.items.map((i) => (
                  <li key={i} className="text-xs text-gray-400">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          Don't see your tool? We support any REST API and Zapier — ask us during your trial.
        </p>
      </div>
    </section>
  );
}

// ─── pricing ──────────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: "Starter",
    price: "£149",
    period: "/month",
    description: "For small teams getting started with retrofit automation.",
    jobs: "25 jobs/month",
    highlight: false,
    features: [
      "All 4 workflows",
      "25 jobs per month",
      "SharePoint integration",
      "PDF & email reports",
      "Email support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Basic",
    price: "£249",
    period: "/month",
    description: "For growing retrofit teams processing 50+ properties a month.",
    jobs: "50 jobs/month",
    highlight: true,
    features: [
      "Everything in Starter",
      "50 jobs per month",
      "Priority support",
      "Custom measure library",
      "Team access (up to 5 users)",
      "Dedicated onboarding call",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "Custom",
    period: "",
    description: "For larger organisations and housing associations with high volume needs.",
    jobs: "Unlimited jobs",
    highlight: false,
    features: [
      "Everything in Basic",
      "Unlimited jobs",
      "Unlimited users",
      "Custom integrations",
      "SLA & dedicated account manager",
      "White-label reports",
    ],
    cta: "Contact us",
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Simple pricing. No surprises.
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-gray-400">
          Every plan includes a 14-day free trial. Cancel any time — no contracts, no lock-in.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-8"
              style={
                plan.highlight
                  ? { background: `linear-gradient(135deg, ${BRAND}22 0%, ${BRAND_DARK}11 100%)`, border: `2px solid ${BRAND}` }
                  : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {plan.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white"
                  style={{ background: BRAND }}
                >
                  Most popular
                </span>
              )}

              <p className="mb-1 text-lg font-bold text-white">{plan.name}</p>
              <p className="mb-4 text-sm text-gray-400">{plan.description}</p>

              <div className="mb-2 flex items-end gap-1">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="mb-1 text-sm text-gray-500">{plan.period}</span>
              </div>
              <p className="mb-6 text-xs font-semibold" style={{ color: BRAND }}>{plan.jobs}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-0.5 text-xs" style={{ color: BRAND }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === "Pro" ? "#demo" : "#trial"}
                className="block rounded-xl py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={
                  plan.highlight
                    ? { background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }
                    : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          All prices exclude VAT. Annual billing available at 2 months free.
        </p>
      </div>
    </section>
  );
}

// ─── final CTA + demo form ────────────────────────────────────────────────────

function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual form submission endpoint
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <span className="text-5xl">🎉</span>
        <h3 className="text-xl font-bold text-white">You're on the list</h3>
        <p className="text-sm text-gray-400">We'll send a calendar invite within 24 hours. Check your inbox.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">Full name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">Work email *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@company.co.uk" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">Company *</label>
          <input required name="company" value={form.company} onChange={handleChange} placeholder="Retrofit Co. Ltd" className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">Your role</label>
          <select name="role" value={form.role} onChange={handleChange} className={inputClass}>
            <option value="" className="bg-[#1a1a2e]">Select role…</option>
            <option value="pm" className="bg-[#1a1a2e]">Project Manager</option>
            <option value="assessor" className="bg-[#1a1a2e]">Energy Assessor</option>
            <option value="contractor" className="bg-[#1a1a2e]">Retrofit Contractor</option>
            <option value="other" className="bg-[#1a1a2e]">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-400">How many properties do you process per month?</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. Around 60–80 per month, ECO4 programme across Greater Manchester…"
          className={inputClass + " resize-none"}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
      >
        {loading ? "Sending…" : "Book my personalised demo →"}
      </button>
      <p className="text-center text-xs text-gray-500">30-minute walkthrough · No commitment · Response within 24 hours</p>
    </form>
  );
}

function FinalCtaSection() {
  return (
    <section id="demo" className="relative overflow-hidden px-6 py-24" style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #131320 100%)" }}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full opacity-10 blur-[140px]" style={{ background: BRAND }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <Pill>Ready to get started?</Pill>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Stop losing time to admin.{" "}
              <GradientText>Start today.</GradientText>
            </h2>
            <p className="text-gray-300">
              Every week you delay is another week of manual photo reviews, inconsistent reports, and time your team could spend on site. Book a demo and see the difference in 30 minutes.
            </p>

            <div className="space-y-3">
              {[
                { strong: "14-day free trial", rest: " — full access, no credit card" },
                { strong: "Live demo", rest: " — we'll use your actual SharePoint folder" },
                { strong: "Same-day setup", rest: " — most teams are running in under an hour" },
                { strong: "PAS 2035 aligned", rest: " — reports built for UK retrofit compliance" },
              ].map((item) => (
                <div key={item.strong} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: BRAND }}>✓</span>
                  <p><span className="font-semibold text-white">{item.strong}</span>{item.rest}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-1 text-sm font-semibold text-white">"The defect validator alone paid for the subscription in the first week."</p>
              <p className="text-xs text-gray-500">— James O'Brien, Lead Assessor, GreenMark Surveys Ltd</p>
            </div>
          </div>

          <DemoForm />
        </div>
      </div>
    </section>
  );
}

// ─── footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a14] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Image src="/images/white-logo.png" alt="RetroSet" width={100} height={30} className="object-contain opacity-60" />
        <div className="flex gap-6 text-xs text-gray-600">
          <a href="/dashboard/landing-page" className="hover:text-gray-400 transition-colors">Early access page</a>
          <a href="/signin" className="hover:text-gray-400 transition-colors">Sign in</a>
        </div>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} RetroSet. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function SellPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <TrialSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
