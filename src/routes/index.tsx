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
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">
                {t("hero.eyebrow")}
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8">
                {t("hero.title.a")} <span className="text-forest">{t("hero.title.b")}</span>. <br/>
                <span className="text-slate-500">{t("hero.title.c")}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                {t("hero.lede")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="px-8 py-4 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20 flex items-center gap-2"
                >
                  {t("hero.cta.products")}
                  <span>→</span>
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-forest font-bold rounded-full border border-forest/20 hover:border-forest hover:bg-forest/5 transition-all flex items-center gap-2"
                >
                  {t("hero.cta.partner")}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                 <img
                  src={heroCocoa}
                  alt="Cocoa pods ripening"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
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
      <section className="px-6 lg:px-8 py-24 md:py-32 bg-slate-50 rounded-3xl mx-4 lg:mx-8 mb-24 shadow-sm border border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="eyebrow block mb-4">{t("home.s03.eyebrow")}</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {t("home.s03.title")}
              </h2>
            </div>
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 text-forest font-bold hover:text-forest-deep transition-colors bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100"
            >
              <span>{t("home.s03.cta")}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECTORS.map((s) => (
              <Link key={s.key} to="/sectors" className="bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={SECTOR_IMAGES[s.key]}
                    alt={t(`sector.${s.key}.name`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-sm text-forest-deep rounded-full text-xs font-bold uppercase tracking-wider">
                    {t("sectors.label")} {s.n}
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {t(`sector.${s.key}.name`)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`sector.${s.key}.summary`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT */}
      <section className="bg-forest text-white px-6 lg:px-8 py-24 md:py-32 rounded-[3rem] mx-4 lg:mx-8 mb-24 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white font-bold text-sm mb-6 uppercase tracking-wider">
              {t("home.s04.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
              {t("home.s04.title.a")} <span className="text-gold">{t("home.s04.title.paperwork")}</span> {t("home.s04.title.b")}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {t("home.s04.lede")}
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-8 bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
            <dl className="grid grid-cols-2 gap-y-8 gap-x-6">
              {[
                ["export.fact.origin", t("location.short")],
                ["export.fact.docs", t("export.fact.docs.v")],
                ["export.fact.containers", "20' / 40' / 40'HC"],
                ["export.fact.incoterms", t("export.fact.incoterms.v")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-wider text-white/60 mb-2 font-bold">{t(k)}</dt>
                  <dd className="font-display text-xl md:text-2xl font-bold">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="pt-8 border-t border-white/20">
              <Link
                to="/export"
                className="w-full block text-center px-8 py-4 bg-white text-forest font-bold rounded-full hover:bg-gold transition-colors shadow-lg"
              >
                {t("home.s04.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <GrassDivider flip tone="text-forest-deep" />

      {/* COMMITMENT */}
      <section className="px-6 lg:px-8 py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="eyebrow block mb-4">{t("home.s05.eyebrow")}</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {t("home.s05.title.a")} <span className="text-forest">{t("home.s05.title.defend")}</span>.
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               {t("home.s05.lede")}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMITMENTS.map((c, i) => (
              <div key={c.word} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center text-forest font-display text-3xl font-bold mb-8 group-hover:bg-forest group-hover:text-white transition-colors">
                  {c.n}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  {t(C_KEYS[i])}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(C_BODY_KEYS[i])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[3rem] shadow-xl">
          <img
            src={landscapeMisty}
            alt="Cameroon highlands"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
          <div className="relative px-8 md:px-16 py-24 md:py-32 text-center max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-forest/20 text-forest font-bold text-sm mb-6 uppercase tracking-wider">
              {t("home.s06.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              {t("home.s06.title.a")} <span className="text-forest">{t("home.s06.title.b")}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t("home.s06.lede")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg"
              >
                {t("hero.cta.partner")}
              </Link>
              <a
                href="mailto:trade@greengoldagro.cm"
                className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md"
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
    <div className="flex flex-col gap-1">
      <dt className="text-xs uppercase tracking-wider text-slate-500 font-bold">{k}</dt>
      <dd className="font-display text-2xl font-bold text-slate-900">{v}</dd>
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
    <article className="bg-slate-50 rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-[380px]">
      <div className="relative h-2/3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-forest-deep rounded-full text-[10px] font-bold uppercase tracking-wider">
          {code} · {category}
        </div>
      </div>
      <div className="p-6 bg-white flex-1 flex flex-col justify-center">
        <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-forest transition-colors">{title}</h3>
      </div>
    </article>
  );
}
