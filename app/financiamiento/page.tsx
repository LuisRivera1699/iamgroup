import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinanciamientoProductsSection } from "@/components/financiamiento-products-section";
import { HomeAlliancesSection } from "@/components/home-alliances-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Financiamiento",
};

export default function FinanciamientoPage() {
  return (
    <main id="contenido-principal" className="bg-[#0f2d4e]">
      <section className="relative isolate overflow-hidden pb-24 pt-[calc(var(--header-h)+2.2rem)] sm:pb-28 sm:pt-[calc(var(--header-h)+2.8rem)] lg:pb-32">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0a1624]/92 via-[#0f2d4e]/76 to-[#0f2d4e]/46"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/84 via-transparent to-[#0f2d4e]/30"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/60 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
                Financiamiento
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={90}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Impulsa tu empresa con{" "}
                <span className="text-[#fbb03b]">liquidez estratégica</span> y
                financiamiento a medida.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={180}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#d1deed] sm:text-lg">
                Estructuramos soluciones flexibles para capital de trabajo y
                crecimiento operativo, con evaluación financiera rigurosa y
                trazabilidad de pago.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={250}>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/contacto?interes=financiamiento"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                >
                  Contacta a un asesor
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FinanciamientoProductsSection />
      <HomeAlliancesSection />
    </main>
  );
}
