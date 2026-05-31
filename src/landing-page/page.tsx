"use client";

import Image from "next/image";
import { useContactForm } from "./hooks/useContactForm";

const BRAND = "#646cff";
const BRAND_DARK = "#4f57e8";

// ─── tiny helpers ────────────────────────────────────────────────────────────

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
      style={{ background: "rgba(13,13,26,0.8)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <Image src="/images/white-logo.png" alt="RetroSet" width={120} height={36} className="object-contain" />
      <a
        href="/signin"
        className="rounded-xl border px-5 py-2 text-sm font-semibold text-white transition-colors hover:text-white"
        style={{ borderColor: `${BRAND}66`, background: `${BRAND}18` }}
      >
        Sign in
      </a>
    </nav>
  );
}

// ─── section 1 – hero ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-40 text-center" style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #131320 60%, #1a1030 100%)" }}>
      {/* glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]" style={{ background: BRAND }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full opacity-10 blur-[100px]" style={{ background: BRAND }} />

      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="flex justify-center">
          <Image src="/images/white-logo.png" alt="RetroSet" width={160} height={48} className="object-contain" />
        </div>

        <Pill>Retrofit management for professionals handling multiple projects at scale</Pill>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          Cut retrofit admin time{" "}
          <GradientText>by up to 85%</GradientText>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
RetroSet automates workflows, detects defects and compliance issues, and generates reports and plans—so your team can spend less time on admin and more time on site.        </p>

        <p className="text-sm font-medium text-gray-400">
          🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#demo"
            className="rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Book a free demo
          </a>
          {/* <a
            href="#how-it-works"
            className="rounded-xl border px-8 py-4 text-base font-semibold text-gray-200 transition-colors hover:text-white"
            style={{ borderColor: `${BRAND}55` }}
          >
            See how it works ↓
          </a> */}
        </div>

        <p className="text-sm text-gray-500">Currently onboarding early access teams</p>
      </div>

      {/* stat bar */}
      <div className="relative z-10 mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-6 backdrop-blur-sm">
        {[
          { value: "85%", label: "Less admin time" },
          { value: "6×", label: "Faster per job" },
          { value: "£0", label: "No extra headcount needed" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-4">
            <span className="text-3xl font-black" style={{ color: BRAND }}>{s.value}</span>
            <span className="text-xs text-gray-400">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-3 text-sm text-gray-500">
        Estimates based on internal workflow analysis. Results may vary.
      </div>
    </section>
  );
}

// ─── section 2 – problem → solution ─────────────────────────────────────────

const PROBLEMS = [
  { icon: "⏳", text: "Hours lost manually checking hundreds of site photos" },
  { icon: "📋", text: "Inconsistent defect reports written from scratch each time" },
  { icon: "🗂️", text: "Survey data trapped in spreadsheets and email chains" },
  { icon: "🔁", text: "Retrofit plans copy-pasted and tweaked for every property" },
];

const SOLUTIONS = [
  { icon: "📸", title: "Auto photo validation", body: "AI reviews site photos against PAS 2035 standards." },
  { icon: "📄", title: "Instant report generation", body: "Structured defect and assessment reports are generated automatically—ready to send." },
  { icon: "🗺️", title: "Photo Validation Checks", body: "Photos are automatically checked for completeness and compliance before entering your workflow." },
  { icon: "🏗️", title: "AI retrofit plan builder", body: "Create whole-house retrofit plan in minutes" },
];

function ProblemSolutionSection() {
  return (
    <section className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          Retrofit teams are drowning in manual work
        </h2>

        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <div key={p.text} className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <span className="text-2xl">{p.icon}</span>
              <p className="text-sm text-gray-300">{p.text}</p>
            </div>
          ))}
        </div>

        <SectionLabel>The solution</SectionLabel>
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          RetroSet replaces the manual grind with{" "}
          <span style={{ color: BRAND }}>intelligent automation</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <span className="mb-4 block text-3xl">{s.icon}</span>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

        <p className="text-sm font-medium text-gray-400 text-center mt-3">
          🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
        </p>

    </section>
  );
}

// ─── section 3 – value (time & money) ────────────────────────────────────────

const VALUE_ITEMS = [
  {
    metric: "Hrs → Min",
    label: "Photo review time per project",
    detail: "What used to take a full morning now runs while your assessor drives to the next site.",
  },
  {
    metric: "£300+",
    label: "Saved per property assessed",
    detail: "Fewer rework trips, no agency admin costs, and reports that don't bounce back for corrections.",
  },
  {
    metric: "100%",
    label: "Consistent report quality",
    detail: "Every report follows the same structure, every time — no matter who ran the workflow.",
  },
  {
    metric: "Days → Hrs",
    label: "Time to completed retrofit plan",
    detail: "AI extracts data, maps improvement measures and generates a costed plan automatically.",
  },
];

function ValueSection() {
  return (
    <section className="px-6 py-24" style={{ background: "linear-gradient(180deg, #0d0d1a 0%, #111128 100%)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Time &amp; money</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Real workflows. Projected savings
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          Designed to pay for itself through time saved on admin alone.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_ITEMS.map((v) => (
            <div
              key={v.label}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16163a 100%)", border: `1px solid ${BRAND}33` }}
            >
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 blur-2xl" style={{ background: BRAND }} />
              <p className="mb-1 text-3xl font-black" style={{ color: BRAND }}>{v.metric}</p>
              <p className="mb-3 text-sm font-semibold text-white">{v.label}</p>
              <p className="text-xs text-gray-400">{v.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-3 text-sm text-gray-500">
        Estimates based on internal workflow analysis. Results may vary.
      </div>
    </section>
  );
}

// ─── section 4 – how it works ─────────────────────────────────────────────────

// const STEPS = [
//   {
//     n: "01",
//     title: "Connect SharePoint",
//     body: "Sign in with your Microsoft account. RetroSet reads your existing folder structure — no migration required.",
//   },
//   {
//     n: "02",
//     title: "Select a workflow",
//     body: "Choose from Defect Validator, Assessment Validator, Installation Photo Validator, or Retrofit Plan Builder.",
//   },
//   {
//     n: "03",
//     title: "Point to your folder",
//     body: "Select the SharePoint folder containing your site photos or EPC documents. RetroSet handles the rest.",
//   },
//   {
//     n: "04",
//     title: "Get your report",
//     body: "AI analyses every photo and document, then delivers a structured report — emailed to your team or saved back to SharePoint.",
//   },
// ];

// function HowItWorksSection() {
//   return (
//     <section id="how-it-works" className="bg-[#0d0d1a] px-6 py-24">
//       <div className="mx-auto max-w-5xl">
//         <SectionLabel>How it works</SectionLabel>
//         <h2 className="mb-14 text-center text-3xl font-extrabold text-white md:text-4xl">
//           Up and running in under 10 minutes
//         </h2>

//         <div className="relative space-y-8">
//           {/* connector line */}
//           <div className="absolute left-9 top-0 hidden h-full w-px md:block" style={{ background: `linear-gradient(180deg, ${BRAND}88 0%, transparent 100%)` }} />

//           {STEPS.map((step) => (
//             <div key={step.n} className="flex gap-6">
//               <div
//                 className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
//                 style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
//               >
//                 {step.n}
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/5 flex-1 p-6">
//                 <h3 className="mb-2 font-bold text-white">{step.title}</h3>
//                 <p className="text-sm text-gray-400">{step.body}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ─── section 5 – what you will gain ──────────────────────────────────────────

const GAINS = [
  { icon: "🕐", title: "Your time back", body: "Stop reviewing 100 photos manually. Run the validator and get a flagged report in minutes." },
  { icon: "💷", title: "Lower costs per project", body: "Fewer errors mean fewer revisits. Fewer revisits mean more margin per contract." },
  { icon: "📊", title: "Audit-ready records", body: "Every job produces structured, timestamped evidence — ready for PAS 2035 audits." },
  { icon: "🤝", title: "Happier clients", body: "Professional, consistent reports delivered faster build trust with housing associations and councils." },
  { icon: "📈", title: "Scale without hiring", body: "Take on more projects without growing your admin team. The software scales with you." },
  { icon: "🔒", title: "Your data, your cloud", body: "Your data is stored securely in the cloud and never sold or shared with third parties." },
];

function WhatYouGainSection() {
  return (
    <section className="px-6 py-24" style={{ background: "linear-gradient(180deg, #111128 0%, #0d0d1a 100%)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel>What you will gain</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Everything your team needs to deliver at scale
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          RetroSet is built specifically for retrofit contractors, coordinator, business owners and project managers.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAINS.map((g) => (
            <div key={g.title} className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#646cff]/50">
              <span className="text-3xl">{g.icon}</span>
              <div>
                <h3 className="mb-1 font-bold text-white">{g.title}</h3>
                <p className="text-sm text-gray-400">{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        <p className="text-sm font-medium text-gray-400 text-center mt-3">
          🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
        </p>

    </section>
  );
}

// ─── section 6 – final CTA + demo form ───────────────────────────────────────

function DemoForm() {
  const { form, handleChange, handleSubmit, isLoading, isSuccess, errorMessage } = useContactForm();

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <span className="text-5xl">🎉</span>
        <h3 className="text-xl font-bold text-white">We&apos;ll be in touch within 24 hours</h3>
        <p className="text-sm text-gray-400">Check your inbox — we&apos;ll send a calendar link to book your personalised demo.</p>
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
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-400">Company name *</label>
        <input required name="company" value={form.company} onChange={handleChange} placeholder="Retrofit Co. Ltd" className={inputClass} />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-400">Anything specific you&apos;d like to see?</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. We do around 50 properties a month and currently use spreadsheets..."
          className={inputClass + " resize-none"}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
      >
        {isLoading ? "Sending…" : "Book my free demo →"}
      </button>
      {errorMessage && <p className="text-center text-xs text-red-400">{errorMessage}</p>}
      <p className="text-center text-xs text-gray-500">No commitment. 30-minute call. Your data stays private.</p>
    </form>
  );
}

function CtaSection() {
  return (
    <section id="demo" className="relative overflow-hidden px-6 py-24" style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #131320 100%)" }}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full opacity-10 blur-[140px]" style={{ background: BRAND }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* left – copy */}
          <div className="space-y-6">
            <Pill>Get started today</Pill>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              See RetroSet working on{" "}
              <GradientText>your projects</GradientText>
            </h2>
            <p className="text-gray-300">
              Book a 30-minute demo and we&apos;ll show you exactly how RetroSet handles your current workflow.
            </p>

            <ul className="space-y-3">
              {[
                "Live walkthrough of all workflows",
                "We'll analyse in real time",
                "Full Q&A with the team",
                "No sales pressure — just the product",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: BRAND }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-1 text-sm font-semibold text-white">"We reduced photo review time from a full day to under an hour."</p>
              <p className="text-xs text-gray-500">— Retrofit project manager, Greater Manchester housing association</p>
            </div> */}
          </div>

          {/* right – form */}
          <div>
            <DemoForm />
          </div>
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
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} RetroSet. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <ValueSection />
      {/* <HowItWorksSection /> */}
      <WhatYouGainSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
