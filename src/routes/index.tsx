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
import { COMMITMENTS, PRODUCTS, SECTORS } from "@/lib/content";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";
import { GrassDivider } from "@/components/grass-divider";
import { FloatingLeaves } from "@/components/floating-leaves";
import { LeafReveal } from "@/components/leaf-reveal";

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

const C_KEYS = [
  "c.quality.word",
  "c.integrity.word",
  "c.sustainability.word",
  "c.responsibility.word",
] as const;
const C_BODY_KEYS = [
  "c.quality.body",
  "c.integrity.body",
  "c.sustainability.body",
  "c.responsibility.body",
] as const;

function HomePage() {
  const t = useT();
  const facts = (["soil", "hand", "route"] as const).map((k, i) => ({
    n: String(i + 1).padStart(2, "0"),
    title: t(`facts.${k}.title` as TranslationKey),
    body: t(`facts.${k}.body` as TranslationKey),
  }));

  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-6 md:pt-8">
        <div className="mx-auto max-w-[1400px] border border-line">
          <div className="relative min-h-[calc(100svh-9rem)] overflow-hidden bg-forest-deep grain">
            <img
              src={heroCocoa}
              alt="Cocoa pods ripening on a Cameroonian plantation at first light"
              width={1920}
              height={1280}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-forest-deep/55" />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest-deep/85 to-transparent"
            />
            <FloatingLeaves count={11} tone="text-gold" opacity={0.45} />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100svh-9rem)]">
              <div className="lg:col-span-8 p-8 md:p-14 lg:p-16 flex flex-col justify-between text-ivory">
                <div>
                  <div className="reveal inline-flex items-center gap-3 px-3 py-1.5 border border-ivory/25 backdrop-blur-[2px] bg-forest-deep/20">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-ivory/85">
                      {t("hero.badge")}
                    </span>
                  </div>

                  <h1 className="reveal reveal-delay-1 font-display mt-10 text-[clamp(2.75rem,7vw,7rem)] leading-[0.92] tracking-[-0.035em] text-ivory text-balance [text-shadow:0_2px_30px_rgb(0_0_0_/_0.25)]">
                    {t("hero.title.l1")} <br />
                    {t("hero.title.l2.with")}{" "}
                    <span className="italic font-light text-gold">
                      {t("hero.title.l2.intent")}
                    </span>
                    <br />
                    {t("hero.title.l3")}
                  </h1>

                  <p className="reveal reveal-delay-2 mt-10 max-w-[48ch] text-base md:text-lg leading-[1.65] text-ivory/85 text-pretty">
                    {t("hero.lede")}
                  </p>
                </div>

                <div className="reveal reveal-delay-3 mt-16 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="px-9 py-4 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors"
                    >
                      {t("hero.cta.partner")}
                    </Link>
                    <Link
                      to="/products"
                      className="px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold text-ivory border border-ivory/40 hover:border-ivory hover:bg-ivory/10 transition-colors"
                    >
                      {t("hero.cta.quote")}
                    </Link>
                  </div>
                  <div className="flex flex-col sm:ml-auto">
                    <span className="eyebrow text-gold mb-1.5">{t("hero.season.label")}</span>
                    <span className="font-display text-xl italic text-ivory">
                      {t("hero.season.value")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-ivory/15">
                <div className="p-6 md:p-8 flex justify-end">
                  <div className="px-4 py-2 bg-ivory/95 backdrop-blur-sm border border-line">
                    <span className="font-display italic text-[13px] tabular-nums text-forest-deep">
                      {t("location.douala-edea")} · 3°48′N
                    </span>
                  </div>
                </div>

                <dl className="grid grid-cols-2 border-t border-ivory/15">
                  <div className="p-6 md:p-8 border-r border-ivory/15">
                    <dt className="eyebrow text-ivory/55 mb-2">{t("hero.stat.crops")}</dt>
                    <dd className="font-display text-3xl md:text-4xl tabular-nums text-ivory">
                      11
                    </dd>
                  </div>
                  <div className="p-6 md:p-8">
                    <dt className="eyebrow text-ivory/55 mb-2">{t("hero.stat.port")}</dt>
                    <dd className="font-display text-3xl md:text-4xl text-ivory">Douala</dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* grass silhouette anchored to hero floor */}
            <GrassDivider tone="text-ivory" className="absolute inset-x-0 bottom-0" height={48} />
          </div>

          {/* sub-facts strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
            {facts.map((f) => (
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

      {/* ABOUT / BRAND STORY */}
      <section className="relative px-6 md:px-10 py-28 md:py-40 overflow-hidden">
        <FloatingLeaves count={8} tone="text-olive" opacity={0.18} />
        <LeafReveal className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div data-leaf-stagger className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <span className="eyebrow text-cocoa/70 mb-6 block">{t("home.s01.eyebrow")}</span>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-forest-deep">
              {t("home.s01.title")}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            <p
              data-leaf-stagger
              className="font-display text-2xl md:text-3xl leading-[1.35] tracking-[-0.015em] text-forest-deep text-pretty"
            >
              {t("home.s01.lede")}
            </p>
            <div
              data-leaf-stagger
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-6 border-t border-line"
            >
              <p className="text-base leading-[1.7] text-forest-deep/75">{t("home.s01.p1")}</p>
              <p className="text-base leading-[1.7] text-forest-deep/75">{t("home.s01.p2")}</p>
            </div>

            <div
              data-leaf-stagger
              className="pt-10 grid grid-cols-3 gap-8 border-t border-line"
            >
              <Stat k={t("home.s01.stat.k1")} v={t("home.s01.stat.v1")} />
              <Stat k={t("home.s01.stat.k2")} v="FR · EN" />
              <Stat k={t("home.s01.stat.k3")} v={t("home.s01.stat.v3")} />
            </div>
          </div>
        </LeafReveal>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-10 pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between border-b border-line pb-6 mb-12">
            <div>
              <span className="eyebrow text-cocoa/70 mb-3 block">{t("home.s02.eyebrow")}</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-[0.95]">
                {t("home.s02.title.a")}{" "}
                <span className="italic font-light text-olive">{t("home.s02.title.b")}</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-forest-deep group"
            >
              <span className="border-b border-forest-deep/40 group-hover:border-forest-deep pb-0.5">
                {t("home.s02.cta")}
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

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
                <span className="eyebrow opacity-80">01 · {t("home.s02.flagshipBadge")}</span>
                <span className="eyebrow opacity-80">Lot CM-CO-24</span>
              </div>
              <div className="relative text-ivory">
                <h3 className="font-display text-4xl md:text-5xl tracking-[-0.02em] leading-[1] mb-3">
                  {t("home.s02.flagshipName.a")}{" "}
                  <span className="italic font-light">{t("home.s02.flagshipName.b")}</span>
                </h3>
                <p className="text-sm md:text-base text-ivory/80 max-w-md leading-relaxed">
                  {t("home.s02.flagshipBlurb")}
                </p>
              </div>
            </article>

            <ProductTile code="02" category={t("home.s02.flagshipBadge")} title="Pepper · Ginger · Garlic" image={produceStill} />
            <ProductTile code="03" category={t("home.s02.flagshipBadge")} title="Pineapple" image={producePineapple} />
            <ProductTile code="04" category={t("home.s02.flagshipBadge")} title="Ginger & Garlic" image={produceRoots} />
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

      {/* SECTORS */}
      <section className="px-6 md:px-10 pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between border-b border-line pb-6 mb-12 gap-8 flex-wrap">
            <div>
              <span className="eyebrow text-cocoa/70 mb-3 block">{t("home.s03.eyebrow")}</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-[0.95]">
                {t("home.s03.title.a")}{" "}
                <span className="italic font-light text-olive">{t("home.s03.title.b")}</span>
              </h2>
            </div>
            <Link
              to="/sectors"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-forest-deep group"
            >
              <span className="border-b border-forest-deep/40 group-hover:border-forest-deep pb-0.5">
                {t("home.s03.cta")}
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {SECTORS.map((s) => (
              <Link key={s.key} to="/sectors" className="bg-ivory group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-forest-deep">
                  <img
                    src={SECTOR_IMAGES[s.key]}
                    alt={t(`sector.${s.key}.name` as TranslationKey)}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/95 text-forest-deep">
                    <span className="eyebrow">
                      {t("sectors.label")} {s.n}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col gap-4">
                  <h3 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-forest-deep leading-[1.05]">
                    {t(`sector.${s.key}.name` as TranslationKey)}
                  </h3>
                  <p className="text-sm md:text-base text-forest-deep/75 leading-[1.65] max-w-[48ch]">
                    {t(`sector.${s.key}.summary` as TranslationKey)}
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
              <span className="border-b border-forest-deep/40 pb-0.5">{t("home.s03.cta")}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPORT */}
      <GrassDivider tone="text-forest-deep" />
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
        <FloatingLeaves count={9} tone="text-gold" opacity={0.28} />
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-gold mb-6 block">{t("home.s04.eyebrow")}</span>
            <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] leading-[0.95] text-balance">
              {t("home.s04.title.a")}{" "}
              <span className="italic font-light">{t("home.s04.title.paperwork")}</span>{" "}
              {t("home.s04.title.b")}
            </h2>
            <p className="mt-8 text-base md:text-lg text-ivory/75 leading-relaxed max-w-[42ch]">
              {t("home.s04.lede")}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <dl className="grid grid-cols-2 gap-y-10 gap-x-8 border-t border-ivory/15 pt-10">
              {(
                [
                  ["export.fact.origin", t("location.short")],
                  ["export.fact.docs", t("export.fact.docs.v")],
                  ["export.fact.containers", "20' / 40' / 40'HC"],
                  ["export.fact.incoterms", t("export.fact.incoterms.v")],
                ] as const
              ).map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow text-ivory/55 mb-2.5">{t(k as TranslationKey)}</dt>
                  <dd className="font-display text-2xl md:text-3xl text-ivory tracking-[-0.015em]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-8 border-t border-ivory/15 flex flex-wrap items-center gap-6">
              <Link
                to="/export"
                className="px-9 py-4 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors"
              >
                {t("home.s04.cta")}
              </Link>
              <span className="text-[11px] uppercase tracking-[0.22em] text-ivory/55">
                {t("home.s04.note")}
              </span>
            </div>
          </div>
        </div>
      </section>
      <GrassDivider flip tone="text-forest-deep" />

      {/* COMMITMENT */}
      <section className="px-6 md:px-10 py-28 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <span className="eyebrow text-cocoa/70 mb-6 block">{t("home.s05.eyebrow")}</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] leading-[0.95] text-forest-deep">
                {t("home.s05.title.a")}{" "}
                <span className="italic font-light text-olive">
                  {t("home.s05.title.defend")}
                </span>
                .
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-lg leading-[1.65] text-forest-deep/75 self-end max-w-[50ch]">
              {t("home.s05.lede")}
            </p>
          </div>

          <ol className="border-t border-line">
            {COMMITMENTS.map((c, i) => (
              <li
                key={c.word}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-line group"
              >
                <span className="md:col-span-1 font-display italic text-gold text-2xl">
                  {c.n}
                </span>
                <h3 className="md:col-span-4 font-display text-4xl md:text-5xl tracking-[-0.025em] text-forest-deep leading-none group-hover:italic transition-all">
                  {t(C_KEYS[i] as TranslationKey)}
                </h3>
                <p className="md:col-span-7 text-base md:text-lg text-forest-deep/75 leading-[1.65] max-w-[55ch] self-center">
                  {t(C_BODY_KEYS[i] as TranslationKey)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-12">
        <div className="mx-auto max-w-[1400px] relative overflow-hidden border border-line">
          <img
            src={landscapeMisty}
            alt="Cameroon highlands at dawn"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-deep/85" />
          <FloatingLeaves count={9} tone="text-gold" opacity={0.3} />
          <div className="relative px-8 md:px-16 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-gold mb-6 block">{t("home.s06.eyebrow")}</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-[-0.03em] leading-[0.95] text-ivory text-balance">
                {t("home.s06.title.a")} <br />
                <span className="italic font-light">{t("home.s06.title.b")}</span>
              </h2>
              <p className="mt-8 max-w-[50ch] text-base md:text-lg text-ivory/75 leading-relaxed">
                {t("home.s06.lede")}
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-4">
              <Link
                to="/contact"
                className="px-9 py-5 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors text-center"
              >
                {t("hero.cta.partner")}
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
