import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV, BRAND } from "@/lib/content";
import { useT } from "@/lib/i18n/provider";
import { LanguageSelector } from "@/components/language-selector";
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

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-end justify-between gap-8">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="eyebrow text-cocoa/70 mb-1.5">{t("brand.tagline")}</span>
          <span className="font-display text-[1.65rem] font-semibold tracking-[-0.03em] text-forest-deep group-hover:text-forest transition-colors">
            {BRAND.name}
            <span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-forest-deep/75 hover:text-forest-deep transition-colors"
              activeProps={{ className: "text-forest-deep !font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(NAV_KEY[item.to] ?? "nav.home")}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-forest text-ivory text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-forest-deep transition-colors"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t("nav.openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block h-px w-6 bg-forest-deep transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-forest-deep transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-forest-deep transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden fixed inset-0 top-[73px] bg-ivory transition-opacity duration-300 overflow-y-auto ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-10 gap-1">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl tracking-[-0.02em] text-forest-deep py-3 border-b border-line flex items-baseline justify-between"
            >
              <span>{t(NAV_KEY[item.to] ?? "nav.home")}</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-cocoa/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-10 px-6 py-5 bg-forest text-ivory text-xs uppercase tracking-[0.25em] font-semibold text-center"
          >
            {t("nav.cta")}
          </Link>
          <LanguageSelector variant="mobile" />
        </nav>
      </div>
    </header>
  );
}
