# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-03-01

### Added

- Nueva sección de historia del estilo Itosu-Ryu expandida (3 párrafos) con tono humano y narrativo, eliminando el "AI-slop".
- Widget de Google Maps con vista previa de negocio (Business Card), colores naturales y soporte para español.
- Botón de WhatsApp con diseño "Premium Dorado", icono oficial de `lucide-react` y número de contacto integrado.

### Changed

- Reestructuración de la sección de Información: Ubicación y Horarios ahora se presentan lado a lado para eficiencia de espacio.
- Renovación de la Galería a "Nuestra Galería", eliminando el logo en escala de grises que generaba ruido visual.
- Optimización de la sección de prueba en Beneficios, ahora con un diseño más compacto y elegante.
- Actualización de la suite de tests unitarios para validar los nuevos copies y estructuras.

### Fixed

- Error de referencia `MessageCircle` no definido en el componente `Info.jsx`.
- Visualización en blanco y negro del widget de mapas.

## [0.3.0] - 2026-03-01

### Added

- Bandera de Chile y logo oficial de Itosu-Ryu en secciones expandibles del componente Sensei.
- Texto justificado en descripciones de Galería e Información para mejor legibilidad.
- Integración de **Copy Oficial Aprobado** por el Sensei Juan Pedro Moreno.
- Sistema de **Testing Profesional** basado en Vitest y React Testing Library.
- Pipeline de **CI/CD** mediante GitHub Actions para validación automática.
- Implementación de **SEO Técnico**: OG Tags y JSON-LD (LocalBusiness).
- Funcionalidad de **Lightbox** en la galería para visualización de imágenes.
- Badge de **Representante Oficial** para aumento de autoridad y confianza.
- Refuerzo de **Accesibilidad (A11y)** con aria-labels y semántica estructural.
- Sincronización de **Metadatos SEO** y compatibilidad con GitHub Pages (subpath routing).

### Changed

- Actualización integral de la biografía de Sensei Juan Pedro Moreno para reflejar su trayectoria actual como representante oficial y medallista.
- Consolidación de secciones "Clases" y "Horarios" en una única vista de "Horarios".
- Cambio de dirección a "Arlegui 1273, Piso 2" para mayor precisión.
- Rediseño del CTA de contacto para enfatizar el uso de WhatsApp con el número visible.
- Centrado del bloque de invitación a clase de prueba en la sección de Beneficios.
- Refactorización de la sección Hero para eliminar el sistema de reservas y simplificar la conversión.
- Optimización de activos: Conversión de PNG pesados a JPG/WebP optimizados.
- Mejora de la jerarquía de encabezados para SEO y lectores de pantalla.

### Removed

- Texto redundante "Nuestras Clases", "Nuestro Día a Día" y "Testimonios".
- Sección "+ Generaciones de alumnos" y avatares decorativos en el Hero para reducir el ruido visual.
- Mención a "Comunidad integradora" en la sección de horarios para priorizar datos prácticos.

### Fixed

- Vulnerabilidad de seguridad en dependencia `minimatch`.
- `ReferenceError: MoveUp is not defined` en el componente Hero.

## [0.1.0] - 2026-02-24

### Funcionalidad inicial

- Inicialización del proyecto con Vite, React y Tailwind CSS.
- Componentes base: Hero, Sensei, Benefits, Info, Testimonials y WhatsAppFloat.
- Configuración de deployment para GitHub Pages.
- Documentación inicial: MASTER-SPEC, TODO, MEMORY y USER-DECISIONS.
