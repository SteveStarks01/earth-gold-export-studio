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
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white font-bold text-xl leading-none">
              {BRAND.name.charAt(0)}
            </div>
            <span className="font-display text-2xl font-bold text-white">
              {BRAND.name}
            </span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            {t("brand.tagline")}. {t("footer.title.a")} {t("footer.title.b")}
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="font-bold text-lg mb-6">{t("footer.navigate")}</h4>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-slate-400 hover:text-forest transition-colors">
                  {t(NAV_KEY[item.to] ?? "nav.home")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-lg mb-6">{t("footer.contact")}</h4>
          <address className="not-italic text-slate-400 space-y-4">
            <p>
              {t("location.douala-edea")}
              <br />
              {t("contact.aside.country")}
            </p>
            <p className="flex flex-col gap-2">
              <a href="mailto:trade@greengoldagro.cm" className="hover:text-forest transition-colors">
                trade@greengoldagro.cm
              </a>
              <a href="tel:+237000000000" className="hover:text-forest transition-colors tabular-nums">
                +237 000 000 000
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {year} {BRAND.fullName}. {t("footer.legal")}
          </p>
          <p>{t("footer.tag")}</p>
        </div>
      </div>
    </footer>
  );
}
