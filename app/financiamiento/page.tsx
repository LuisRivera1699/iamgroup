import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financiamiento",
};

export default function FinanciamientoPage() {
  return (
    <main
      id="contenido-principal"
      className="min-h-screen bg-gradient-to-b from-[#0e2c4d] to-[#143c69] px-4 pt-[calc(var(--header-h)+3rem)] pb-12 sm:px-6 sm:pb-16 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-white">Financiamiento</h1>
        <p className="mt-3 text-lg text-[#bbcadb]">
          Contenido en preparación. La sección reemplazará este texto.
        </p>
      </div>
    </main>
  );
}
