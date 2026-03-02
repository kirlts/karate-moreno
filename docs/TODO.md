# TODO

Este documento es la **Condición de Arranque** obligatoria. ESTÁ ESTRICTAMENTE PROHIBIDO modificar el código fuente sin que este archivo refleje la tarea actual.

## [EPIC-001] Desarrollo de Landing Page para Karate Moreno

Creación de un sitio web estático (GitHub Pages) profesional para el dojo del Sensei Juan Pedro Moreno.

### [TASK-001] Inicialización y Planificación

Establecer la base arquitectónica y documental del proyecto.

- [x] **Subtarea 1.1:** Actualizar `MASTER-SPEC.md`, `TODO.md` y crear plan de implementación. `[2026-02-24 15:53:13]`

### [TASK-002] Configuración del Proyecto Frontend

Configurar el framework de trabajo inicial para el desarrollo ágil.

- [x] **Subtarea 2.1:** Inicializar Vite con React y TailwindCSS. `[2026-02-24 16:15:00]`
- [x] **Subtarea 2.2:** Configurar estructura de carpetas (components, assets). `[2026-02-24 16:15:00]`

### [TASK-003] Desarrollo de UI / UX

Construir la interfaz de usuario con diseño premium, basándose en los textos propuestos y las fotos.

- [x] **Subtarea 3.1:** Crear componente Hero con CTA a WhatsApp para la clase gratis. `[2026-02-24 16:21:00]`
- [x] **Subtarea 3.2:** Diseñar sección de biografía del Sensei Moreno y orígenes del estilo Itosu-Ryu. `[2026-02-24 16:21:00]`
- [x] **Subtarea 3.3:** Integrar sección de beneficios y promoción. `[2026-02-24 16:21:00]`
- [x] **Subtarea 3.4:** Integrar galería de fotos y testimonios. `[2026-02-24 16:21:00]`
- [x] **Subtarea 3.5:** Integrar panel de Información Práctica (Arlegui 1273). `[2026-02-24 16:21:00]`
- [x] **Subtarea 3.6:** Crear estilos globales, animaciones y polish visual. `[2026-02-24 16:21:00]`

### [TASK-004] Puesta en Producción

Desplegar el artefacto terminado usando GitHub Pages.

- [x] **Subtarea 4.1:** Configurar script de build y base path en `vite.config.js`. `[2026-02-24 16:30:00]`
- [x] **Subtarea 4.2:** Configurar el script `gh-pages` en `package.json`. `[2026-02-24 16:30:00]`
- [x] **Subtarea 4.3:** Limpiar repositorio base, configurar `.gitignore` global y eliminar duplicados. `[2026-02-24 16:35:00]`

### [TASK-006] Planificación de Elevación Visual

Elevar el "feel" del sitio a un nivel premium mediante refinamiento de diseño y UX.

- [x] Investigar implementación actual y docs de Kairós. `[2026-03-01 02:55:00]`
- [x] Definir dirección estética (Norte Estético) y tokens OKLCH. `[2026-03-01 03:00:00]`
- [x] Crear `implementation_plan.md` y solicitar revisión. `[2026-03-01 03:05:00]`

### [TASK-007] Refactorización de Sistema de Diseño

- [x] Implementar paleta OKLCH en `tailwind.config.js`. `[2026-03-01 03:10:00]`
- [x] Refinar tipografía (proporciones áureas, tracking). `[2026-03-01 03:10:00]`
- [x] Agregar utilerías de "textura" (noise, grain). `[2026-03-01 03:12:00]`

### [TASK-008] Elevación de Componentes Individuales

- [x] **Hero**: Añadir efecto de luz dinámica (Spotlight) y refinamiento de layout. `[2026-03-01 03:15:00]`
- [x] **Sensei**: Mejorar la narrativa visual con animaciones de entrada coordinadas. `[2026-03-01 03:20:00]`
- [x] **Benefits**: Implementar tarjetas con efectos de hover premium. `[2026-03-01 03:25:00]`
- [x] **Testimonials**: Cambiar a `InfiniteMovingCards` pattern (simulated). `[2026-03-01 03:30:00]`
- [x] **Info**: Refinar presentación de horarios y ubicación. `[2026-03-01 03:35:00]`

### [TASK-009] Pulido Final y Verificación

- [x] Auditoría de Criterio Senior (Checklist de Bloqueo). `[2026-03-01 03:45:00]`
- [x] Verificación de responsividad y performance. `[2026-03-01 03:45:00]`
- [x] Sincronización documental final (`/document`). `[2026-03-01 03:59:00]`

### [EPIC-003] Elevación "Tradición Diamante" (Light Mode)

- [x] **[TASK-010] Conversión Estética Total**: Refactorización de CSS y componentes a esquema Zen White. `[2026-03-01 04:45:00]`
- [x] **[TASK-011] Nuevas Secciones**: Implementación de Galería y Google Maps. `[2026-03-01 04:30:00]`
- [x] **[TASK-012] Sincronización Documental y Registro de Deuda**: Actualización de MASTER-SPEC y CHANGELOG. `[2026-03-01 04:55:00]`

### [EPIC-004] Refinamiento de Confianza y SEO

- [x] **[TASK-014] Integración de Copy Oficial Aprobado**: Aplicación de textos del Sensei en Hero, Sensei y Benefits. `[2026-03-01 16:55:00]`
- [x] **[TASK-015] Optimización SEO Técnica**: Implementación de OG Tags y JSON-LD (LocalBusiness). `[2026-03-01 17:00:00]`
- [x] **[TASK-016] Redención de Activos**: Optimización de imágenes (.jpg/.webp) y performance. `[2026-03-01 17:00:00]`
- [x] **[TASK-017] Sello de Autenticidad**: Badge de "Representante Oficial Itosu-Ryu Chile". `[2026-03-01 17:00:00]`
- [x] **[TASK-018] Experiencia de Galería**: Implementación de Lightbox/Visor modal. `[2026-03-01 17:00:00]`

### [EPIC-005] Redención de Deuda Técnica (Fix)

- [x] **[TASK-021] Auditoría de Deuda Técnica**: Identificación de vulnerabilidades y falta de tests. `[2026-03-01 17:15:00]`
- [x] **[TASK-019] Base de Testing Profesional**: Configuración de Vitest y React Testing Library. `[2026-03-01 17:30:00]`
- [x] **[TASK-020] Automatización CI/CD**: Workflow de GitHub Actions para verificación. `[2026-03-01 17:30:00]`
- [x] **[TASK-025] Corrección Bug de Referencia**: Importación de ícono MoveUp faltante. `[2026-03-01 17:05:00]`

### [EPIC-006] Excelencia en Accesibilidad y Semántica

- [x] **[TASK-024] Auditoría de Accesibilidad**: Escaneo profundo de componentes y semántica. `[2026-03-01 17:45:00]`
- [x] **[TASK-022] Refinado de A11y**: Implementación de aria-labels y estructura jerárquica H1-H4. `[2026-03-01 17:55:00]`
- [x] **[TASK-023] Metadatos de Negocio**: Optimización final de index.html para SEO estructural. `[2026-03-01 17:55:00]`

### [EPIC-008] Refinamiento de Estética y UX (Marzo 2026 - v2)

- [x] **[TASK-031] Planificación y Documentación** `[2026-03-01 19:25:00]`
- [x] **[TASK-032] Expansión de Contenido Histórico (Sensei.jsx)** `[2026-03-01 19:28:00]`
- [x] **[TASK-033] Reestructuración de Sección de Información (Info.jsx)** `[2026-03-01 19:30:00]`
- [x] **[TASK-034] Refinamiento de CTA y Sección de Prueba (Benefits.jsx & Info.jsx)** `[2026-03-01 19:32:00]`
- [x] **[TASK-035] Evolución de Galería y Activos (Gallery.jsx)** `[2026-03-01 19:34:00]`
- [x] **[TASK-036] Verificación y Cierre** `[2026-03-01 19:42:00]`
- [x] **[TASK-037] Refinado Estético III (Mapas & Galería)** `[2026-03-01 19:33:00]`

### [EPIC-009] Actualización de Identidad y Legado

- [x] **[TASK-040] Actualización de Nombres Históricos**: Reemplazar "Juan Moreno Chappa" por "Pedro Moreno Chapa". `[2026-03-02 15:35:00]`
- [x] **[TASK-041] Clarificación de Liderazgo**: Asegurar que Juan Pedro Moreno Arenas sea identificado explícitamente como el Sensei actual. `[2026-03-02 15:35:00]`

- [x] **[TASK-042] Sincronización Documental Final**: Ejecución de workflow `/document` para asegurar coherencia. `[2026-03-02 15:42:00]`

---
*Instrucciones de Trazabilidad: Cada vez que se avance o complete una subtarea, se DEBE añadir la fecha o timestamp junto a la tarea.*
