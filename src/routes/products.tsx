import { createFileRoute, Link } from "@tanstack/react-router";
import produceStill from "@/assets/produce-still.jpg";
import producePineapple from "@/assets/produce-pineapple.jpg";
import produceRoots from "@/assets/produce-roots.jpg";
import textureCocoa from "@/assets/texture-cocoa.jpg";
import { PRODUCTS } from "@/lib/content";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";
import { FloatingLeaves } from "@/components/floating-leaves";
import { LeafReveal } from "@/components/leaf-reveal";
import { GrassDivider } from "@/components/grass-divider";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "Cocoa, tubers, cereals, spices, and orchard fruit from Cameroon — calibrated, documented, and export-ready.",
      },
      { property: "og:title", content: "Products — Green Gold Agro Farm" },
      {
        property: "og:description",
        content: "Eleven crops. One standard. The Green Gold catalogue.",
      },
      { property: "og:image", content: produceStill },
    ],
  }),
  component: ProductsPage,
});

const FEATURED = [
  {
    key: "feat1",
    image: textureCocoa,
    facts: [
      ["products.f.origin", "South · Centre"],
      ["products.f.grade", "A · sortable"],
      ["products.f.pack", "Jute · 60 kg"],
    ],
  },
  {
    key: "feat2",
    image: producePineapple,
    facts: [
      ["products.f.origin", "Littoral foothills"],
      ["products.f.calibre", "8 · 10 · 12"],
      ["products.f.pack", "Carton · single layer"],
    ],
  },
  {
    key: "feat3",
    image: produceRoots,
    facts: [
      ["products.f.origin", "West · Adamawa"],
      ["products.f.form", "Fresh · dried · powder"],
      ["products.f.pack", "Mesh · carton"],
    ],
  },
] as const;

export function ProductsPage() {
  const t = useT();
  return (
    <>
      <section className="relative px-6 md:px-10 pt-20 md:pt-28 pb-20 overflow-hidden">
        <FloatingLeaves count={8} tone="text-olive" opacity={0.22} />
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow text-cocoa/70 mb-8 block">{t("products.eyebrow")}</span>
            <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep">
              {t("products.title.a")} <br />
              <span className="italic font-light text-olive">{t("products.title.b")}</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-base leading-[1.7] text-forest-deep/75">
            {t("products.lede")}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 space-y-px bg-line">
        {FEATURED.map((p, i) => (
          <LeafReveal
            key={p.key}
            className={`bg-ivory grid grid-cols-1 lg:grid-cols-12 gap-0 ${
              i % 2 === 1 ? "lg:[&>.media]:order-2" : ""
            }`}
          >
            <div
              data-leaf-stagger
              className="media lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden"
            >
              <img
                src={p.image}
                alt={t(`products.${p.key}.name` as TranslationKey)}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-between gap-12">
              <div data-leaf-stagger>
                <span className="eyebrow text-gold mb-6 block">
                  {t("products.lot")} {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-4xl md:text-6xl tracking-[-0.025em] leading-[0.95] text-forest-deep mb-6">
                  {t(`products.${p.key}.name` as TranslationKey)}
                </h2>
                <p className="text-base md:text-lg leading-[1.65] text-forest-deep/75 max-w-[48ch]">
                  {t(`products.${p.key}.blurb` as TranslationKey)}
                </p>
              </div>
              <dl data-leaf-stagger className="grid grid-cols-3 gap-6 pt-8 border-t border-line">
                {p.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow text-cocoa/60 mb-1.5">{t(k as TranslationKey)}</dt>
                    <dd className="font-display text-lg md:text-xl text-forest-deep tracking-[-0.015em]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </LeafReveal>
        ))}
      </section>

      <GrassDivider tone="text-ivory-warm" />
      <section className="bg-ivory-warm px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] text-forest-deep mb-10 leading-[1]">
            {t("products.fullRegister")}
          </h2>
          <ul className="border-t border-line">
            {PRODUCTS.map((p) => (
              <li
                key={p.code}
                className="grid grid-cols-12 gap-4 py-6 border-b border-line items-baseline"
              >
                <span className="col-span-1 font-display italic text-gold text-lg">{p.code}</span>
                <span className="col-span-3 eyebrow text-cocoa/70">{p.category}</span>
                <span className="col-span-12 md:col-span-4 font-display text-xl md:text-2xl tracking-[-0.015em] text-forest-deep">
                  {p.name}
                </span>
                <span className="col-span-7 md:col-span-2 text-xs italic text-forest-deep/70">
                  {p.origin}
                </span>
                <span className="col-span-12 md:col-span-2 text-xs text-forest-deep/60 text-right">
                  {p.note}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex flex-wrap gap-4 justify-end">
            <Link
              to="/contact"
              className="px-9 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold"
            >
              {t("products.cta.quote")}
            </Link>
            <Link
              to="/export"
              className="px-9 py-4 border border-forest-deep/20 text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:border-forest-deep"
            >
              {t("products.cta.export")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
