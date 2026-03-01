# USER-DECISIONS

Este archivo registra todas las decisiones que el usuario haya tomado o las correcciones que haya hecho durante el desarrollo del proyecto, asegurando la trazabilidad de las decisiones de diseño, arquitectura y requerimientos.

## [DEC-001] Stack Tecnológico: Landing Page Estática Profesional

**Fecha:** 2026-02-24

- **Contexto:** Necesidad de una landing page premium, de bajo mantenimiento y alta velocidad de despliegue para un dojo de karate con presencia local.
- **Decisión:** Utilizar React + Vite como framework, Tailwind CSS para estilos, y GitHub Pages para hosting gratuito y estático.
- **Alternativas Descartadas:**
  - *WordPress:* Descartado por ser menos flexible para diseños "premium" altamente customizados y por requerir mantenimiento de seguridad/hosting.
  - *Next.js:* Descartado para evitar la complejidad de SSR/ISR en un sitio puramente estático que no requiere SEO dinámico complejo.
- **Consecuencias:**
  - Alta velocidad de carga y facilidad de despliegue continuo.
  - Limitación a contenido estático (WhatsApp como canal de conversión único).
  - Dependencia de librerías de UI (Aceternity/MagicUI) para el acabado premium.
- **Condiciones de Reversión:** Si el volumen de contenido dinámico (noticias, blog) crece hasta ser inmanejable vía código, migrar a un headless CMS (Sanity/Strapi) o un SSG más robusto.

---

## [DEC-002] Remoción de Sistema de Reserva de Cupos

**Fecha:** 2026-03-01

- **Contexto:** Inicialmente se propuso un botón para "Reservar cupo", pero el Sensei prefiere la dinámica tradicional de "llegar y entrenar" para la primera clase de cortesía.
- **Decisión:** Eliminar cualquier mención a "reservas" o "cupos" en los CTAs, simplificando la acción a "Ir a la clase" o contactar vía WhatsApp.
- **Alternativas Descartadas:** Calendarios de reserva (Calendly), formularios de registro previo.
- **Consecuencias:** Menor fricción de conversión, alineación con la cultura real del dojo.
- **Condiciones de Reversión:** Si la afluencia de nuevos alumnos satura la capacidad física del dojo de forma inmanejable.

---

## [DEC-003] Adopción de Vitest para Aseguramiento de Calidad

**Fecha:** 2026-03-01

- **Contexto:** Se detectó una brecha crítica de seguridad y falta total de tests durante la auditoría `/fix`.
- **Decisión:** Implementar Vitest como framework de pruebas por su integración nativa con Vite, permitiendo una configuración más ligera y rápida que Jest.
- **Alternativas Descartadas:** Jest (requiere configuración extra para ESM/Vite), Playwright (demasiado pesado para tests unitarios iniciales).
- **Consecuencias:** Capacidad de ejecutar tests en CI/CD, base de código más robusta.
- **Condiciones de Reversión:** Si se requiere un ecosistema de testing que solo Jest soporte (altamente improbable en este stack).

---

## [DEC-004] Actualización de Perfil del Sensei (Hijo vs Padre)

**Fecha:** 2026-03-01

- **Contexto:** La biografía inicial mezclaba datos históricos del Shihan Juan Moreno Chappa (fundador) con el Sensei Juan Pedro Moreno (hijo/actual). El usuario solicitó priorizar la descripción del hijo.
- **Decisión:** Redactar dos párrafos enfocados en la trayectoria internacional y el liderazgo actual de Juan Pedro Moreno, moviendo las referencias al padre como un "legado heredado".
- **Alternativas Descartadas:** Mantener biografías separadas o detalladas de ambos (se descartó por simplicidad en la landing).
- **Consecuencias:** Mayor claridad sobre quién es el instructor actual y refuerzo de su autoridad como representante oficial.
- **Condiciones de Reversión:** Si el usuario decide crear una sección histórica dedicada a los orígenes del dojo en Chile.

---

## [DEC-005] Compatibilidad con GitHub Pages y Sincronización de Metadatos

**Fecha:** 2026-03-01

- **Contexto:** El despliegue en GitHub Pages ocurre bajo un subdirectorio (`/karate-moreno/`), lo que rompe las rutas absolutas y los metadatos SEO si no se gestionan correctamente.
- **Decisión:**
  1. Configurar `base: '/karate-moreno/'` en `vite.config.js`.
  2. Utilizar `import.meta.env.BASE_URL` para todas las referencias de activos en componentes.
  3. Sincronizar manualmente los metadatos SEO (Open Graph y JSON-LD) en `index.html` para reflejar la URL canónica final y la consistencia de datos (ej. "Piso 2").
- **Alternativas Descartadas:** Rutas absolutas (rompen en subpáginas), despliegue en dominio raíz (no disponible en este repositorio).
- **Consecuencias:** Despliegue robusto y SEO funcional desde el primer momento en la URL de producción.
- **Condiciones de Reversión:** Cambio a un dominio personalizado (DNS propio), en cuyo caso el `base` de Vite deberá volver a `/`.

---

## [DEC-006] Diseño de CTA Gold y Layout Side-by-Side

**Fecha:** 2026-03-01

- **Contexto:** Necesidad de optimizar el espacio en la sección Info (proporcionada por EPIC-008) y elevar la sofisticación visual del contacto principal.
- **Decisión:**
  1. Implementar un grid side-by-side para Ubicación y Horarios.
  2. Diseñar un botón de WhatsApp minimalista con borde dorado y el icono oficial `MessageCircle`.
- **Alternativas Descartadas:**
  - Layout vertical (consumía demasiado scroll en dispositivos móviles).
  - Botón verde de WhatsApp estándar (rompía la armonía cromática del estilo "Zen White").
- **Consecuencias:** Mejora en la densidad de información y un punto focal de conversión más integrado estéticamente.
- **Condiciones de Reversión:** Si los tests de usabilidad indican que el botón dorado no se reconoce instantáneamente como WhatsApp.
