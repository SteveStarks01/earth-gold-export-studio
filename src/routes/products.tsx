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
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">{t("products.eyebrow")}</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              {t("products.title.a")} <br />
              <span className="text-forest">{t("products.title.b")}</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-lg text-slate-600 leading-relaxed font-medium">
            {t("products.lede")}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-32 bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-16">
          {FEATURED.map((p, i) => (
            <LeafReveal
              key={p.key}
              className={`bg-white rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-sm border border-slate-100 ${
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
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-between gap-12">
                <div data-leaf-stagger>
                  <span className="inline-block py-1 px-3 rounded-full bg-forest/10 text-forest font-bold text-xs mb-6 uppercase tracking-wider">
                    {t("products.lot")} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                    {t(`products.${p.key}.name` as TranslationKey)}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                    {t(`products.${p.key}.blurb` as TranslationKey)}
                  </p>
                </div>
                <dl data-leaf-stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                  {p.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">{t(k as TranslationKey)}</dt>
                      <dd className="font-display text-lg font-bold text-slate-900">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </LeafReveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 lg:px-8 py-32 rounded-t-[3rem] mt-[-3rem] relative z-10 shadow-sm border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            {t("products.fullRegister")}
          </h2>
          <ul className="grid grid-cols-1 gap-4">
            {PRODUCTS.map((p) => (
              <li
                key={p.code}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 px-8 bg-slate-50 rounded-2xl border border-slate-100 items-center hover:shadow-md transition-shadow"
              >
                <span className="md:col-span-1 font-display text-forest font-bold text-lg">{p.code}</span>
                <span className="md:col-span-3 text-xs uppercase tracking-wider text-slate-500 font-bold">{p.category}</span>
                <span className="md:col-span-4 font-display text-xl md:text-2xl font-bold text-slate-900">
                  {p.name}
                </span>
                <span className="md:col-span-2 text-sm text-slate-500 italic">
                  {p.origin}
                </span>
                <span className="md:col-span-2 text-sm text-slate-400 font-medium md:text-right">
                  {p.note}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Link
              to="/contact"
              className="px-10 py-5 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20 text-center"
            >
              {t("products.cta.quote")}
            </Link>
            <Link
              to="/export"
              className="px-10 py-5 bg-white text-slate-800 font-bold rounded-full border border-slate-200 hover:border-forest hover:text-forest transition-all shadow-sm text-center"
            >
              {t("products.cta.export")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
