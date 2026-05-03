import { createFileRoute, Link } from "@tanstack/react-router";
import sectorLivestock from "@/assets/sector-livestock.jpg";
import sectorFish from "@/assets/sector-fish.jpg";
import sectorColdhouse from "@/assets/sector-coldhouse.jpg";
import sectorPackaging from "@/assets/sector-packaging.jpg";
import { SECTORS } from "@/lib/content";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";
import { GrassDivider } from "@/components/grass-divider";
import { FloatingLeaves } from "@/components/floating-leaves";
import { LeafReveal } from "@/components/leaf-reveal";

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
  const t = useT();
  return (
    <>
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">{t("sectors.eyebrow")}</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              {t("sectors.title.a")} <br />
              <span className="text-forest">{t("sectors.title.b")}</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-lg text-slate-600 leading-relaxed font-medium">
            {t("sectors.lede")}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-32 bg-white">
        <div className="mx-auto max-w-7xl space-y-16">
          {SECTORS.map((s, i) => (
            <LeafReveal
              key={s.key}
              className={`bg-slate-50 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-sm border border-slate-100 ${
                i % 2 === 1 ? "lg:[&>.media]:order-2" : ""
              }`}
            >
              <div
                data-leaf-stagger
                className="media lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden"
              >
                <img
                  src={IMAGES[s.key]}
                  alt={t(`sector.${s.key}.name` as TranslationKey)}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
              </div>
              <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-between gap-12">
                <div data-leaf-stagger>
                  <span className="inline-block py-1 px-3 rounded-full bg-white text-forest font-bold text-xs mb-6 shadow-sm uppercase tracking-wider">
                    {t("sectors.label")} {s.n}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                    {t(`sector.${s.key}.name` as TranslationKey)}
                  </h2>
                  <p className="text-xl font-bold text-slate-700 leading-snug mb-6">
                    {t(`sector.${s.key}.summary` as TranslationKey)}
                  </p>
                  <p className="text-slate-600 leading-relaxed max-w-xl">
                    {t(`sector.${s.key}.body` as TranslationKey)}
                  </p>
                </div>
                <dl
                  data-leaf-stagger
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200"
                >
                  {[1, 2, 3].map((n) => (
                    <div key={n}>
                      <dt className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                        {t(`sector.${s.key}.f${n}.k` as TranslationKey)}
                      </dt>
                      <dd className="font-display text-lg font-bold text-slate-900">
                        {t(`sector.${s.key}.f${n}.v` as TranslationKey)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </LeafReveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 lg:px-8 py-32 rounded-t-[3rem] mt-[-3rem] relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
            {t("sectors.foot.title")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20 flex justify-center items-center"
            >
              {t("sectors.cta.visit")}
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 font-bold rounded-full border border-slate-200 hover:border-forest hover:text-forest transition-all shadow-sm flex justify-center items-center"
            >
              {t("sectors.cta.catalogue")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
