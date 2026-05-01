import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { LOCALES, LOCALE_META, type Locale } from "@/lib/i18n/types";

type Variant = "header" | "mobile";

export function LanguageSelector({ variant = "header" }: { variant?: Variant }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  const current = LOCALE_META[locale];

  if (variant === "mobile") {
    return (
      <div className="border-t border-line pt-6 mt-6">
        <span className="eyebrow text-cocoa/60 mb-4 block">{t("nav.language")}</span>
        <div className="flex flex-wrap gap-2">
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const active = code === locale;
            return (
              <button
                key={code}
                type="button"
                onClick={() => pick(code)}
                className={`px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold border transition-colors ${
                  active
                    ? "bg-forest text-ivory border-forest"
                    : "bg-transparent text-forest-deep border-line hover:border-forest-deep"
                }`}
                aria-pressed={active}
              >
                <span className="font-display normal-case tracking-normal">{meta.native}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className="flex items-center gap-2 px-3 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-forest-deep/75 hover:text-forest-deep border border-transparent hover:border-line transition-colors"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
        <span className="tabular-nums">{current.flag}</span>
        <svg
          width="9"
          height="9"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M3 4.5 6 7.5 9 4.5" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[180px] bg-ivory border border-line shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)] z-50"
        >
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const active = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => pick(code)}
                  className={`w-full flex items-center justify-between gap-4 px-4 py-3 text-left text-sm transition-colors ${
                    active
                      ? "bg-forest text-ivory"
                      : "text-forest-deep hover:bg-ivory-warm"
                  }`}
                >
                  <span className="font-display tracking-[-0.01em]">{meta.native}</span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.22em] font-semibold tabular-nums ${
                      active ? "text-ivory/70" : "text-cocoa/55"
                    }`}
                  >
                    {meta.flag}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
