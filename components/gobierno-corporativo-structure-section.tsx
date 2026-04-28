"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const GOVERNANCE_PILLARS = [
  {
    id: "directorio",
    title: "Directorio",
    points: [
      "Revisión de dirección, estrategia y desempeño de la gestora",
      "Seguimiento de los fondos administrados con enfoque transparente",
    ],
    iconSrc: "/icons/gobierno-corporativo/directorio.svg",
  },
  {
    id: "comites",
    title: "Comités",
    points: [
      "Comité de Inversiones: evalúa operaciones según políticas vigentes",
      "Comité de Vigilancia: supervisa el reglamento de los fondos",
    ],
    iconSrc: "/icons/gobierno-corporativo/comites.svg",
  },
  {
    id: "cumplimiento",
    title: "Oficial de Cumplimiento Corporativo",
    points: [
      "Monitoreo regulatorio transversal en toda la organización",
      "Reporte directo a la UIF de la SBS para reforzar cumplimiento",
    ],
    iconSrc: "/icons/gobierno-corporativo/cumplimiento-splaft.svg",
  },
] as const;

const STAKEHOLDER_ACTIONS = [
  {
    id: "dialogo",
    title: "Diálogo continuo",
    iconSrc: "/icons/gobierno-corporativo/dialogo-stakeholders.svg",
  },
  {
    id: "transparencia",
    title: "Transparencia informativa",
    iconSrc: "/icons/gobierno-corporativo/transparencia-reportes.svg",
  },
  {
    id: "alineamiento",
    title: "Alineamiento de intereses",
    iconSrc: "/icons/gobierno-corporativo/alineamiento-intereses.svg",
  },
] as const;

const COMMITTEE_IMAGES = [
  {
    id: "comite-inversiones",
    title: "Comité de Inversiones",
    description: "Sesiones de evaluación y seguimiento de operaciones.",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: "comite-vigilancia",
    title: "Comité de Vigilancia",
    description: "Supervisión de políticas, reglamentos y controles internos.",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: "comite-riesgos",
    title: "Comité de Riesgos",
    description: "Análisis de escenarios y protección del patrimonio gestionado.",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80",
  },
] as const;

export function GobiernoCorporativoStructureSection() {
  const [isCommitteesModalOpen, setIsCommitteesModalOpen] = useState(false);
  const [activeCommitteeIndex, setActiveCommitteeIndex] = useState(0);
  const activeCommittee = COMMITTEE_IMAGES[activeCommitteeIndex];

  const goToPreviousCommittee = () => {
    setActiveCommitteeIndex(
      (index) => (index - 1 + COMMITTEE_IMAGES.length) % COMMITTEE_IMAGES.length,
    );
  };

  const goToNextCommittee = () => {
    setActiveCommitteeIndex((index) => (index + 1) % COMMITTEE_IMAGES.length);
  };

  useEffect(() => {
    if (!isCommitteesModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsCommitteesModalOpen(false);
      if (event.key === "ArrowLeft") goToPreviousCommittee();
      if (event.key === "ArrowRight") goToNextCommittee();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCommitteesModalOpen]);

  return (
    <section
      id="gobierno-corporativo-detalle"
      aria-labelledby="gobierno-corporativo-detalle-title"
      className="scroll-mt-[calc(var(--header-h)+1.5rem)] bg-gradient-to-b from-[#edf5fc] via-[#f6faff] to-[#e9f2fb] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left" delayMs={10}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
            Buen gobierno corporativo
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" delayMs={90}>
          <h2
            id="gobierno-corporativo-detalle-title"
            className="mt-3 max-w-5xl text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0f2d4e] sm:text-4xl lg:text-5xl"
          >
            Estructura institucional con{" "}
            <span className="text-[#fbb03b]">control, disciplina y</span>{" "}
            trazabilidad en cada decisión.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="left" delayMs={170}>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#1d3f62] sm:text-base">
            Nuestra gobernanza combina dirección estratégica, supervisión
            regulatoria y comités especializados para proteger la operación y
            fortalecer la confianza de inversionistas, clientes y aliados.
          </p>
        </ScrollReveal>

        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {GOVERNANCE_PILLARS.map((pillar, index) => (
            <ScrollReveal
              key={pillar.id}
              direction="up"
              delayMs={130 + index * 80}
              threshold={0.14}
              className="h-full"
            >
              <li className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#c2d9ec] bg-white p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6">
                  <div className="flex h-14 items-center sm:h-16">
                    <Image
                      src={pillar.iconSrc}
                      alt=""
                      width={176}
                      height={120}
                      aria-hidden
                      className="h-12 w-auto object-contain sm:h-14"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#0f2d4e]">
                    {pillar.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[#1d3f62]"
                      >
                        <span aria-hidden className="mt-0.5 text-[#0f2d4e]">
                          →
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {pillar.id === "comites" ? (
                    <button
                      type="button"
                      onClick={() => setIsCommitteesModalOpen(true)}
                      className="mt-6 inline-flex min-h-11 w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-[#fbb03b] px-5 py-2 text-sm font-semibold text-[#0f2d4e] transition-colors hover:bg-[#ffc35f] active:bg-[#e49a22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
                    >
                      Ver comités
                      <span aria-hidden className="text-base leading-none">
                        →
                      </span>
                    </button>
                  ) : null}
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal direction="up" delayMs={120}>
          <div className="mt-8 rounded-3xl border border-[#b8d0e5] bg-[#dceaf7] p-6 shadow-[0_20px_40px_-34px_rgba(15,45,78,0.35)] lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_1.75fr] lg:items-start">
              <div>
                <h3 className="text-balance text-3xl font-semibold leading-tight text-[#0f2d4e] sm:text-4xl">
                  Compromiso con grupos de interés
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                  Mantenemos una relación cercana y transparente con
                  inversionistas, empresas, reguladores y aliados, promoviendo
                  decisiones alineadas al interés de largo plazo.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-3">
                {STAKEHOLDER_ACTIONS.map((action) => (
                  <li key={action.id}>
                    <article className="h-full rounded-2xl border border-[#b8d0e5] bg-white/85 p-4 text-center">
                      <Image
                        src={action.iconSrc}
                        alt=""
                        width={120}
                        height={84}
                        aria-hidden
                        className="mx-auto h-12 w-auto object-contain"
                      />
                      <p className="mt-3 text-sm font-semibold leading-snug text-[#0f2d4e]">
                        {action.title}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {isCommitteesModalOpen ? (
        <div
          className="fixed inset-0 z-[80] bg-[#071a2f]/95 px-4 py-4 backdrop-blur-md sm:px-6 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="comites-modal-title"
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-[#88aaca]/45 bg-[#0f2d4e] shadow-[0_28px_80px_-36px_rgba(0,0,0,0.85)]">
            <div className="flex items-center justify-between gap-4 border-b border-[#88aaca]/35 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
                  Gobierno corporativo
                </p>
                <h2
                  id="comites-modal-title"
                  className="mt-1 text-2xl font-semibold leading-tight text-white sm:text-3xl"
                >
                  Comités IAMGroup
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCommitteesModalOpen(false)}
                className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/15 active:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]"
                aria-label="Cerrar modal de comités"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                key={activeCommittee.id}
                src={activeCommittee.src}
                alt={activeCommittee.title}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#071a2f]/88 via-[#0f2d4e]/45 to-[#071a2f]/30"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#071a2f]/92 via-transparent to-transparent"
              />

              <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-8 lg:p-10">
                <div className="max-w-2xl rounded-2xl border border-white/15 bg-[#071a2f]/55 p-5 text-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:p-6">
                  <p className="text-sm font-semibold text-[#fbb03b]">
                    {`${activeCommitteeIndex + 1}`.padStart(2, "0")} /{" "}
                    {`${COMMITTEE_IMAGES.length}`.padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                    {activeCommittee.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d1deed] sm:text-base">
                    {activeCommittee.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-y-0 left-3 z-20 flex items-center sm:left-5">
                <button
                  type="button"
                  onClick={goToPreviousCommittee}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#0f2d4e]/65 text-2xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-[#0f2d4e]/85 active:bg-[#071a2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:h-12 sm:w-12"
                  aria-label="Ver comité anterior"
                >
                  ‹
                </button>
              </div>
              <div className="absolute inset-y-0 right-3 z-20 flex items-center sm:right-5">
                <button
                  type="button"
                  onClick={goToNextCommittee}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#0f2d4e]/65 text-2xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-[#0f2d4e]/85 active:bg-[#071a2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:h-12 sm:w-12"
                  aria-label="Ver siguiente comité"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 border-t border-[#88aaca]/35 px-5 py-4">
              {COMMITTEE_IMAGES.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveCommitteeIndex(index)}
                  aria-label={`Ver ${image.title}`}
                  className={[
                    "h-2.5 cursor-pointer rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff]",
                    index === activeCommitteeIndex
                      ? "w-10 bg-[#fbb03b]"
                      : "w-2.5 bg-white/35 hover:bg-white/60",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
