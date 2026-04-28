import Image from "next/image";
import Link from "next/link";

/** Imagen empresarial desde Unsplash (licencia Unsplash); no usar `references/` como origen en código. */
const HERO_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80";

export function HomeHeroBanner() {
  return (
    <div>
      <section
        className="relative w-full"
        role="banner"
        aria-label="Presentación principal"
      >
        <h1 className="sr-only">
          IAMGroup — asesoría y gestión de inversiones
        </h1>
        <div className="relative h-[min(85dvh,900px)] min-h-[22rem] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0a1624]/[0.88] via-[#0c2c50]/[0.55] to-[#0f2d4e]/[0.2]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a1624]/80 via-transparent to-[#0f2d4e]/20"
              aria-hidden
            />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c0deff]/90">
              Asesoría y Gestión de Inversiones
            </p>
            <h2 className="mt-2 max-w-[20ch] text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:max-w-[22ch] sm:text-4xl lg:max-w-[26ch] lg:text-5xl">
              Te acompañamos en la búsqueda de seguridad y rentabilidad para tus inversiones
            </h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}