---
name: iamgroup-investor-website
description: Builds the IAMGroup informational Next.js + Tailwind site with investor- and engineering-grade UX, in-repo copy, and no CMS. Use when working in this repository, on pages or components, or when the user mentions IAMGroup, the corporate site, static pages, or marketing copy migration.
---

# IAMGroup — sitio informativo (Next.js + Tailwind)

## Antes de implementar

1. Revisar reglas del proyecto en `.cursor/rules/`: **stack** (Next + Tailwind, sin backend/CMS), **experiencia** (tono inversor/tech, calidad pro), **colores** (`iamgroup-ui-brand-colors` + `colors/colors.md`), **`iamgroup-ui-responsive`** (móvil primero), **`iamgroup-ui-interactive-states`** (enlaces/botones), **`iamgroup-ui-assets`** (iconos SVG; imágenes de bancos gratuitos tipo Unsplash/Pexels y verificar carga), **`iamgroup-user-private-folders`** (`current-page/` y `references/` no se inspeccionan ni se enlazan en código; el usuario puede @ archivos de `references/` como contexto del chat), y **`iamgroup-project-documentation`** (actualizar `docs/` al cambiar rutas o el proyecto de forma sustancial).
2. Revisar `logo/logo.md` solo si aplica a assets; el copy y las instrucciones de contenido vienen del **chat** o del **código** fuera de carpetas excluidas.
3. No inventar APIs ni flujos de “editor de contenido”; el contenido es estático o generado en build desde el repo.

## Principios de implementación

- **App Router, TypeScript, Tailwind** — Server Components por defecto; componentes cliente solo con motivo.
- **Marca visual:** tokens y hex desde `colors/colors.md`; respeto estricto a reglas de fondo de sección (azules o imagen, no gris/blanco/amarillo plano de sección entera, salvo lo que el propio `colors.md` permita en el futuro).
- **Tono de producto:** precisión, confianza, legibilidad; visual “institucional tech”, no promesa vacía.
- **Calidad senior:** semántica HTML, `next/image` con `sizes` razonable, `metadata` y títulos por página, foco visible, contraste adecuado.
- **Responsive:** diseño y Tailwind **mobile-first**; validar layout y legibilidad en viewports pequeños (~375px) antes de dar por hecho el bloque.
- **Interactivo:** `cursor-pointer` y estados **idle, hover, active, focus-visible, disabled** en anclas y botones (regla `iamgroup-ui-interactive-states`).
- **Activos:** iconos en **SVG**; fotos desde bancos **gratuitos** (p. ej. Unsplash, Pexels) con licencia clara y **comprobar que la imagen carga** (`remotePatterns`, URL o `public/`) — regla `iamgroup-ui-assets`.

## Checklist breve (páginas o secciones nuevas)

- [ ] Jerarquía clara (h1 único por vista donde corresponda, h2/h3 consistentes)
- [ ] Colores y fondos alineados a `colors/colors.md`
- [ ] Imágenes optimizadas, con `alt`, origen de stock gratis verificado; iconos en SVG
- [ ] Sin dependencias a backend/CMS; sin rutas “fake” de datos
- [ ] Revisión rápida a11y (teclado, contraste, landmarks)
- [ ] Comportamiento revisado en móvil (ancho estrecho, menú, sin overflow raro)
- [ ] Enlaces/botones: `cursor-pointer` + estados hover, active, focus, disabled según regla
- [ ] `docs/routes.md` y `docs/CHANGELOG.md` actualizados si aplica

## Recursos en el repo

| Recurso | Uso |
|--------|-----|
| `docs/` | Mapa de rutas, changelog y notas de proyecto (mantener al día) |
| `colors/colors.md` | Paleta, proporciones, restricciones de fondo |
| `logo/logo.md` | Referencia de logo / assets (si aplica) |

## Si el pedido choca con el stack o la marca

Priorizar reglas de proyecto; si hace falta excepción (p. ej. formulario a un proveedor externo), dejarlo explícito y mínimo, sin convertir el repo en un CMS.
