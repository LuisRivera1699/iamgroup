"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

type InterestType = "inversiones" | "financiamiento";

type ContactFormState = {
  interest: InterestType | "";
  option: string;
  fullName: string;
  dni: string;
  email: string;
  phone: string;
  message: string;
  acceptedPrivacy: boolean;
};

const INTEREST_OPTIONS: Record<InterestType, string[]> = {
  inversiones: ["Fondo Medicash/Soles", "Fondo Facturas Dólares"],
  financiamiento: [
    "Factoring",
    "Confirming",
    "Adelanto de flujos",
    "Estructuración y financiamiento a mediano plazo",
  ],
};

const INITIAL_FORM: ContactFormState = {
  interest: "",
  option: "",
  fullName: "",
  dni: "",
  email: "",
  phone: "",
  message: "",
  acceptedPrivacy: false,
};

function getInterestFromQuery(rawValue: string | null): InterestType | "" {
  if (rawValue === "inversiones" || rawValue === "financiamiento") {
    return rawValue;
  }

  return "";
}

export function ContactoAdvisorFormSection() {
  const searchParams = useSearchParams();
  const interestFromQuery = getInterestFromQuery(searchParams.get("interes"));

  const [form, setForm] = useState<ContactFormState>(() => ({
    ...INITIAL_FORM,
    interest: interestFromQuery,
  }));
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setForm((prev) => {
      if (prev.interest === interestFromQuery) return prev;

      return {
        ...prev,
        interest: interestFromQuery,
        option: "",
      };
    });
  }, [interestFromQuery]);

  const availableOptions = useMemo(
    () => (form.interest ? INTEREST_OPTIONS[form.interest] : []),
    [form.interest],
  );

  const canSubmit =
    !!form.interest &&
    !!form.option &&
    !!form.fullName.trim() &&
    !!form.dni.trim() &&
    !!form.email.trim() &&
    !!form.phone.trim() &&
    !!form.message.trim() &&
    form.acceptedPrivacy;

  const updateField = <K extends keyof ContactFormState>(
    key: K,
    value: ContactFormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleInterestChange = (interest: InterestType) => {
    setForm((prev) => ({
      ...prev,
      interest,
      option: "",
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section
        aria-labelledby="contacto-thanks-title"
        className="bg-gradient-to-b from-[#edf5fc] to-[#f8fbff] py-12 sm:py-14 lg:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delayMs={40}>
            <div className="mx-auto max-w-2xl rounded-3xl border border-[#c2d9ec] bg-white p-6 text-center shadow-[0_24px_52px_-34px_rgba(15,45,78,0.38)] sm:p-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf5fc]">
                <span className="text-2xl text-[#0f2d4e]" aria-hidden>
                  ✓
                </span>
              </div>
              <h2
                id="contacto-thanks-title"
                className="mt-5 text-balance text-3xl font-semibold leading-tight text-[#0f2d4e] sm:text-4xl"
              >
                Gracias por contactarnos
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                Hemos recibido tus datos. Un asesor de IAMGroup se comunicará
                contigo cuanto antes para ayudarte con tu consulta.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-[#0f2d4e] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12"
              >
                Enviar otra consulta
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="contacto-form-title"
      className="bg-gradient-to-b from-[#edf5fc] to-[#f8fbff] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delayMs={40}>
          <div className="rounded-3xl border border-[#c2d9ec] bg-white/95 p-5 shadow-[0_24px_52px_-34px_rgba(15,45,78,0.38)] sm:p-7 lg:p-8">
            <h2
              id="contacto-form-title"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0f2d4e] sm:text-4xl"
            >
              Deja tus datos y te contactaremos cuanto antes
            </h2>

            <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1d3f62]">
                  ¿En qué estás interesado?
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ["inversiones", "Inversiones"],
                      ["financiamiento", "Financiamiento"],
                    ] as const
                  ).map(([value, label]) => {
                    const isActive = form.interest === value;
                    return (
                      <label
                        key={value}
                        className={[
                          "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors sm:min-h-12",
                          isActive
                            ? "border-[#0f2d4e] bg-[#edf5fc] text-[#0f2d4e]"
                            : "border-[#c2d9ec] bg-white text-[#1d3f62] hover:border-[#8eb3d6]",
                        ].join(" ")}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={value}
                          checked={isActive}
                          onChange={() => handleInterestChange(value)}
                          className="h-4 w-4 accent-[#0f2d4e]"
                          required
                        />
                        {label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-option"
                    className="text-sm font-semibold text-[#1d3f62]"
                  >
                    Selecciona una opción
                  </label>
                  <select
                    id="contact-option"
                    value={form.option}
                    onChange={(event) => updateField("option", event.target.value)}
                    disabled={!form.interest}
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-[#c2d9ec] bg-white px-4 py-2 text-sm text-[#0f2d4e] outline-none transition-colors focus-visible:border-[#0f2d4e] disabled:cursor-not-allowed disabled:bg-[#eef4fa] sm:min-h-12"
                  >
                    <option value="">
                      {form.interest
                        ? "Selecciona una opción"
                        : "Primero selecciona inversiones o financiamiento"}
                    </option>
                    {availableOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-fullname"
                    className="text-sm font-semibold text-[#1d3f62]"
                  >
                    Nombre y apellido
                  </label>
                  <input
                    id="contact-fullname"
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    value={form.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-[#c2d9ec] bg-white px-4 py-2 text-sm text-[#0f2d4e] outline-none transition-colors focus-visible:border-[#0f2d4e] sm:min-h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-dni"
                    className="text-sm font-semibold text-[#1d3f62]"
                  >
                    DNI
                  </label>
                  <input
                    id="contact-dni"
                    type="text"
                    inputMode="numeric"
                    placeholder="Ej: 12345678"
                    value={form.dni}
                    onChange={(event) => updateField("dni", event.target.value)}
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-[#c2d9ec] bg-white px-4 py-2 text-sm text-[#0f2d4e] outline-none transition-colors focus-visible:border-[#0f2d4e] sm:min-h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-[#1d3f62]"
                  >
                    Correo
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Ej: nombre@correo.com"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-[#c2d9ec] bg-white px-4 py-2 text-sm text-[#0f2d4e] outline-none transition-colors focus-visible:border-[#0f2d4e] sm:min-h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-semibold text-[#1d3f62]"
                  >
                    Celular
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Ej: 987654321"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    required
                    className="mt-2 min-h-11 w-full rounded-xl border border-[#c2d9ec] bg-white px-4 py-2 text-sm text-[#0f2d4e] outline-none transition-colors focus-visible:border-[#0f2d4e] sm:min-h-12"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-[#1d3f62]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Cuéntanos brevemente qué necesitas."
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-[#c2d9ec] bg-white px-4 py-3 text-sm text-[#0f2d4e] outline-none transition-colors focus-visible:border-[#0f2d4e]"
                  />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#1d3f62]">
                <input
                  type="checkbox"
                  checked={form.acceptedPrivacy}
                  onChange={(event) =>
                    updateField("acceptedPrivacy", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0f2d4e]"
                  required
                />
                <span>
                  He leído y acepto las{" "}
                  <Link
                    href="/politica-de-privacidad"
                    className="cursor-pointer font-semibold text-[#0f2d4e] underline decoration-[#5fa6d8] underline-offset-2 transition-colors hover:text-[#143c69] active:text-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e]"
                  >
                    políticas de privacidad
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-[#0f2d4e] px-7 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] disabled:cursor-not-allowed disabled:bg-[#99afc5] sm:min-h-12"
              >
                Enviar
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
