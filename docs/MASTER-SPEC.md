# MASTER-SPEC

Este documento es la **Especificación Maestra** del repositorio. Debe ser actualizado cada vez que se defina el "qué" y el "cómo" a grandes rasgos. Todo lo implementado debe ir en favor de lo que se detalla aquí.

## 1. Misión y Propósito Central

Crear una landing page profesional y estéticamente "premium" para el dojo de Karate Itosu-Ryu del Sensei Juan Pedro Moreno Arenas. El objetivo principal es mostrar la escuela al mundo, transmitir profesionalismo, tradición y confianza, y generar conversión directa mediante un enlace de WhatsApp (+56 9 9078 6368) para agendar clases.

## 2. Arquitectura de Alto Nivel

- **Frontend**: React 19 + Vite.
- **Styling**: Tailwind CSS v4 (Configuración nativa CSS via `@theme`).
- **Animaciones**: Framer Motion.
- **Iconografía**: Lucide React.
- **Testing**: Vitest + React Testing Library.
- **CI/CD**: GitHub Actions (Validación de build, lint y tests).
- **Deployment**: GitHub Pages.
- **Activos:** Imágenes y videos alojados en el directorio público o importados de `/Fotos`.

## 3. Especificación Técnica Funcional

- **Sección Hero:** Impactante, con el logo o video/foto del sensei, título principal y botón CTA destacado hacia WhatsApp para reclamar la primera clase gratis. Se elimina el botón de reserva para reducir la fricción.
- **Sección Historia y Sensei:** Biografía de Sensei Juan Pedro Moreno Arenas (hijo), representante oficial del estilo Itosu-Ryu en Chile y medallista internacional. Incluye historia del estilo Itosu-Ryu con su logo oficial y la bandera de Chile en la sección expandida. Se mantienen los encabezados fijos al expandir.
- **Sección Beneficios:** Grid de 5 puntos clave (Disciplina, Fuerza Integral, Defensa Personal, Comunidad, Red de Dojos).
- **Sección Testimonios:** Reseñas reales extraídas de Google Maps con enlace directo para verificación de autenticidad.
- **Sección Galería:** Cuadrícula visual con funcionalidad de Lightbox (visor modal). Renombrada a "Nuestra Galería" para mayor cercanía. Se eliminó el logo superpuesto para una visualización más limpia.
- **Información Práctica & Mapa:** Horarios y ubicación presentados lado a lado para eficiencia de espacio. Integración de Google Maps interactivo en color con ficha de negocio (Business Card) para reconocimiento inmediato.
- **Call To Action Fijo:** Botón flotante o persistente para contactar por WhatsApp al +56 9 9078 6368. Texto: "Escribir por WhatsApp" con el número en una línea inferior más pequeña y estilo dorado premium.

## 4. Estrategia de Comunicación e Imagen

- **Estilo de Comunicación (Pragmatismo Humanista):**
  - **PROHIBICIÓN DE AI-SLOP:** Evitar términos como "Maestría", "Sendas", "Legados milenarios", "Forja", "Destino", "Te invitamos a descubrir", "Excelente dojo para...".
  - **Tono Realista:** Hablar como un vecino de Viña del Mar que recomienda una clase.
- **Identidad Verificada:** Juan Pedro Moreno Arenas (Sensei actual e hijo del Shihan Pedro Moreno Chapa). El copy debe reflejar su liderazgo actual y estatus como representante de la Japan Karatedo Itosu-kai.
- **SEO & Social**: Implementación de OG Tags para compartir en redes y JSON-LD (LocalBusiness) para Google Search.
- **Accesibilidad**: Cumplimiento de estándares A11y (aria-labels, estructura semántica H1-H4).
- **Conversión Directa**: Enfoque en la "Primera Clase de Prueba Gratis" sin requisitos de registro previo.

## 5. Restricciones Operativas y Límites

- **Restricción de Hosting:** Debe ser 100% estático, compatible con GitHub Pages. No requiere backend.
- **Límite de Distribución:** Áreas extensas (Galería, Historia detallada) deben estar colapsadas por defecto para favorecer el scroll rápido hacia el CTA de WhatsApp.
- **Eficiencia de Desarrollo:** Se REUTILIZARÁN componentes de librerías premium, pero simplificando sus efectos para no distraer del mensaje central.
- **Biblia de Estilo Visual (Tradición Diamante - Light Mode):**
  - **Paleta de Colores (OKLCH):** Blanco Zen predominante para transmitir higiene, orden y claridad.
  - **Identidad:** El dojo es profesional, familiar y accesible. No es un templo místico, sino una escuela de formación.

## 6. Trade-offs y Sacrificios Acordados

- **Velocidad de Creación vs. Customización Extrema:** Se prioriza el uso de componentes de librerías premium para acelerar el despliegue, aceptando las limitaciones de personalización que esto conlleva, siempre que se mantenga la estética "premium".
- **Simplicidad Arquitectónica vs. Funcionalidad Dinámica:** Se opta por una solución 100% estática (sin backend) para minimizar el mantenimiento y costo, sacrificando funcionalidades como gestión de usuarios o CMS dinámico.
- **Canal de Conversión Único:** Todo canaliza a WhatsApp (+56 9 9078 6368). Se renuncia a formularios de contacto con base de datos propia o sistemas de reserva complejos en esta fase inicial.

## 7. Preguntas Abiertas

- *¿Existen videos de alta calidad de las clases para integrar en el Hero o fondo?*
- *¿Se planea añadir una sección de tienda de equipo en el futuro?*

## 8. Trazabilidad

- *Las tareas de implementación deben referenciar estas secciones en el `docs/TODO.md` mediante tags `[SPEC-§N]`.*
