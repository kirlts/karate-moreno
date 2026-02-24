# MASTER-SPEC

Este documento es la **Especificación Maestra** del repositorio. Debe ser actualizado cada vez que se defina el "qué" y el "cómo" a grandes rasgos. Todo lo implementado debe ir en favor de lo que se detalla aquí.

## 1. Misión y Propósito Central

Crear una landing page profesional y estéticamente "premium" para el dojo de Karate Itosu-Ryu del Sensei Juan Pedro Moreno. El objetivo principal es mostrar la escuela al mundo, transmitir profesionalismo, tradición y confianza, y generar conversión directa mediante un enlace de WhatsApp (+56 9 9078 6368) para agendar clases.

## 2. Arquitectura de Alto Nivel

- **Frontend:** React + Vite (para desarrollo ágil y uso de componentes modulares).
- **Estilos:** TailwindCSS (para diseño premium, responsive y animaciones fluidas).
- **Hosting:** GitHub Pages.
- **Activos:** Imágenes y videos alojados en el directorio público o importados de `/Fotos`.

## 3. Especificación Técnica Funcional

- **Sección Hero:** Impactante, con el logo o video/foto del sensei, título principal y botón CTA destacado hacia WhatsApp para reclamar la primera clase gratis.
- **Sección Historia y Sensei:** Resumen de los 40 años de trayectoria de Sensei Juan Pedro Moreno, su rol como representante del estilo Itosu-Ryu en Chile, e historia breve de este estilo tradicional fundado a partir de las enseñanzas de Anko Itosu y estructurado por Ryusho Sakagami.
- **Sección Beneficios:** Lista de razones para entrenar y recordatorio de que no se requiere experiencia previa.
- **Información Práctica:** Horarios (Lunes a jueves 18:30 a 19:30), ubicación (Arlegui 1273, segundo piso) y público (todas las edades).
- **Testimonios:** Espacio para mostrar opiniones de estudiantes extraídas de Google.
- **Call To Action Fijo:** Botón flotante o persistente para contactar por WhatsApp al +56 9 9078 6368.

## 4. Restricciones y Decisiones de Diseño

- **Restricción de Hosting:** Debe ser 100% estático, compatible con GitHub Pages. No requiere backend.
- **Límite Intransgredible:** La página debe reflejar el nivel profesional y tradicional del dojo; cero componentes que parezcan genéricos o baratos.
- **Eficiencia de Desarrollo:** Se REUTILIZARÁN componentes de librerías premium de interfaz (como Aceternity UI, Magic UI, o Tailwind UI) para maximizar la Velocidad de Creación y el pulido visual.
- **Biblia de Estilo Visual:**
  - **Paleta de Colores:** Basada en la tradición del Karate (negro `#0a0a0a`, acentos en rojo intenso `#e60000` o dorado antiguo `#d4af37`, fondos off-white `#f7f7f7`).
  - **Tipografía:** Moderna y clara (Inter, Roboto u Outfit) contrastando con títulos gruesos o con remates orientales sutiles.
  - **Efectos:** Glassmorphism en tarjetas, animaciones sutiles (framer-motion) en el scroll, bordes redondeados limpios y alto contraste. Nada debe verse "default".
- **Sacrificio Aceptado:** No se construirá un backend. Todo canaliza a WhatsApp.

## 5. Trazabilidad

- *Las tareas de implementación deben referenciar estas secciones en el `docs/TODO.md`.*
