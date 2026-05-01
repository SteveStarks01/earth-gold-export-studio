import { createFileRoute, Link } from "@tanstack/react-router";
import landscapeMisty from "@/assets/landscape-misty.jpg";
import aerialFields from "@/assets/aerial-fields.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "A registered Cameroonian agribusiness operating with bilingual rigor — sustainable cultivation paired with international commercial discipline.",
      },
      { property: "og:title", content: "About — Green Gold Agro Farm" },
      {
        property: "og:description",
        content:
          "Sustainable Cameroonian cultivation with the operational discipline of a serious export house.",
      },
      { property: "og:image", content: landscapeMisty },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-20">
        <div className="mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-8 block">About — The House</span>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep max-w-[14ch]">
            Land first. <span className="italic font-light text-olive">Ledger second.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden">
            <img
              src={landscapeMisty}
              alt="Cameroon highlands at dawn"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end space-y-6">
            <p className="font-display text-2xl md:text-3xl leading-[1.3] tracking-[-0.015em] text-forest-deep">
              Green Gold Agro Farm was founded on a simple commercial premise: Cameroon grows
              extraordinary produce, and the world's serious buyers will pay accordingly when the
              produce arrives sorted, sealed, and documented.
            </p>
            <p className="text-base leading-[1.7] text-forest-deep/75">
              We work across the Centre, South, West and North-West regions, partnering with
              cooperatives whose practices we audit and improve season by season.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-ivory px-6 md:px-10 py-28 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-gold mb-6 block">Posture</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] leading-[1] text-balance">
              Sustainable, but never <span className="italic font-light">soft</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 self-center">
            <p className="text-lg leading-[1.7] text-ivory/80">
              Our sustainability is operational, not decorative. Soil rotation, agroforestry
              corridors, water-line discipline and a refusal to over-extract any one parcel are not
              ESG language — they are the conditions under which next year's harvest exists.
            </p>
            <p className="text-lg leading-[1.7] text-ivory/80">
              Commercial seriousness sits on top of that: bilingual contracts, traceable lots,
              ISPM-15 compliant pallets, and a documentation culture our buyers can hand to their
              own customs broker without revision.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1400px]">
          <ol className="border-t border-line">
            {[
              { k: "Headquarters", v: "Douala — Edéa, Cameroon" },
              { k: "Regions of operation", v: "Centre · South · West · North-West" },
              { k: "Languages of business", v: "Français · English" },
              { k: "Outbound port", v: "Port Autonome de Douala" },
              { k: "Commercial standing", v: "Registered Cameroonian agribusiness" },
            ].map((row) => (
              <li
                key={row.k}
                className="grid grid-cols-12 gap-6 py-7 border-b border-line items-baseline"
              >
                <span className="col-span-12 md:col-span-4 eyebrow text-cocoa/70">{row.k}</span>
                <span className="col-span-12 md:col-span-8 font-display text-2xl md:text-3xl tracking-[-0.015em] text-forest-deep">
                  {row.v}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex justify-end">
            <Link
              to="/contact"
              className="px-9 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
