import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

/** Imagen empresarial desde Unsplash (licencia Unsplash); no usar `references/` como origen en código. */
const HERO_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export function HomeHeroBanner() {
  return (
    <div>
      <section
        className="relative isolate overflow-hidden bg-[#0f2d4e] pb-20 pt-[calc(var(--header-h)+2.2rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+2.8rem)] lg:pb-28"
        role="banner"
        aria-label="Presentación principal"
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a1624]/[0.9] via-[#0c2c50]/[0.64] to-[#0f2d4e]/[0.26]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a1624]/82 via-transparent to-[#0f2d4e]/22"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/50 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c0deff]/90">
                Asesoría y Gestión de Inversiones
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={100}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Te acompañamos en la búsqueda de{" "}
                <span className="text-[#fbb03b]">
                  seguridad y rentabilidad
                </span>{" "}
                para tus inversiones
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={200}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/inversiones"
                  className="inline-flex min-h-11 min-w-[10rem] cursor-pointer items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                >
                  Ir a inversiones
                </Link>
                <Link
                  href="/financiamiento"
                  className="inline-flex min-h-11 min-w-[10rem] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 active:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                >
                  Ir a financiamiento
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}