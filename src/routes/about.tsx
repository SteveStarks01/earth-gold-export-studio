import { createFileRoute, Link } from "@tanstack/react-router";
import landscapeMisty from "@/assets/landscape-misty.jpg";
import aerialFields from "@/assets/aerial-fields.jpg";
import { useT } from "@/lib/i18n/provider";
import { GrassDivider } from "@/components/grass-divider";
import { LeafReveal } from "@/components/leaf-reveal";
import { FloatingLeaves } from "@/components/floating-leaves";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "A registered Cameroonian agribusiness operating with bilingual rigor — sustainable cultivation paired with international commercial discipline.",
      },
      { property: "og:title", content: "About — Green Gold Agro Farm" },
      {
        property: "og:description",
        content:
          "Sustainable Cameroonian cultivation with the operational discipline of a serious export house.",
      },
      { property: "og:image", content: landscapeMisty },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <>
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">{t("about.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 max-w-4xl leading-tight">
            {t("about.title.a")} <span className="text-forest">{t("about.title.b")}</span>
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24 md:pb-32 bg-slate-50">
        <LeafReveal className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div data-leaf-stagger className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={landscapeMisty}
              alt="Cameroon highlands at dawn"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-5 space-y-8 self-center">
            <p
              data-leaf-stagger
              className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight"
            >
              {t("about.intro1")}
            </p>
            <p data-leaf-stagger className="text-lg text-slate-600 leading-relaxed">
              {t("about.intro2")}
            </p>
          </div>
        </LeafReveal>
      </section>

      <section className="bg-forest text-white px-6 lg:px-8 py-24 md:py-32 rounded-[3rem] mx-4 lg:mx-8 mb-24 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white font-bold text-sm mb-6 uppercase tracking-wider">{t("about.posture.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              {t("about.posture.title.a")} <span className="text-gold">{t("about.posture.title.soft")}</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
            <p className="text-lg text-white/90 leading-relaxed font-medium">{t("about.posture.p1")}</p>
            <p className="text-lg text-white/80 leading-relaxed">{t("about.posture.p2")}</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6">
            {(
              [
                ["about.fact.hq.k", "about.fact.hq.v"],
                ["about.fact.regions.k", "about.fact.regions.v"],
                ["about.fact.langs.k", "home.s01.stat.v1"],
                ["about.fact.port.k", "about.fact.port.v"],
                ["about.fact.standing.k", "about.fact.standing.v"],
              ] as const
            ).map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-center hover:shadow-md transition-shadow"
              >
                <div className="md:col-span-4 text-sm uppercase tracking-wider text-slate-500 font-bold">{t(k)}</div>
                <div className="md:col-span-8 font-display text-2xl font-bold text-slate-900">
                  {k === "about.fact.langs.k" ? "Français · English" : t(v)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex px-10 py-5 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20"
            >
              {t("about.cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
