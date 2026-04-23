import { Link } from "@tanstack/react-router";
import { BRAND, NAV } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow text-cocoa/70 mb-3 block">{BRAND.tagline}</span>
          <h3 className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-forest-deep leading-[0.95] mb-8">
            From Cameroonian soil <br />
            <span className="italic font-light text-olive">to global tables.</span>
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-sm text-forest-deep group"
          >
            <span className="border-b border-forest-deep pb-1">Begin a conversation</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <span className="eyebrow text-cocoa/60 mb-5 block">Navigate</span>
          <ul className="space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-forest-deep/80 hover:text-forest-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="eyebrow text-cocoa/60 mb-5 block">Contact</span>
          <address className="not-italic text-sm text-forest-deep/80 leading-relaxed space-y-3">
            <p>
              Yaoundé · Douala
              <br />
              Republic of Cameroon
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
            © {year} {BRAND.fullName} — Registered Agribusiness · Cameroon
          </span>
          <span className="tabular-nums">FR · EN · Export Ready</span>
        </div>
      </div>
    </footer>
  );
}
