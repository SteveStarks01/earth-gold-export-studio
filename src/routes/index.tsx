import { createFileRoute, Link } from "@tanstack/react-router";
import heroCocoa from "@/assets/hero-cocoa.jpg";
import aerialFields from "@/assets/aerial-fields.jpg";
import produceStill from "@/assets/produce-still.jpg";
import textureCocoa from "@/assets/texture-cocoa.jpg";
import producePineapple from "@/assets/produce-pineapple.jpg";
import produceRoots from "@/assets/produce-roots.jpg";
import landscapeMisty from "@/assets/landscape-misty.jpg";
import sectorLivestock from "@/assets/sector-livestock.jpg";
import sectorFish from "@/assets/sector-fish.jpg";
import sectorColdhouse from "@/assets/sector-coldhouse.jpg";
import sectorPackaging from "@/assets/sector-packaging.jpg";
import { COMMITMENTS, EXPORT_FACTS, PRODUCTS, SECTORS } from "@/lib/content";

const SECTOR_IMAGES: Record<string, string> = {
  livestock: sectorLivestock,
  fish: sectorFish,
  "cold-house": sectorColdhouse,
  "package-house": sectorPackaging,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Gold Agro Farm — Premium Cameroonian Agribusiness & Export" },
      {
        name: "description",
        content:
          "A bridge between sustainable Cameroonian production and global agricultural trade. Cocoa, tubers, cereals, spices and orchard fruit, export-ready.",
      },
      { property: "og:title", content: "Green Gold Agro Farm" },
      {
        property: "og:description",
        content: "Premium Cameroonian agribusiness. Cultivated with intent. Exported with rigor.",
      },
      { property: "og:image", content: heroCocoa },
      { name: "twitter:image", content: heroCocoa },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="px-6 md:px-10 pt-6 md:pt-8">
        <div className="mx-auto max-w-[1400px] border border-line">
          {/* Full-bleed image with overlaid editorial text */}
          <div className="relative min-h-[calc(100svh-9rem)] overflow-hidden bg-forest-deep grain">
            <img
              src={heroCocoa}
              alt="Cocoa pods ripening on a Cameroonian plantation at first light"
              width={1920}
              height={1280}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Single editorial scrim — readability without the AI-slop multi-stop look */}
            <div aria-hidden className="absolute inset-0 bg-forest-deep/55" />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest-deep/85 to-transparent"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100svh-9rem)]">
              {/* Narrative — overlaid on image */}
              <div className="lg:col-span-8 p-8 md:p-14 lg:p-16 flex flex-col justify-between text-ivory">
                <div>
                  <div className="reveal inline-flex items-center gap-3 px-3 py-1.5 border border-ivory/25 backdrop-blur-[2px] bg-forest-deep/20">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-ivory/85">
                      Registered · Cameroon · Export Grade
                    </span>
                  </div>

                  <h1 className="reveal reveal-delay-1 font-display mt-10 text-[clamp(2.75rem,7vw,7rem)] leading-[0.92] tracking-[-0.035em] text-ivory text-balance [text-shadow:0_2px_30px_rgb(0_0_0_/_0.25)]">
                    Cultivated <br />
                    with <span className="italic font-light text-gold">intent.</span>
                    <br />
                    Exported with rigor.
                  </h1>

                  <p className="reveal reveal-delay-2 mt-10 max-w-[48ch] text-base md:text-lg leading-[1.65] text-ivory/85 text-pretty">
                    Green Gold Agro Farm is a premium Cameroonian agribusiness — a quiet bridge
                    between sustainable local production and the world's most demanding
                    agricultural trade. We grow, sort, and ship with the discipline of a craft
                    house.
                  </p>
                </div>

                <div className="reveal reveal-delay-3 mt-16 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="px-9 py-4 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors"
                    >
                      Partner with us
                    </Link>
                    <Link
                      to="/products"
                      className="px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold text-ivory border border-ivory/40 hover:border-ivory hover:bg-ivory/10 transition-colors"
                    >
                      Request a quote
                    </Link>
                  </div>
                  <div className="flex flex-col sm:ml-auto">
                    <span className="eyebrow text-gold mb-1.5">Current season</span>
                    <span className="font-display text-xl italic text-ivory">
                      Cocoa · Pepper · Pineapple
                    </span>
                  </div>
                </div>
              </div>

              {/* Right meta column — coordinates + key facts, transparent over image */}
              <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-ivory/15">
                <div className="p-6 md:p-8 flex justify-end">
                  <div className="px-4 py-2 bg-ivory/95 backdrop-blur-sm border border-line">
                    <span className="font-display italic text-[13px] tabular-nums text-forest-deep">
                      Douala — Edéa · 3°48′N
                    </span>
                  </div>
                </div>

                <dl className="grid grid-cols-2 border-t border-ivory/15">
                  <div className="p-6 md:p-8 border-r border-ivory/15">
                    <dt className="eyebrow text-ivory/55 mb-2">Crop categories</dt>
                    <dd className="font-display text-3xl md:text-4xl tabular-nums text-ivory">
                      11
                    </dd>
                  </div>
                  <div className="p-6 md:p-8">
                    <dt className="eyebrow text-ivory/55 mb-2">Outbound port</dt>
                    <dd className="font-display text-3xl md:text-4xl text-ivory">Douala</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Sub-facts strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
            {[
              {
                n: "01",
                title: "The soil",
                body: "Volcanic and forest-rich earth across the Centre, South, West and North-West, each crop matched to the latitude that suits it.",
              },
              {
                n: "02",
                title: "The hand",
                body: "Cooperatives we know by name. Harvest, drying, and sorting protocols documented per lot — not per shipment.",
              },
              {
                n: "03",
                title: "The route",
                body: "From farmgate to the Port of Douala under chain-of-custody, with bilingual paperwork built for the buyer's customs broker.",
              },
            ].map((f) => (
              <div
                key={f.n}
                className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-line"
              >
                <span className="font-display italic text-gold text-lg block mb-4">{f.n}</span>
                <h3 className="eyebrow text-forest-deep mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed text-forest-deep/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── ABOUT / BRAND STORY ───────────────────────── */}
      <section className="px-6 md:px-10 py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <span className="eyebrow text-cocoa/70 mb-6 block">§ 01 — The House</span>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-forest-deep">
              A registered Cameroonian agribusiness, built for two markets at once.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            <p className="font-display text-2xl md:text-3xl leading-[1.35] tracking-[-0.015em] text-forest-deep text-pretty">
              Green Gold Agro Farm operates as a serious commercial house — bilingual
              French-English in conversation, disciplined in documentation, and rooted in
              cultivation that respects the land before the calendar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-6 border-t border-line">
              <p className="text-base leading-[1.7] text-forest-deep/75">
                We supply local distributors, institutional buyers, and processing partners across
                the country, while preparing every harvest for the standards of an international
                ledger.
              </p>
              <p className="text-base leading-[1.7] text-forest-deep/75">
                The brand carries four words — quality, integrity, sustainability, responsibility —
                not as posture, but as the conditions a serious export partner can verify.
              </p>
            </div>

            <div className="pt-10 grid grid-cols-3 gap-8 border-t border-line">
              <Stat k="Registered" v="Agribusiness" />
              <Stat k="Languages" v="FR · EN" />
              <Stat k="Posture" v="Export-ready" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRODUCTS — editorial mixed grid ───────────────────────── */}
      <section className="px-6 md:px-10 pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between border-b border-line pb-6 mb-12">
            <div>
              <span className="eyebrow text-cocoa/70 mb-3 block">§ 02 — The Catalogue</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-[0.95]">
                Eleven crops. <span className="italic font-light text-olive">One standard.</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-forest-deep group"
            >
              <span className="border-b border-forest-deep/40 group-hover:border-forest-deep pb-0.5">
                Full catalogue
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Editorial mixed grid: large feature + supporting tiles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-line">
            <article className="md:col-span-7 md:row-span-2 bg-ivory p-8 md:p-12 flex flex-col justify-between min-h-[480px] relative overflow-hidden group">
              <img
                src={textureCocoa}
                alt="Close-up of fermented Cameroonian cocoa beans"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-deep/90 to-transparent" />
              <div className="relative flex justify-between text-ivory">
                <span className="eyebrow opacity-80">01 · Flagship</span>
                <span className="eyebrow opacity-80">Lot CM-CO-24</span>
              </div>
              <div className="relative text-ivory">
                <h3 className="font-display text-4xl md:text-5xl tracking-[-0.02em] leading-[1] mb-3">
                  Fermented Cocoa <span className="italic font-light">Beans</span>
                </h3>
                <p className="text-sm md:text-base text-ivory/80 max-w-md leading-relaxed">
                  Sun-dried on raised platforms, sorted to grade, packed for the long crossing.
                </p>
              </div>
            </article>

            <ProductTile
              code="02"
              category="Spices"
              title="Pepper · Ginger · Garlic"
              image={produceStill}
            />
            <ProductTile
              code="03"
              category="Orchard"
              title="Pineapple"
              image={producePineapple}
            />
            <ProductTile
              code="04"
              category="Garden"
              title="Ginger & Garlic"
              image={produceRoots}
            />
            <article className="md:col-span-3 bg-ivory-warm p-8 flex flex-col justify-between min-h-[260px]">
              <span className="eyebrow text-cocoa/70">05 · Tubers & Cereals</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em] text-forest-deep leading-tight">
                  Yam, Cassava, <br />
                  Maize & Beans
                </h3>
                <p className="text-xs text-forest-deep/70 mt-3 leading-relaxed">
                  Field-cured, calibrated, moisture-controlled.
                </p>
              </div>
            </article>
          </div>

          {/* Crop register */}
          <ul className="mt-16 border-t border-line">
            {PRODUCTS.map((p) => (
              <li
                key={p.code}
                className="grid grid-cols-12 gap-4 py-5 border-b border-line items-baseline group"
              >
                <span className="col-span-1 font-display italic text-gold text-lg">{p.code}</span>
                <span className="col-span-3 eyebrow text-cocoa/70">{p.category}</span>
                <span className="col-span-12 md:col-span-4 font-display text-xl md:text-2xl tracking-[-0.015em] text-forest-deep">
                  {p.name}
                </span>
                <span className="col-span-7 md:col-span-2 text-xs text-forest-deep/70 italic">
                  {p.origin}
                </span>
                <span className="col-span-12 md:col-span-2 text-xs text-forest-deep/60 text-right">
                  {p.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────────────── SECTORS — operational backbone ───────────────────────── */}
      <section className="px-6 md:px-10 pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between border-b border-line pb-6 mb-12 gap-8 flex-wrap">
            <div>
              <span className="eyebrow text-cocoa/70 mb-3 block">§ 03 — The Operation</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-[0.95]">
                Beyond the crop. <span className="italic font-light text-olive">Four sectors.</span>
              </h2>
            </div>
            <Link
              to="/sectors"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-forest-deep group"
            >
              <span className="border-b border-forest-deep/40 group-hover:border-forest-deep pb-0.5">
                Tour the operation
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {SECTORS.map((s) => (
              <Link
                key={s.key}
                to="/sectors"
                className="bg-ivory group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-forest-deep">
                  <img
                    src={SECTOR_IMAGES[s.key]}
                    alt={s.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/95 text-forest-deep">
                    <span className="eyebrow">Sector {s.n}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col gap-4">
                  <h3 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-forest-deep leading-[1.05]">
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base text-forest-deep/75 leading-[1.65] max-w-[48ch]">
                    {s.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden mt-10 flex justify-end">
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-forest-deep"
            >
              <span className="border-b border-forest-deep/40 pb-0.5">Tour the operation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── EXPORT READINESS ───────────────────────── */}
      <section className="bg-forest-deep text-ivory px-6 md:px-10 py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]">
          <img
            src={aerialFields}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-gold mb-6 block">§ 03 — Export Readiness</span>
            <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] leading-[0.95] text-balance">
              Built for the <span className="italic font-light">paperwork</span> as much as the
              produce.
            </h2>
            <p className="mt-8 text-base md:text-lg text-ivory/75 leading-relaxed max-w-[42ch]">
              Buyers don't lose sleep over what's in the container. They lose sleep over what isn't
              in the file. We treat documentation as a deliverable.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <dl className="grid grid-cols-2 gap-y-10 gap-x-8 border-t border-ivory/15 pt-10">
              {EXPORT_FACTS.map((f) => (
                <div key={f.k}>
                  <dt className="eyebrow text-ivory/55 mb-2.5">{f.k}</dt>
                  <dd className="font-display text-2xl md:text-3xl text-ivory tracking-[-0.015em]">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-8 border-t border-ivory/15 flex flex-wrap items-center gap-6">
              <Link
                to="/export"
                className="px-9 py-4 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors"
              >
                Read full export brief
              </Link>
              <span className="text-[11px] uppercase tracking-[0.22em] text-ivory/55">
                MOQ on request · Sample lots available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── COMMITMENT ───────────────────────── */}
      <section className="px-6 md:px-10 py-28 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <span className="eyebrow text-cocoa/70 mb-6 block">§ 04 — Commitment</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] leading-[0.95] text-forest-deep">
                Four words we <span className="italic font-light text-olive">defend</span>.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-lg leading-[1.65] text-forest-deep/75 self-end max-w-[50ch]">
              Not a manifesto. The conditions we work under, the standards we audit ourselves
              against, and the language our partners can use to hold us to account.
            </p>
          </div>

          {/* Commitments — editorial list, not icon cards */}
          <ol className="border-t border-line">
            {COMMITMENTS.map((c) => (
              <li
                key={c.word}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-line group"
              >
                <span className="md:col-span-1 font-display italic text-gold text-2xl">{c.n}</span>
                <h3 className="md:col-span-4 font-display text-4xl md:text-5xl tracking-[-0.025em] text-forest-deep leading-none group-hover:italic transition-all">
                  {c.word}
                </h3>
                <p className="md:col-span-7 text-base md:text-lg text-forest-deep/75 leading-[1.65] max-w-[55ch] self-center">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────────── CONTACT CTA ───────────────────────── */}
      <section className="px-6 md:px-10 pb-12">
        <div className="mx-auto max-w-[1400px] relative overflow-hidden border border-line">
          <img
            src={landscapeMisty}
            alt="Cameroon highlands at dawn"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-deep/85" />
          <div className="relative px-8 md:px-16 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-gold mb-6 block">§ 05 — Begin a conversation</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95] text-ivory text-balance">
                Tell us what you need. <br />
                <span className="italic font-light">We'll tell you what we can prove.</span>
              </h2>
              <p className="mt-8 max-w-[50ch] text-base md:text-lg text-ivory/75 leading-relaxed">
                Distributors, institutions, processing partners, and international buyers — write to
                us directly. First reply within two working days.
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-4">
              <Link
                to="/contact"
                className="px-9 py-5 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors text-center"
              >
                Partner with us
              </Link>
              <a
                href="mailto:trade@greengoldagro.cm"
                className="px-9 py-5 border border-ivory/30 text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-ivory/10 transition-colors text-center"
              >
                trade@greengoldagro.cm
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="eyebrow text-cocoa/60 mb-2">{k}</dt>
      <dd className="font-display text-xl md:text-2xl text-forest-deep tracking-[-0.015em]">{v}</dd>
    </div>
  );
}

function ProductTile({
  code,
  category,
  title,
  image,
}: {
  code: string;
  category: string;
  title: string;
  image: string;
}) {
  return (
    <article className="md:col-span-2 bg-ivory relative overflow-hidden min-h-[260px] group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest-deep/90 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-between text-ivory">
        <div className="flex justify-between">
          <span className="eyebrow opacity-80">{code}</span>
          <span className="eyebrow opacity-80">{category}</span>
        </div>
        <h3 className="font-display text-xl tracking-[-0.015em] leading-tight">{title}</h3>
      </div>
    </article>
  );
}
