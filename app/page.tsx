import { HomeHeroCarousel } from "@/components/home-hero-carousel";

export default function Home() {
  return (
    <main
      id="contenido-principal"
      className="relative -mt-[var(--header-overlap)] min-h-0 scroll-mt-[var(--header-overlap)]"
    >
      <HomeHeroCarousel />
    </main>
  );
}
