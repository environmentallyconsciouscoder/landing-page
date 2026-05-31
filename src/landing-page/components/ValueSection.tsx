import { BRAND } from "./constants";
import { SectionLabel } from "./SectionLabel";

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

export function ValueSection() {
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
