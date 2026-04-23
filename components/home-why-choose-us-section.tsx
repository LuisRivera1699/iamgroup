"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const REASONS = [
  {
    id: "experiencia",
    title: "Experiencia y conocimiento",
    summary: "30+ años en gestión de activos financieros.",
    detail:
      "Más de 30 años estructurando operaciones de mediano plazo con garantías hipotecarias para proteger la inversión.",
    iconSrc: "/icons/why-choose-us/experience.svg",
    iconWidth: 160,
    iconHeight: 120,
  },
  {
    id: "resultados",
    title: "Gestión con resultados",
    summary: "10+ fondos y patrimonio mayor a US$ 100M.",
    detail:
      "Hemos gestionado más de 10 fondos y mantenido rentabilidades anuales históricas entre 8% y 10%.",
    iconSrc: "/icons/why-choose-us/results.svg",
    iconWidth: 160,
    iconHeight: 120,
  },
  {
    id: "seguridad",
    title: "Inversiones a medida y seguras",
    summary: "Estrategias según perfil y soporte CAVALI.",
    detail:
      "Invertimos en papeles de empresas AAA con medio de pago identificado vía CAVALI y estructuración acorde a cada perfil.",
    iconSrc: "/icons/why-choose-us/security.svg",
    iconWidth: 160,
    iconHeight: 120,
  },
] as const;

export function HomeWhyChooseUsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section aria-labelledby="home-why-title" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div aria-hidden className="absolute inset-0 bg-[#0f2d4e]/70" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#0f2d4e]/65 via-[#143c69]/55 to-[#0f2d4e]/75"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/55 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8e2ff]">
                ¿Por qué elegirnos?
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={90}>
              <h2
                id="home-why-title"
                className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Experiencia probada y comprobada
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delayMs={180}>
            <Link
              href="/contacto"
              className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-white/45 bg-white px-5 py-2 text-sm font-semibold text-[#0f2d4e] transition-colors hover:bg-[#dbe9f6] active:bg-[#c8def2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
            >
              Contacta a un asesor
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {REASONS.map((reason, index) => {
            const isOpen = hoveredId === reason.id || expandedId === reason.id;

            return (
              <ScrollReveal
                key={reason.id}
                direction="up"
                delayMs={90 + index * 90}
                threshold={0.16}
                className="h-full"
              >
                <li className="h-full">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${reason.id}-detalle`}
                    onClick={() =>
                      setExpandedId((current) =>
                        current === reason.id ? null : reason.id,
                      )
                    }
                    onMouseEnter={() => setHoveredId(reason.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(reason.id)}
                    onBlur={() => setHoveredId(null)}
                    className="group h-full w-full cursor-pointer rounded-2xl border border-[#c2d9ec]/90 bg-[#e7f1fa]/95 p-5 text-left shadow-[0_18px_40px_-30px_rgba(20,60,105,0.7)] transition-colors hover:border-[#93badb] hover:bg-[#ecf5fd] active:bg-[#e0edf9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:p-6"
                  >
                    <article className="relative flex flex-col items-center text-center">
                      <Image
                        src={reason.iconSrc}
                        alt=""
                        width={reason.iconWidth}
                        height={reason.iconHeight}
                        aria-hidden
                        className="h-28 w-auto object-contain sm:h-32"
                      />

                      <h3 className="mt-4 text-balance text-2xl font-semibold leading-[1.15] text-[#0f2d4e]">
                        {reason.title}
                      </h3>
                      <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                        {reason.summary}
                      </p>

                      <div
                        id={`${reason.id}-detalle`}
                        className={[
                          "pointer-events-none absolute inset-x-0 bottom-0 rounded-xl border border-[#9ec1df]/70 bg-[#f8fbff]/95 px-3 py-3 text-xs font-medium leading-snug text-[#143c69] shadow-[0_12px_24px_-18px_rgba(15,45,78,0.65)] transition-all duration-250 sm:px-4 sm:text-sm",
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0",
                        ].join(" ")}
                      >
                        {reason.detail}
                      </div>

                    </article>
                  </button>
                </li>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
