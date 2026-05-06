"use client";

import Image from "next/image";
import { useState } from "react";
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

const GOVERNANCE_COMMITTEES = [
  {
    id: "comite-directorio",
    title: "Comité de Directorio",
    points: [
      "Prioriza decisiones estratégicas y seguimiento institucional",
      "Alinea gestión, riesgos y objetivos de largo plazo",
    ],
    iconSrc: "/icons/gobierno-corporativo/comite-directorio.svg",
  },
  {
    id: "oficial-cumplimiento",
    title: "Oficial de Cumplimiento Corporativo",
    points: [
      "Monitoreo regulatorio transversal en toda la organización",
      "Reporte directo a la UIF de la SBS para reforzar cumplimiento",
    ],
    iconSrc: "/icons/gobierno-corporativo/cumplimiento-splaft.svg",
  },
  {
    id: "comite-vigilancia",
    title: "Comité de vigilancia",
    points: [
      "Supervisa controles, alertas y cumplimiento interno",
      "Refuerza trazabilidad en procesos críticos",
    ],
    iconSrc: "/icons/gobierno-corporativo/comite-vigilancia.svg",
  },
  {
    id: "comite-inversiones",
    title: "Comité de Inversiones",
    points: [
      "Evalúa oportunidades con disciplina de riesgo",
      "Monitorea desempeño y consistencia de portafolios",
    ],
    iconSrc: "/icons/gobierno-corporativo/comite-inversiones.svg",
  },
] as const;

const COMMITTEE_MEMBER_GROUPS = [
  {
    id: "comite-inversiones",
    eyebrow: "Miembros del comité de inversiones",
    title: "Criterio financiero para evaluar oportunidades con rigor.",
    members: [
      {
        id: "luis-castro",
        name: "Luis Castro",
        role: "Miembro del Comité de Inversiones",
        image:
          "https://iamgroup.pe/wp-content/uploads/2024/03/Formato-Resena-Directores-03.png",
        bio: "Administrador de Empresas con Maestría en Banca y Finanzas en el IDE en Madrid España, con más de 25 años de experiencia en el sector financiero, habiendo trabajado en puestos de dirección gerente en los bancos BBVA, Santander y Banbif en Banca Comercial, empresarial y corporativa, Gerente general de Inkapital Asset Management SAC.",
      },
      {
        id: "sergio-de-albertis",
        name: "Sergio de Albertis",
        role: "Miembro del Comité de Inversiones",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
        bio: "Economista de la Universidad Ricardo Palma, con más de 25 años de experiencia en el sector financiero en el mercado de capitales, socio fundador de Private Investor Peru SAC y Placement Financial SAC, asesoría de inversiones a nivel internacional y local de portafolios de más de US$50,000,000, Representante de Seminario Agente de Bolsa.",
      },
      {
        id: "christian-armas",
        name: "Christian Armas",
        role: "Miembro del Comité de Inversiones",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
        bio: "Profesional en administración de empresas con estudios en USMP, ESAN y CENTRUM PUCP, Ejecutivo Senior en banca y finanzas con solidos conocimiento en la gestión comercial, inversiones y banca corporativa a través de los bancos BANBIF, Pichincha y Banco General de Panamá.",
      },
    ],
  },
  {
    id: "comite-vigilancia",
    eyebrow: "Miembros del comité de vigilancia",
    title: "Supervisión independiente para fortalecer control y transparencia.",
    members: [
      {
        id: "eduardo-morales",
        name: "Eduardo Morales",
        role: "Miembro del Comité de Vigilancia",
        image:
          "https://iamgroup.pe/wp-content/uploads/2024/03/Formato-Resena-Directores-02.png",
        bio: "Director de Caja Huancayo, ex Gerente General del Banco Financiero, hoy Pichincha, ex Gerente de Negocios de Interbank y Banbif. Economista de la Universidad de Lima, exdecano en la facultad de Economía de la Universidad de Lima, docente de Economía de la Universidad San Marcos.",
      },
      {
        id: "carlos-de-albertis",
        name: "Carlos de Albertis",
        role: "Miembro del Comité de Vigilancia",
        image:
          "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=900&q=80",
        bio: "Gestor y Asesor de Inversiones con más de 15 años de experiencia en el mercado de capitales e inversiones a través de las Empresas Prívate Investors SAC y Placement Financial SAC, que asesora un portafolio de más de US$50 MM en inversiones de renta fija y variable en el mercado local e internacional. Profesional de Administración de Empresas en la U. Ricardo Palma, con post grado en administración en la Universidad Católica.",
      },
      {
        id: "gonzalo-bonilla",
        name: "Gonzalo Bonilla",
        role: "Miembro del Comité de Vigilancia",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        bio: "Profesional en Administración de Empresas de la Universidad del Pacifico con MBA en UNIR-MEXICO, con experiencia de más de 10 años en riesgos de cartera, operativos y seguimiento, control de cartera e interno en banca y fondos de inversión.",
      },
    ],
  },
] as const;

type GovernanceCommittee = (typeof GOVERNANCE_COMMITTEES)[number];
type CommitteeMemberGroup = (typeof COMMITTEE_MEMBER_GROUPS)[number];

const COMMITTEE_SECTORS = [
  {
    id: "comite-directorio",
    path: "M100 100L100 22A78 78 0 0 0 22 100Z",
    fill: "#9bb2cb",
    iconClassName: "left-[calc(50%-3.9rem)] top-[calc(50%-3.9rem)] -translate-x-1/2 -translate-y-1/2",
    cardClassName: "left-0 top-0 w-[21rem]",
    connectorPath: "M410 205L252 76",
    connectorDot: { cx: 410, cy: 205 },
    revealDirection: "right",
  },
  {
    id: "oficial-cumplimiento",
    path: "M100 100L178 100A78 78 0 0 1 100 178Z",
    fill: "#d1deed",
    iconClassName: "left-[calc(50%+3.9rem)] top-[calc(50%+3.9rem)] -translate-x-1/2 -translate-y-1/2",
    cardClassName: "bottom-0 right-0 w-[21rem]",
    connectorPath: "M590 355L748 484",
    connectorDot: { cx: 590, cy: 355 },
    revealDirection: "left",
  },
  {
    id: "comite-vigilancia",
    path: "M100 100L100 22A78 78 0 0 1 178 100Z",
    fill: "#c8e2ff",
    iconClassName: "left-[calc(50%+3.9rem)] top-[calc(50%-3.9rem)] -translate-x-1/2 -translate-y-1/2",
    cardClassName: "right-0 top-0 w-[21rem]",
    connectorPath: "M590 205L748 76",
    connectorDot: { cx: 590, cy: 205 },
    revealDirection: "left",
  },
  {
    id: "comite-inversiones",
    path: "M100 100L22 100A78 78 0 0 0 100 178Z",
    fill: "#fbb03b",
    iconClassName: "left-[calc(50%-3.9rem)] top-[calc(50%+3.9rem)] -translate-x-1/2 -translate-y-1/2",
    cardClassName: "bottom-0 left-0 w-[21rem]",
    connectorPath: "M410 355L252 484",
    connectorDot: { cx: 410, cy: 355 },
    revealDirection: "right",
  },
] as const;

function CommitteeSectorGraphic({
  committee,
  sector,
}: {
  committee: GovernanceCommittee;
  sector: (typeof COMMITTEE_SECTORS)[number];
}) {
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 overflow-visible"
      >
        <path
          d={sector.path}
          fill={sector.fill}
          stroke="#0f2d4e"
          strokeWidth="2.2"
          className="pointer-events-auto cursor-pointer transition duration-300 ease-out group-hover/committee:brightness-105 group-focus-within/committee:brightness-105"
        />
      </svg>

      <span
        className={[
          "pointer-events-auto absolute z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-[#0f2d4e]/35 bg-white shadow-[0_16px_28px_-18px_rgba(15,45,78,0.65)] transition-[border-color,box-shadow] duration-300 ease-out group-hover/committee:border-[#0f2d4e] group-hover/committee:shadow-[0_18px_32px_-18px_rgba(15,45,78,0.8)] group-focus-within/committee:border-[#0f2d4e] group-focus-within/committee:shadow-[0_18px_32px_-18px_rgba(15,45,78,0.8)]",
          sector.iconClassName,
        ].join(" ")}
      >
        <Image
          src={committee.iconSrc}
          alt=""
          width={80}
          height={80}
          aria-hidden
          className="h-11 w-11 object-contain"
        />
      </span>
    </>
  );
}

function CommitteeInfoCard({
  committee,
  className = "",
  isOpen,
  onToggle,
}: {
  committee: GovernanceCommittee;
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={`${committee.title}: ${committee.points.join(". ")}`}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        onToggle();
      }}
      className={[
        "group/card h-full cursor-pointer rounded-2xl border border-[#0f2d4e]/35 bg-[#d1deed] p-4 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.55)] outline-none transition duration-300 ease-out hover:-translate-y-1 hover:border-[#0f2d4e] hover:bg-[#d1deed] active:translate-y-0 focus-visible:border-[#0f2d4e] focus-visible:ring-2 focus-visible:ring-[#fbb03b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#dceaf7]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0f2d4e]/20 bg-[#d1deed]">
          <Image
            src={committee.iconSrc}
            alt=""
            width={80}
            height={80}
            aria-hidden
            className="h-9 w-9 object-contain"
          />
        </span>
        <h4 className="text-base font-semibold leading-tight text-[#0f2d4e]">
          {committee.title}
        </h4>
      </div>

      <ul
        className={[
          "grid overflow-hidden transition-all duration-500 ease-out group-hover/card:mt-4 group-hover/card:max-h-32 group-hover/card:opacity-100 group-focus-within/card:mt-4 group-focus-within/card:max-h-32 group-focus-within/card:opacity-100 group-hover/committee:mt-4 group-hover/committee:max-h-32 group-hover/committee:opacity-100 group-focus-within/committee:mt-4 group-focus-within/committee:max-h-32 group-focus-within/committee:opacity-100",
          isOpen ? "mt-4 max-h-32 gap-2 opacity-100" : "mt-0 max-h-0 gap-2 opacity-0",
        ].join(" ")}
      >
        {committee.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm leading-relaxed text-[#1d3f62]"
          >
            <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbb03b]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CommitteeDesktopDiagram() {
  const [openCommitteeId, setOpenCommitteeId] = useState<string | null>(null);

  const toggleCommittee = (committeeId: string) => {
    setOpenCommitteeId((currentId) =>
      currentId === committeeId ? null : committeeId,
    );
  };

  return (
    <div className="relative min-h-[560px]">
      <ScrollReveal
        direction="none"
        delayMs={160}
        className="pointer-events-none absolute inset-0"
      >
        <svg
          viewBox="0 0 200 200"
          role="img"
          aria-label="Diagrama circular con cuatro elementos de gobierno"
          className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_26px_34px_rgba(15,45,78,0.16)]"
        >
          <circle cx="100" cy="100" r="78" fill="#d1deed" stroke="#0f2d4e" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="30" fill="#ffffff" stroke="#0f2d4e" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="18" fill="#d1deed" stroke="#0f2d4e" strokeWidth="1.5" />
        </svg>
      </ScrollReveal>

      {GOVERNANCE_COMMITTEES.map((committee, index) => {
        const sector = COMMITTEE_SECTORS[index];

        return (
          <div
            key={committee.id}
            className="group/committee pointer-events-none absolute inset-0"
          >
            <svg
              viewBox="0 0 1000 560"
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            >
              <path
                d={sector.connectorPath}
                fill="none"
                stroke="#0f2d4e"
                strokeWidth="1.4"
                strokeLinecap="round"
                className="opacity-35 transition duration-300 group-hover/committee:opacity-80 group-focus-within/committee:opacity-80"
              />
              <circle
                cx={sector.connectorDot.cx}
                cy={sector.connectorDot.cy}
                r="7"
                fill="#fbb03b"
                stroke="#dceaf7"
                strokeWidth="3"
                className="opacity-90 transition duration-300 group-hover/committee:opacity-100 group-focus-within/committee:opacity-100"
              />
            </svg>

            <ScrollReveal
              direction="none"
              delayMs={180 + index * 70}
              className="pointer-events-none absolute inset-0 z-10"
            >
              <CommitteeSectorGraphic committee={committee} sector={sector} />
            </ScrollReveal>

            <ScrollReveal
              direction={sector.revealDirection}
              delayMs={230 + index * 80}
              className={[
                "pointer-events-auto absolute z-30",
                sector.cardClassName,
              ].join(" ")}
            >
              <CommitteeInfoCard
                committee={committee}
                isOpen={openCommitteeId === committee.id}
                onToggle={() => toggleCommittee(committee.id)}
              />
            </ScrollReveal>
          </div>
        );
      })}

      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2"
      >
        <circle cx="100" cy="100" r="31" fill="#ffffff" stroke="#0f2d4e" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="18" fill="#d1deed" stroke="#0f2d4e" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function CommitteeMemberCard({
  member,
  index,
}: {
  member: CommitteeMemberGroup["members"][number];
  index: number;
}) {
  return (
    <ScrollReveal
      direction="up"
      delayMs={120 + index * 90}
      threshold={0.14}
      className="h-full"
    >
      <li className="h-full">
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#b7cde3] bg-white shadow-[0_20px_42px_-30px_rgba(15,45,78,0.48)]">
          <div className="relative overflow-hidden border-b border-[#d1deed]">
            <Image
              src={member.image}
              alt={`Retrato de ${member.name}`}
              width={1200}
              height={1600}
              sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 100vw"
              className="h-72 w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] group-focus-within:scale-[1.03] sm:h-80"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/90 via-[#0f2d4e]/32 to-transparent" />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h4 className="text-2xl font-semibold leading-tight text-[#0f2d4e]">
              {member.name}
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
              {member.bio}
            </p>
          </div>
        </article>
      </li>
    </ScrollReveal>
  );
}

function CommitteeMembersSection({ group }: { group: CommitteeMemberGroup }) {
  return (
    <section aria-labelledby={`${group.id}-members-title`} className="mt-8">
      <div className="rounded-3xl border border-[#b8d0e5] bg-[#dceaf7] p-5 shadow-[0_24px_48px_-34px_rgba(15,45,78,0.35)] sm:p-6 lg:p-8">
        <div className="max-w-4xl">
          <ScrollReveal direction="left" delayMs={40}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
              {group.eyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delayMs={110}>
            <h3
              id={`${group.id}-members-title`}
              className="mt-3 text-balance text-3xl font-semibold leading-tight text-[#0f2d4e] sm:text-4xl"
            >
              {group.title}
            </h3>
          </ScrollReveal>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {group.members.map((member, index) => (
            <CommitteeMemberCard key={member.id} member={member} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}


export function GobiernoCorporativoStructureSection() {
  const [openCommitteeId, setOpenCommitteeId] = useState<string | null>(null);

  const toggleCommittee = (committeeId: string) => {
    setOpenCommitteeId((currentId) =>
      currentId === committeeId ? null : committeeId,
    );
  };

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
            <span className="text-[#fbb03b]">control, medición y transparencia</span>{" "}
            en cada decisión.
          </h2>
        </ScrollReveal>


        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {GOVERNANCE_PILLARS.map((pillar, index) => (
            <ScrollReveal
              key={pillar.id}
              direction="up"
              delayMs={130 + index * 80}
              threshold={0.14}
              className="h-full"
            >
              <li className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#0f2d4e] bg-[#d1deed] p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6">
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
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <div
          aria-labelledby="gobierno-corporativo-comites-title"
          className="mt-8 rounded-3xl border border-[#b8d0e5] bg-[#dceaf7] p-5 shadow-[0_24px_48px_-34px_rgba(15,45,78,0.38)] sm:p-6 lg:p-8"
        >
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <ScrollReveal direction="left" delayMs={80}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
                  Nuestros comités
                </p>
                <h3
                  id="gobierno-corporativo-comites-title"
                  className="mt-3 text-balance text-3xl font-semibold leading-tight text-[#0f2d4e] sm:text-4xl"
                >
                  Especialización para decidir, vigilar e invertir con rigor.
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delayMs={140}>
              <p className="text-sm leading-relaxed text-[#1d3f62] sm:text-base lg:max-w-xl lg:justify-self-end">
                Nuestros comités fortalecen la supervisión, el análisis y la
                ejecución de decisiones clave bajo criterios de control,
                transparencia y responsabilidad institucional.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-8 lg:hidden">
            <ul className="grid gap-3">
              {GOVERNANCE_COMMITTEES.map((committee, index) => (
                <ScrollReveal
                  key={committee.id}
                  direction="up"
                  delayMs={170 + index * 70}
                  threshold={0.14}
                >
                  <li>
                    <CommitteeInfoCard
                      committee={committee}
                      isOpen={openCommitteeId === committee.id}
                      onToggle={() => toggleCommittee(committee.id)}
                    />
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <div className="mt-8 hidden lg:block">
            <CommitteeDesktopDiagram />
          </div>
        </div>

        {COMMITTEE_MEMBER_GROUPS.map((group) => (
          <CommitteeMembersSection key={group.id} group={group} />
        ))}

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
    </section>
  );
}
