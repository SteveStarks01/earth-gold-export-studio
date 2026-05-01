import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { I18nProvider } from "@/lib/i18n/provider";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-xl text-center">
          <span className="eyebrow text-cocoa/60 block mb-6">Error · 404</span>
          <h1 className="font-display text-7xl md:text-8xl tracking-[-0.03em] text-forest-deep leading-none">
            Off the <span className="italic font-light text-olive">map</span>.
          </h1>
          <p className="mt-6 text-base text-forest-deep/70 max-w-md mx-auto leading-relaxed">
            The page you're looking for is not in our archive. Return to the homestead and continue
            from there.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-forest text-ivory text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-forest-deep transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Green Gold Agro Farm — Premium Cameroonian Agribusiness & Export" },
      {
        name: "description",
        content:
          "Green Gold Agro Farm cultivates and exports premium Cameroonian produce — cocoa, tubers, cereals, spices, and orchard fruit — to discerning international partners.",
      },
      { name: "author", content: "Green Gold Agro Farm" },
      { property: "og:title", content: "Green Gold Agro Farm — Premium Cameroonian Agribusiness & Export" },
      {
        property: "og:description",
        content: "A bridge between sustainable Cameroonian production and global agricultural trade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Green Gold Agro Farm — Premium Cameroonian Agribusiness & Export" },
      { name: "description", content: "A premium landing page for Green Gold Agro Farm, showcasing its sustainable agribusiness and export readiness." },
      { property: "og:description", content: "A premium landing page for Green Gold Agro Farm, showcasing its sustainable agribusiness and export readiness." },
      { name: "twitter:description", content: "A premium landing page for Green Gold Agro Farm, showcasing its sustainable agribusiness and export readiness." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/328e56d6-fbcf-4244-a930-02393e5103d3/id-preview-a39ed761--bd621eba-c67a-4fbe-8fc3-41b5ae08a054.lovable.app-1776869895234.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/328e56d6-fbcf-4244-a930-02393e5103d3/id-preview-a39ed761--bd621eba-c67a-4fbe-8fc3-41b5ae08a054.lovable.app-1776869895234.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Instrument+Sans:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col bg-ivory text-forest-deep">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
