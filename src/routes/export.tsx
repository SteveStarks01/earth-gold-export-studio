import { createFileRoute, Link } from "@tanstack/react-router";
import aerialFields from "@/assets/aerial-fields.jpg";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";
import { GrassDivider } from "@/components/grass-divider";
import { FloatingLeaves } from "@/components/floating-leaves";
import { LeafReveal } from "@/components/leaf-reveal";

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

const FACT_KEYS: ReadonlyArray<{ k: TranslationKey; v: TranslationKey | string }> = [
  { k: "export.fact.origin", v: "location.short" },
  { k: "export.fact.docs", v: "export.fact.docs.v" },
  { k: "export.fact.containers", v: "20' / 40' / 40'HC" },
  { k: "export.fact.incoterms", v: "export.fact.incoterms.v" },
];

function ExportPage() {
  const t = useT();
  const steps = (["i.", "ii.", "iii.", "iv.", "v."] as const).map((n, i) => ({
    n,
    title: t(`export.step${i + 1}.title` as TranslationKey),
    body: t(`export.step${i + 1}.body` as TranslationKey),
  }));
  return (
    <>
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">{t("export.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            {t("export.title.a")}{" "}
            <span className="text-forest">{t("export.title.b")}</span>
          </h1>
        </div>
      </section>

      <section className="bg-forest text-white px-6 lg:px-8 py-24 md:py-32 rounded-[3rem] mx-4 lg:mx-8 mb-24 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              {t("export.section.title")}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              {t("export.section.lede")}
            </p>
          </div>
          <dl className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-y-8 gap-x-6 bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
            {FACT_KEYS.map((f) => {
              const isKey = (f.v as string).includes(".");
              return (
                <div key={f.k}>
                  <dt className="text-xs uppercase tracking-wider text-white/60 mb-2 font-bold">{t(f.k)}</dt>
                  <dd className="font-display text-xl md:text-2xl font-bold">
                    {isKey ? t(f.v as TranslationKey) : (f.v as string)}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow block mb-12 text-center text-xl">{t("export.steps.title")}</span>
          <div className="space-y-6">
            {steps.map((step) => (
              <LeafReveal
                key={step.n}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div
                  data-leaf-stagger
                  className="md:col-span-1 w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center text-forest font-bold text-xl"
                >
                  {step.n}
                </div>
                <h3
                  data-leaf-stagger
                  className="md:col-span-4 font-display text-2xl font-bold text-slate-900"
                >
                  {step.title}
                </h3>
                <p
                  data-leaf-stagger
                  className="md:col-span-7 text-lg text-slate-600 leading-relaxed"
                >
                  {step.body}
                </p>
              </LeafReveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex px-10 py-5 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20"
            >
              {t("export.cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
