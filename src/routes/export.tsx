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
      <section className="relative px-6 md:px-10 pt-20 md:pt-28 pb-24 overflow-hidden">
        <FloatingLeaves count={8} tone="text-olive" opacity={0.22} />
        <div className="relative mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-8 block">{t("export.eyebrow")}</span>
          <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep max-w-[16ch]">
            {t("export.title.a")}{" "}
            <span className="italic font-light text-olive">{t("export.title.b")}</span>
          </h1>
        </div>
      </section>

      <GrassDivider tone="text-forest-deep" />
      <section className="bg-forest-deep text-ivory px-6 md:px-10 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <FloatingLeaves count={9} tone="text-gold" opacity={0.22} />
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] leading-[1] text-balance">
              {t("export.section.title")}
            </h2>
            <p className="mt-6 text-lg leading-[1.7] text-ivory/80 max-w-[42ch]">
              {t("export.section.lede")}
            </p>
          </div>
          <dl className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-y-12 gap-x-8 border-t border-ivory/15 pt-10">
            {FACT_KEYS.map((f) => {
              const isKey = (f.v as string).includes(".");
              return (
                <div key={f.k}>
                  <dt className="eyebrow text-ivory/55 mb-2.5">{t(f.k)}</dt>
                  <dd className="font-display text-2xl md:text-3xl tracking-[-0.015em]">
                    {isKey ? t(f.v as TranslationKey) : (f.v as string)}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
      <GrassDivider flip tone="text-forest-deep" />

      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-6 block">{t("export.steps.title")}</span>
          <ol className="border-t border-line">
            {steps.map((step) => (
              <LeafReveal
                key={step.n}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-line"
              >
                <span
                  data-leaf-stagger
                  className="md:col-span-1 font-display italic text-gold text-2xl"
                >
                  {step.n}
                </span>
                <h3
                  data-leaf-stagger
                  className="md:col-span-4 font-display text-3xl md:text-4xl tracking-[-0.02em] text-forest-deep leading-tight"
                >
                  {step.title}
                </h3>
                <p
                  data-leaf-stagger
                  className="md:col-span-7 text-base md:text-lg leading-[1.65] text-forest-deep/75 max-w-[55ch] self-center"
                >
                  {step.body}
                </p>
              </LeafReveal>
            ))}
          </ol>
          <div className="mt-16 flex justify-end">
            <Link
              to="/contact"
              className="px-9 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep"
            >
              {t("export.cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
