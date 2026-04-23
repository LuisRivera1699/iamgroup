import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { ContactoAdvisorFormSection } from "@/components/contacto-advisor-form-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <main id="contenido-principal" className="bg-[#0f2d4e]">
      <section className="relative isolate overflow-hidden pb-20 pt-[calc(var(--header-h)+2.2rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+2.8rem)] lg:pb-28">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0a1624]/92 via-[#0f2d4e]/78 to-[#0f2d4e]/48"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/86 via-transparent to-[#0f2d4e]/30"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/60 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
                Contacto
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={90}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Conversa con un{" "}
                <span className="text-[#fbb03b]">asesor especializado</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={170}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#d1deed] sm:text-lg">
                Cuéntanos en qué estás interesado y te contactaremos cuanto
                antes para darte una orientación clara y personalizada.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="bg-gradient-to-b from-[#edf5fc] to-[#f8fbff] py-12 sm:py-14 lg:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 text-sm font-medium text-[#1d3f62] sm:px-6 lg:px-8">
              Cargando formulario...
            </div>
          </section>
        }
      >
        <ContactoAdvisorFormSection />
      </Suspense>
    </main>
  );
}
