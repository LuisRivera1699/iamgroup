# Paleta de colores (IAM Group)

Documento derivado de `colors.pdf`: resume los códigos hex y la estructura que aparece en el PDF original. Si un valor no era legible en la extracción, se indica en notas.

## Colores principales y secundarios

Según la lámina «Colores PRINCIPALES» / «Colores SECUNDARIOS»:

| Rol (en el PDF) | Hex       | Notas                                                                                                                              |
| --------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Principal (1)   | `#d1d1d1` | Gris muy claro.                                                                                                                    |
| Principal (2)   | `#fbb03b` | Amarillo/naranja corporativo (coincide con el tono destacado en la familia amarillos).                                             |
| Secundario      | `#475b7b` | Azul grisáceo medio.                                                                                                               |
| Secundario      | `#fbc540` | Amarillo/dorado (en el PDF junto a los secundarios aparece `#fbc54`; en la familia **Amarillos** el código completo es `#fbc540`). |
| Secundario      | `#0f2d4e` | Azul muy oscuro (ancla de la gama de azules).                                                                                      |

---

## Azules (`Paleta de colores - AZULES`)

Códigos tal como en el documento (normalizados sin espacios entre dígitos):

| Hex       |
| --------- |
| `#0f2d4e` |
| `#0e2c4d` |
| `#143c69` |
| `#1b3859` |
| `#1f4a7b` |
| `#475b7b` |
| `#758fab` |
| `#9bb2cb` |
| `#8da1b8` |
| `#bbcadb` |
| `#5f84ab` |
| `#0c2c50` |
| `#a4bbd4` |
| `#7e9ab8` |
| `#96bde6` |
| `#c0deff` |
| `#c8e2ff` |
| `#d1deed` |
| `#a0b9d4` |
| `#1d3f62` |
| `#275384` |
| `#a0bad6` |

Hay dos tonos muy próximos (`#a0b9d4` y `#a0bad6`): puede ser intencional (dos muestras) o variación de exportación; conviene cotejar con el PDF visual.

---

## Amarillos (`AMARILLOS`)

| Hex       |
| --------- |
| `#fdf4d0` |
| `#f8c069` |
| `#edab3b` |
| `#ffd366` |
| `#fdd899` |
| `#f4bf64` |
| `#fbc540` |
| `#e19a20` |
| `#fbb03b` |

El tono `#fbb03b` aparece como color principal y al final de la lista de amarillos, reforzando su papel como acento principal en cálido.

---

## Uso de este archivo

- Para diseño/UI: copiar hex tal cual; probar contraste (texto sobre `#0f2d4e` vs sobre `#c0deff`, etc.).
- Para alineación con el PDF: si hace falta precisión de impresión (CMYK/Pantone), este `.md` solo refleja **RGB en hex** tal como en el PDF; un manual de marca impreso podría añadir equivalencias.
- Secciones pueden tener tonos de azules en background color.
- Amarillo para cosas resaltantes
- gris para letras
- respetar
- Proporciones: 65% azul, 25% gris, 15% amarillo
- NO PUEDEN HABER SECCIONES CON FONDO COLOR GRIS/BLANCO O AMARILLO. SOLO JUGAR CON LOS AZULES O SECCIONES CON FONDO DE IMAGEN.

Fuente: extracción de texto de `colors/colors.pdf` (abril 2026).
