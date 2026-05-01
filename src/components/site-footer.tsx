import { Link } from "@tanstack/react-router";
import { BRAND, NAV } from "@/lib/content";
import { useT } from "@/lib/i18n/provider";
import type { TranslationKey } from "@/lib/i18n/dictionary";

const NAV_KEY: Record<string, TranslationKey> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/sectors": "nav.sectors",
  "/products": "nav.products",
  "/export": "nav.export",
  "/commitment": "nav.commitment",
  "/contact": "nav.contact",
};

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow text-cocoa/70 mb-3 block">{t("brand.tagline")}</span>
          <h3 className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-[0.95] mb-8">
            {t("footer.title.a")} <br />
            <span className="italic font-light text-olive">{t("footer.title.b")}</span>
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-sm text-forest-deep group"
          >
            <span className="border-b border-forest-deep pb-1">{t("footer.cta")}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <span className="eyebrow text-cocoa/60 mb-5 block">{t("footer.navigate")}</span>
          <ul className="space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-forest-deep/80 hover:text-forest-deep">
                  {t(NAV_KEY[item.to] ?? "nav.home")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="eyebrow text-cocoa/60 mb-5 block">{t("footer.contact")}</span>
          <address className="not-italic text-sm text-forest-deep/80 leading-relaxed space-y-3">
            <p>
              {t("location.douala-edea")}
              <br />
              {t("contact.aside.country")}
            </p>
            <p>
              <a href="mailto:trade@greengoldagro.cm" className="hover:text-forest-deep">
                trade@greengoldagro.cm
              </a>
              <br />
              <a href="tel:+237000000000" className="hover:text-forest-deep tabular-nums">
                +237 000 000 000
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-cocoa/60">
          <span>
            © {year} {BRAND.fullName} — {t("footer.legal")}
          </span>
          <span className="tabular-nums">{t("footer.tag")}</span>
        </div>
      </div>
    </footer>
  );
}
