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
      <section className="relative px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-bold text-sm mb-6 uppercase tracking-wider">{t("contact.eyebrow")}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-tight max-w-4xl">
            {t("contact.title.a")}{" "}
            <span className="text-forest">{t("contact.title.tradedesk")}</span>
            {t("contact.title.suffix")}
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-32 bg-slate-50">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center text-forest text-4xl mx-auto mb-8">✓</div>
                <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
                  {t("contact.received.title")}
                </h2>
                <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
                  {t("contact.received.lede.a")}
                  <a
                    href="mailto:trade@greengoldagro.cm"
                    className="text-forest font-bold hover:underline"
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
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label={t("contact.field.name")} name="name" required />
                  <Field label={t("contact.field.company")} name="company" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label={t("contact.field.email")} name="email" type="email" required />
                  <Field label={t("contact.field.country")} name="country" />
                </div>

                <div className="pt-4">
                  <label className="text-sm font-bold text-slate-700 mb-4 block">
                    {t("contact.field.subject")}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {SUBJECT_KEYS.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSubject(s)}
                        className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all border ${
                          subject === s
                            ? "bg-forest border-forest text-white shadow-sm"
                            : "bg-white border-slate-200 text-slate-600 hover:border-forest hover:text-forest"
                        }`}
                      >
                        {t(s as TranslationKey)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 mb-3 block">
                    {t("contact.field.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder={t("contact.field.message.placeholder")}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all resize-none placeholder:text-slate-400"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-all shadow-lg shadow-forest/20"
                  >
                    {t("contact.submit")}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4 block">
                {t("contact.aside.tradedesk")}
              </span>
              <a
                href="mailto:trade@greengoldagro.cm"
                className="font-display text-2xl font-bold text-forest hover:text-forest-deep transition-colors block mb-2"
              >
                trade@greengoldagro.cm
              </a>
              <a
                href="tel:+237000000000"
                className="font-display text-xl font-bold text-slate-700"
              >
                +237 000 000 000
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4 block">{t("contact.aside.hours")}</span>
              <p className="text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                {t("contact.aside.hours.v")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4 block">
                  {t("contact.aside.address")}
                </span>
                <address className="not-italic text-slate-600 leading-relaxed font-medium">
                  Green Gold Agro Farm
                  <br />
                  {t("location.douala-edea")}
                  <br />
                  {t("contact.aside.country")}
                </address>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4 block">{t("contact.aside.langs")}</span>
                <p className="font-display text-xl font-bold text-slate-900">
                  Français · <span className="text-forest">English</span>
                </p>
              </div>
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
      <label htmlFor={name} className="text-sm font-bold text-slate-700 mb-3 block">
        {label}
        {required ? <span className="text-red-500 ml-1">*</span> : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
      />
    </div>
  );
}
