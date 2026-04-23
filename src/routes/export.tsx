import { createFileRoute, Link } from "@tanstack/react-router";
import aerialFields from "@/assets/aerial-fields.jpg";
import { EXPORT_FACTS } from "@/lib/content";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: "Export Readiness — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "Documentation culture, container readiness, port logistics and bilingual paperwork — built for the buyer's customs broker.",
      },
      { property: "og:title", content: "Export Readiness — Green Gold Agro Farm" },
      {
        property: "og:description",
        content: "Operational reliability for international agricultural buyers.",
      },
      { property: "og:image", content: aerialFields },
    ],
  }),
  component: ExportPage,
});

function ExportPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-8 block">§ Export Readiness</span>
          <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep max-w-[16ch]">
            The container is the easy part.{" "}
            <span className="italic font-light text-olive">The file is the work.</span>
          </h1>
        </div>
      </section>

      <section className="bg-forest-deep text-ivory px-6 md:px-10 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] leading-[1] text-balance">
              What an international buyer can expect.
            </h2>
            <p className="mt-6 text-lg leading-[1.7] text-ivory/80 max-w-[42ch]">
              Our brief, in plain language. Anything beyond this — bespoke incoterms, financing
              arrangements, third-party inspection — is a conversation, not an exception.
            </p>
          </div>
          <dl className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-y-12 gap-x-8 border-t border-ivory/15 pt-10">
            {EXPORT_FACTS.map((f) => (
              <div key={f.k}>
                <dt className="eyebrow text-ivory/55 mb-2.5">{f.k}</dt>
                <dd className="font-display text-2xl md:text-3xl tracking-[-0.015em]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1400px]">
          <ol className="border-t border-line">
            {[
              {
                n: "i.",
                title: "Origin sampling",
                body: "Every lot is sampled at the cooperative before it leaves the field. Photographic record, weight, moisture, and visual grade are logged against a lot identifier carried through the chain.",
              },
              {
                n: "ii.",
                title: "Calibration & sorting",
                body: "Centralized handling at our site near Douala. Sorting protocols vary by crop — cocoa, peppercorn, ginger and pineapple each have their own grade matrix.",
              },
              {
                n: "iii.",
                title: "Documentation",
                body: "Phytosanitary certificate, certificate of origin, ISPM-15 pallet declaration, packing list and commercial invoice prepared in French and English. Issued before the container leaves our gate.",
              },
              {
                n: "iv.",
                title: "Loading & dispatch",
                body: "20', 40' or 40'HC containers loaded under our supervision at the Port of Douala. Container number, seal number, and stowage diagram delivered to the buyer the same day.",
              },
              {
                n: "v.",
                title: "Post-shipment",
                body: "Bill of lading and full document pack transmitted within 24 hours of vessel departure. A single point of contact remains available through the duration of the crossing.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-line"
              >
                <span className="md:col-span-1 font-display italic text-gold text-2xl">
                  {step.n}
                </span>
                <h3 className="md:col-span-4 font-display text-3xl md:text-4xl tracking-[-0.02em] text-forest-deep leading-tight">
                  {step.title}
                </h3>
                <p className="md:col-span-7 text-base md:text-lg leading-[1.65] text-forest-deep/75 max-w-[55ch] self-center">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex justify-end">
            <Link
              to="/contact"
              className="px-9 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep"
            >
              Open a buyer file
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
