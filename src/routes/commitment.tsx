import { createFileRoute, Link } from "@tanstack/react-router";
import textureCocoa from "@/assets/texture-cocoa.jpg";
import { COMMITMENTS } from "@/lib/content";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";
import { FloatingLeaves } from "@/components/floating-leaves";
import { LeafReveal } from "@/components/leaf-reveal";

export const Route = createFileRoute("/commitment")({
  head: () => ({
    meta: [
      { title: "Commitment — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "Quality, integrity, sustainability, responsibility. Four words we treat as auditable conditions, not slogans.",
      },
      { property: "og:title", content: "Commitment — Green Gold Agro Farm" },
      {
        property: "og:description",
        content: "The standards a serious export partner can verify.",
      },
      { property: "og:image", content: textureCocoa },
    ],
  }),
  component: CommitmentPage,
});

const C_KEYS = [
  ["c.quality.word", "c.quality.body"],
  ["c.integrity.word", "c.integrity.body"],
  ["c.sustainability.word", "c.sustainability.body"],
  ["c.responsibility.word", "c.responsibility.body"],
] as const;

function CommitmentPage() {
  const t = useT();
  return (
    <>
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">{t("commitment.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 max-w-4xl leading-tight">
            {t("commitment.title.a")}{" "}
            <span className="text-forest">{t("commitment.title.defend")}</span>
            {t("commitment.title.suffix")}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
            {t("commitment.lede")}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-32 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMITMENTS.map((c, i) => (
              <LeafReveal
                key={c.word}
                className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div
                    data-leaf-stagger
                    className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center text-forest font-display text-3xl font-bold mb-8 group-hover:bg-forest group-hover:text-white transition-colors"
                  >
                    {c.n}
                  </div>
                  <h2
                    data-leaf-stagger
                    className="font-display text-4xl font-bold text-slate-900 leading-tight mb-6"
                  >
                    {t(C_KEYS[i][0] as TranslationKey)}
                  </h2>
                </div>
                <p
                  data-leaf-stagger
                  className="text-lg text-slate-600 leading-relaxed font-medium"
                >
                  {t(C_KEYS[i][1] as TranslationKey)}
                </p>
              </LeafReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[3rem] shadow-2xl">
          <img
            src={textureCocoa}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
          <div className="relative px-8 md:px-16 py-24 md:py-32 max-w-3xl text-center mx-auto flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {t("commitment.cta.title")}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-10">
              {t("commitment.cta.lede")}
            </p>
            <Link
              to="/contact"
              className="px-10 py-5 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20"
            >
              {t("commitment.cta.btn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
