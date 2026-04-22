"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState, useSyncExternalStore } from "react";
import { INVESTOR_PORTAL_URL, LOGO_IAM_URL } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/inversiones", label: "Inversiones" },
  { href: "/financiamiento", label: "Financiamiento" },
  { href: "/gobierno-corporativo", label: "Gobierno corporativo" },
  { href: "/contacto", label: "Contacto" },
] as const;

function navLinkClass(active: boolean) {
  return [
    "rounded-sm text-sm font-medium text-white/95 transition-colors hover:text-white",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]/80",
    active ? "text-white" : "text-white/90",
  ].join(" ");
}

const SCROLL_ELEVATE_PX = 8;

/** `true` cuando aún no ha habido desplazamiento (tope) → fondo transparente. */
function useIsAtPageTop() {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window === "undefined") {
        return () => undefined;
      }
      const onScroll = () => onChange();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    },
    () => window.scrollY <= SCROLL_ELEVATE_PX,
    () => true,
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isAtTop = useIsAtPageTop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300",
        isAtTop
          ? "border-transparent bg-transparent shadow-none [backdrop-filter:none]"
          : "border-[#1d3f62]/40 bg-[#0f2d4e] shadow-sm [backdrop-filter:none]",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="relative shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]/80"
        >
          <Image
            src={LOGO_IAM_URL}
            alt="IAMGroup"
            width={200}
            height={56}
            className="h-10 w-auto sm:h-11"
            priority
            sizes="(max-width: 640px) 160px, 200px"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Principal"
        >
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(!!active)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={INVESTOR_PORTAL_URL}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mis inversiones
          </a>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md text-white/95 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]/80"
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">
              {mobileOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {mobileOpen ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={[
          "mx-auto w-full max-w-7xl overflow-hidden border-white/10 transition-all duration-300 ease-out lg:hidden",
          mobileOpen
            ? "max-h-[32rem] border-t border-white/10 py-3 opacity-100"
            : "max-h-0 border-t-0 border-transparent py-0 opacity-0 [pointer-events:none]",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col gap-1 px-4 sm:px-6 lg:px-8"
          aria-label="Móvil"
        >
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={[
                  "rounded-md px-1 py-2.5 text-base font-medium text-white/95",
                  active && "text-white",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={INVESTOR_PORTAL_URL}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white py-3 text-center text-sm font-semibold text-[#0f2d4e]"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
          >
            Mis inversiones
          </a>
        </nav>
      </div>
    </header>
  );
}
