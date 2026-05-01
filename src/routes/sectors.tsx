import { createFileRoute, Link } from "@tanstack/react-router";
import sectorLivestock from "@/assets/sector-livestock.jpg";
import sectorFish from "@/assets/sector-fish.jpg";
import sectorColdhouse from "@/assets/sector-coldhouse.jpg";
import sectorPackaging from "@/assets/sector-packaging.jpg";
import { SECTORS } from "@/lib/content";

const IMAGES: Record<string, string> = {
  livestock: sectorLivestock,
  fish: sectorFish,
  "cold-house": sectorColdhouse,
  "package-house": sectorPackaging,
};

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "Beyond the crop. Livestock, fish farming, cold-chain storage and a package house — the operational backbone of Green Gold along the Douala–Edéa corridor.",
      },
      { property: "og:title", content: "Sectors — Green Gold Agro Farm" },
      {
        property: "og:description",
        content: "Livestock, aquaculture, cold storage, and packing — one integrated operation.",
      },
      { property: "og:image", content: sectorLivestock },
    ],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-20">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow text-cocoa/70 mb-8 block">§ Sectors</span>
            <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep">
              Beyond the crop. <br />
              <span className="italic font-light text-olive">One integrated operation.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-base leading-[1.7] text-forest-deep/75">
            Cultivation is one part of the work. Around it sit the operations that make
            export-grade delivery possible — herds on pasture, ponds in the basin, and the
            handling infrastructure between farm and container.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 space-y-px bg-line">
        {SECTORS.map((s, i) => (
          <article
            key={s.key}
            className={`bg-ivory grid grid-cols-1 lg:grid-cols-12 gap-0 ${
              i % 2 === 1 ? "lg:[&>.media]:order-2" : ""
            }`}
          >
            <div className="media lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden bg-forest-deep">
              <img
                src={IMAGES[s.key]}
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-between gap-12">
              <div>
                <span className="eyebrow text-gold mb-6 block">Sector {s.n}</span>
                <h2 className="font-display text-4xl md:text-6xl tracking-[-0.025em] leading-[0.95] text-forest-deep mb-6">
                  {s.name}
                </h2>
                <p className="font-display text-xl md:text-2xl leading-[1.4] tracking-[-0.01em] text-forest-deep mb-6">
                  {s.summary}
                </p>
                <p className="text-base leading-[1.7] text-forest-deep/75 max-w-[52ch]">
                  {s.body}
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-line">
                {s.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow text-cocoa/60 mb-1.5">{k}</dt>
                    <dd className="font-display text-base md:text-lg text-forest-deep tracking-[-0.01em] leading-tight">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="mx-auto max-w-[1400px] flex flex-wrap items-end justify-between gap-8 border-t border-line pt-12">
          <h2 className="font-display text-3xl md:text-5xl tracking-[-0.025em] text-forest-deep leading-[1] max-w-[24ch]">
            Want to see the operation in person?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-9 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep transition-colors"
            >
              Arrange a site visit
            </Link>
            <Link
              to="/products"
              className="px-9 py-4 border border-forest-deep/20 text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:border-forest-deep transition-colors"
            >
              See the catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
