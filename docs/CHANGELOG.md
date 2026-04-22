# Changelog (proyecto)

Entradas breves. Formato: `## YYYY-MM-DD` y viñetas.

## 2026-04-23

- Home: el hero se desplaza con margen negativo (`--header-overlap`) para quedar **debajo** del header; así el “transparente” del header deja ver la **imagen del carrusel**, no el fondo de `body`. Ajuste fino del token si la altura real del header cambia.
- Header: en el tope del documento el fondo es **transparente** (sin capa azul al 50 %); con `scrollY` por encima del umbral, **fondo sólido** `#0f2d4e`. Estado expresado como `useIsAtPageTop` + `getServerSnapshot` true (sin “scrolling” en el HTML inicial). **Nota:** evitar confundir el semitransparente anterior con “barra de color” en el hero.
- Regla **`iamgroup-user-private-folders`**: `current-page/` y `references/` quedan fuera del uso proactivo del agente; nada bajo `references/` se enlaza en el código del sitio; el usuario puede @ archivos de `references/` como contexto del chat. Sustituye `iamgroup-ignore-user-draft-folder`. `.cursorignore` incluye `references/`.

## 2026-04-22

- Hero: fondos del carrusel sustituidos por URLs de **Unsplash** (imágenes de stock con licencia adecuada); eliminación de `public/hero/*` que provenía de `references/`; `next.config` amplía `remotePatterns` a `images.unsplash.com`. La carpeta `references/` no se usa como origen de assets en código (regla `iamgroup-user-private-folders`).
- Hero de inicio: carrusel de 3 diapositivas (institucional, financiamiento, inversiones) con transición por opacidad, controles, puntos, flechas, teclado, swipe en táctil, autopause al hover o si la pestaña no está visible, respeto a `prefers-reduced-motion` y CTA a rutas del sitio.
- Inicializado Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, con home, rutas de menú (placeholders) y header sticky (fondo en el tope y sólido al scroll; ver entrada 2026-04-23), logo IAMGroup, CTA «Mis inversiones» (URL configurable) y patrón de colores alineado a `colors.md`.
- Regla `iamgroup-ui-responsive` (siempre activa) y actualización de skill: la UI debe ser **mobile-first** y con la misma exigencia en móvil que en desktop; experiencia de marca enlaza a esta regla.
- Regla `iamgroup-ui-interactive-states`: anclas y botones con `cursor-pointer` e **idle, hover, active, focus-visible y disabled** de forma coherente (documentación y skill actualizados).
- Regla `iamgroup-ui-assets`: iconos en **SVG**; imágenes de bancos gratuitos (Unsplash, Pexels, etc.) y **verificar** que funcionan antes de integrar; skill y `docs/README` actualizados.

## 2026-04-21

- Añadida documentación obligatoria en `docs/` (rutas, changelog, índice) y regla `iamgroup-project-documentation` en `.cursor/rules/`.
