import { createFileRoute, Link } from "@tanstack/react-router";
import textureCocoa from "@/assets/texture-cocoa.jpg";
import { COMMITMENTS } from "@/lib/content";

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

function CommitmentPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-8 block">§ Commitment</span>
          <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep max-w-[14ch]">
            Four words we <span className="italic font-light text-olive">defend</span>.
          </h1>
          <p className="mt-10 max-w-[48ch] text-base md:text-lg leading-[1.7] text-forest-deep/75">
            Not a manifesto. The conditions we work under, the standards we audit ourselves
            against, and the language our partners can use to hold us to account.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-12">
        <div className="mx-auto max-w-[1400px]">
          <ol className="border-t border-line">
            {COMMITMENTS.map((c) => (
              <li
                key={c.word}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-14 border-b border-line group"
              >
                <span className="md:col-span-1 font-display italic text-gold text-2xl">{c.n}</span>
                <h2 className="md:col-span-4 font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-none group-hover:italic transition-all">
                  {c.word}
                </h2>
                <p className="md:col-span-7 text-base md:text-lg leading-[1.7] text-forest-deep/75 max-w-[55ch] self-center">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-10 py-28 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] relative overflow-hidden border border-line">
          <img
            src={textureCocoa}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 to-forest-deep/60" />
          <div className="relative px-8 md:px-16 py-24 md:py-28 max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] leading-[1] text-ivory text-balance">
              Hold us to it.
            </h2>
            <p className="mt-6 text-lg text-ivory/80 leading-relaxed max-w-[42ch]">
              Buyers, distributors, institutions and journalists are welcome to request audit
              records, lot traceability, and cooperative agreements directly.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex px-9 py-4 bg-ivory text-forest-deep text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ivory transition-colors"
            >
              Request the file
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
