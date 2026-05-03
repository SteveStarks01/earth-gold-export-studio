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
      <section className="relative px-6 md:px-10 pt-20 md:pt-28 pb-20 overflow-hidden">
        <FloatingLeaves count={7} tone="text-olive" opacity={0.22} />
        <div className="relative mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-8 block">{t("about.eyebrow")}</span>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep max-w-[14ch]">
            {t("about.title.a")}{" "}
            <span className="italic font-light text-olive">{t("about.title.b")}</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28">
        <LeafReveal className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div data-leaf-stagger className="lg:col-span-7 relative aspect-[4/3] overflow-hidden">
            <img
              src={landscapeMisty}
              alt="Cameroon highlands at dawn"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end space-y-6">
            <p
              data-leaf-stagger
              className="font-display text-2xl md:text-3xl leading-[1.3] tracking-[-0.015em] text-forest-deep"
            >
              {t("about.intro1")}
            </p>
            <p data-leaf-stagger className="text-base leading-[1.7] text-forest-deep/75">
              {t("about.intro2")}
            </p>
          </div>
        </LeafReveal>
      </section>

      <GrassDivider tone="text-forest-deep" />
      <section className="bg-forest-deep text-ivory px-6 md:px-10 py-28 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]">
          <img src={aerialFields} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <FloatingLeaves count={9} tone="text-gold" opacity={0.25} />
        <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-gold mb-6 block">{t("about.posture.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] leading-[1] text-balance">
              {t("about.posture.title.a")}{" "}
              <span className="italic font-light">{t("about.posture.title.soft")}</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 self-center">
            <p className="text-lg leading-[1.7] text-ivory/80">{t("about.posture.p1")}</p>
            <p className="text-lg leading-[1.7] text-ivory/80">{t("about.posture.p2")}</p>
          </div>
        </div>
      </section>
      <GrassDivider flip tone="text-forest-deep" />

      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1400px]">
          <ol className="border-t border-line">
            {(
              [
                ["about.fact.hq.k", "about.fact.hq.v"],
                ["about.fact.regions.k", "about.fact.regions.v"],
                ["about.fact.langs.k", "home.s01.stat.v1"],
                ["about.fact.port.k", "about.fact.port.v"],
                ["about.fact.standing.k", "about.fact.standing.v"],
              ] as const
            ).map(([k, v]) => (
              <li
                key={k}
                className="grid grid-cols-12 gap-6 py-7 border-b border-line items-baseline"
              >
                <span className="col-span-12 md:col-span-4 eyebrow text-cocoa/70">{t(k)}</span>
                <span className="col-span-12 md:col-span-8 font-display text-2xl md:text-3xl tracking-[-0.015em] text-forest-deep">
                  {k === "about.fact.langs.k" ? "Français · English" : t(v)}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex justify-end">
            <Link
              to="/contact"
              className="px-9 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep"
            >
              {t("about.cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
