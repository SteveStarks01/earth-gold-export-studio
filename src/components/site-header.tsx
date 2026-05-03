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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-line py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white font-bold text-xl leading-none">
            {BRAND.name.charAt(0)}
          </div>
          <span className="font-display text-xl font-bold text-forest-deep group-hover:text-forest transition-colors">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full border border-line/50 shadow-sm">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-slate-600 hover:text-forest transition-colors"
              activeProps={{ className: "text-forest" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(NAV_KEY[item.to] ?? "nav.home")}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSelector />
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest/90 transition-colors shadow-sm hover:shadow"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t("nav.openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-forest-deep transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-forest-deep transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-forest-deep transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden fixed inset-0 top-[73px] bg-white transition-opacity duration-300 overflow-y-auto ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold text-forest-deep py-4 border-b border-line"
            >
              {t(NAV_KEY[item.to] ?? "nav.home")}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full py-4 bg-forest text-white text-sm font-bold rounded-full text-center"
            >
              {t("nav.cta")}
            </Link>
            <div className="flex justify-center">
               <LanguageSelector variant="mobile" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
