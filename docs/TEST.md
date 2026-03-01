# TEST

Este documento define la estrategia de pruebas y los triggers de ejecución autónoma para Antigravity IDE.

## Estrategia de Pruebas

- **Framework:** Vitest + React Testing Library.
- **Alcance:** Pruebas unitarias de componentes (renderizado) y lógica de negocio.
- **Ejecución:** Manual mediante `npm test` en el directorio `frontend/`.

## Triggers de Testing Autónomo

Antigravity IDE ejecutará automáticamente los tests cuando se cumplan las siguientes condiciones:

### [TRG-001] Modificación de Componentes de UI

- **Trigger:** Edición de cualquier archivo en `frontend/src/components/*.jsx`.
- **Acción:** `npm test`.

### [TRG-002] Cambios en la Configuración Global

- **Trigger:** Modificación de `tailwind.config.js` o `vite.config.js`.
- **Acción:** `npm test`.

### [TRG-003] Actualización de Dependencias

- **Trigger:** Cambios en `package.json`.
- **Acción:** `npm test`.

## Mantenimiento

- Cada nuevo componente crítico DEBE venir acompañado de su respectivo archivo `.test.jsx`.
- Los fallos en el CI/CD (GitHub Actions) bloquean el despliegue a GitHub Pages.
