import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import landscapeMisty from "@/assets/landscape-misty.jpg";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";
import { FloatingLeaves } from "@/components/floating-leaves";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Green Gold Agro Farm" },
      {
        name: "description",
        content:
          "Reach Green Gold Agro Farm directly. Distributors, institutional buyers, processing partners and international trade — first reply within two working days.",
      },
      { property: "og:title", content: "Contact — Green Gold Agro Farm" },
      {
        property: "og:description",
        content: "Open a direct line with our trade desk.",
      },
      { property: "og:image", content: landscapeMisty },
    ],
  }),
  component: ContactPage,
});

const SUBJECT_KEYS = [
  "contact.subject.buyer",
  "contact.subject.distribution",
  "contact.subject.sample",
  "contact.subject.general",
] as const;

function ContactPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState<(typeof SUBJECT_KEYS)[number]>("contact.subject.buyer");

  return (
    <>
      <section className="relative px-6 md:px-10 pt-20 md:pt-28 pb-16 overflow-hidden">
        <FloatingLeaves count={7} tone="text-olive" opacity={0.22} />
        <div className="relative mx-auto max-w-[1400px]">
          <span className="eyebrow text-cocoa/70 mb-8 block">{t("contact.eyebrow")}</span>
          <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-forest-deep max-w-[16ch]">
            {t("contact.title.a")}{" "}
            <span className="italic font-light text-olive">{t("contact.title.tradedesk")}</span>
            {t("contact.title.suffix")}
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-line p-12 md:p-16">
                <span className="eyebrow text-gold mb-4 block">{t("contact.received.eyebrow")}</span>
                <h2 className="font-display text-4xl md:text-5xl tracking-[-0.025em] text-forest-deep leading-[1]">
                  {t("contact.received.title")}
                </h2>
                <p className="mt-6 text-base text-forest-deep/75 max-w-[42ch] leading-relaxed">
                  {t("contact.received.lede.a")}
                  <a
                    href="mailto:trade@greengoldagro.cm"
                    className="border-b border-forest-deep/40 hover:border-forest-deep"
                  >
                    trade@greengoldagro.cm
                  </a>
                  {t("contact.received.lede.b")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-10"
              >
                <Field label={t("contact.field.name")} name="name" required />
                <Field label={t("contact.field.company")} name="company" />
                <Field label={t("contact.field.email")} name="email" type="email" required />
                <Field label={t("contact.field.country")} name="country" />

                <div>
                  <label className="eyebrow text-cocoa/70 mb-4 block">
                    {t("contact.field.subject")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECT_KEYS.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSubject(s)}
                        className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold border transition-colors ${
                          subject === s
                            ? "bg-forest text-ivory border-forest"
                            : "bg-transparent text-forest-deep border-line hover:border-forest-deep"
                        }`}
                      >
                        {t(s as TranslationKey)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow text-cocoa/70 mb-3 block">
                    {t("contact.field.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder={t("contact.field.message.placeholder")}
                    className="w-full bg-transparent border-b border-line py-3 text-base text-forest-deep focus:outline-none focus:border-forest-deep transition-colors resize-none placeholder:text-forest-deep/35"
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 py-5 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep transition-colors"
                >
                  {t("contact.submit")}
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div>
              <span className="eyebrow text-cocoa/70 mb-4 block">
                {t("contact.aside.tradedesk")}
              </span>
              <a
                href="mailto:trade@greengoldagro.cm"
                className="font-display text-2xl md:text-3xl tracking-[-0.015em] text-forest-deep border-b border-line hover:border-forest-deep block pb-2"
              >
                trade@greengoldagro.cm
              </a>
              <a
                href="tel:+237000000000"
                className="block mt-3 font-display text-xl tabular-nums text-forest-deep/80"
              >
                +237 000 000 000
              </a>
            </div>

            <div className="border-t border-line pt-8">
              <span className="eyebrow text-cocoa/70 mb-4 block">{t("contact.aside.hours")}</span>
              <p className="text-sm text-forest-deep/80 leading-relaxed whitespace-pre-line">
                {t("contact.aside.hours.v")}
              </p>
            </div>

            <div className="border-t border-line pt-8">
              <span className="eyebrow text-cocoa/70 mb-4 block">
                {t("contact.aside.address")}
              </span>
              <address className="not-italic text-sm text-forest-deep/80 leading-relaxed">
                Green Gold Agro Farm
                <br />
                {t("location.douala-edea")}
                <br />
                {t("contact.aside.country")}
              </address>
            </div>

            <div className="border-t border-line pt-8">
              <span className="eyebrow text-cocoa/70 mb-4 block">{t("contact.aside.langs")}</span>
              <p className="font-display text-xl text-forest-deep">
                Français · <span className="italic">English</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-cocoa/70 mb-3 block">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-line py-3 text-base text-forest-deep focus:outline-none focus:border-forest-deep transition-colors"
      />
    </div>
  );
}
