# 🎵 MusicTwins — Frontend

**MusicTwins** es una aplicación web que conecta a personas con gustos musicales compatibles usando datos reales de Spotify. Construida con React + TypeScript + Tailwind CSS, con un diseño oscuro, animaciones fluidas y una experiencia de usuario cuidada al detalle.

---

## ✨ Vistas implementadas

| Vista | Descripción |
|---|---|
| **LandingPage** | Página de marketing con hero animado, cards flotantes y CTA de conexión con Spotify |
| **AuthLoading** | Pantalla de transición con barra de progreso, visualizador de onda y pasos de autenticación |
| **MainFeed** | Feed principal con actividad en tiempo real, reproductor de música y reacciones interactivas |
| **TwinMatch** | Compatibilidad musical: anillo SVG de puntuación, géneros compartidos y desglose por categorías |
| **Messages** | Chat con lista de conversaciones, envío de mensajes y SongCards compartibles |
| **Profile** | Perfil de usuario con estadísticas, top artistas, insignias y configuración reactiva |

---

## 🛠️ Stack técnico

- **React 18** + **TypeScript** — UI declarativa con tipado estricto
- **Vite 7** — Build tool ultrarrápido con HMR
- **Tailwind CSS v3** — Utilidades CSS con diseño token-driven
- **Google Fonts** — Plus Jakarta Sans (títulos) + Inter (cuerpo)

---

## 🎨 Sistema de diseño

| Token | Valor |
|---|---|
| Fondo | `#0d0d0f` |
| Card | `#141418` |
| Borde | `#2a2a35` |
| Acento | `#a855f7` (púrpura) |
| Texto primario | `#f1f5f9` |
| Texto secundario | `#94a3b8` |

**Animaciones disponibles** (`src/index.css`):
- `animate-fade-in-up`, `animate-float-card-1/2/3`
- `animate-pulse-ring`, `eq-bar` (equalizer dinámico)
- `animate-spin-vinyl`, `animate-wave-bar`, `animate-glow-pulse`

---

## 🏗️ Estructura del proyecto

```
src/
├── types/
│   └── index.ts          # Tipos compartidos (Track, Artist, TwinProfile…)
├── components/
│   ├── shared/
│   │   ├── AppShell.tsx  # Layout con sidebar de navegación reutilizable
│   │   └── index.ts      # Barrel export
│   ├── LandingPage.tsx
│   ├── AuthLoading.tsx
│   ├── MainFeed.tsx
│   ├── TwinMatch.tsx
│   ├── Messages.tsx
│   └── Profile.tsx
├── App.tsx               # Router de 6 vistas
├── index.css             # Estilos globales + keyframes
└── main.tsx
```

---

## 🚀 Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Verificar tipos TypeScript
npx tsc --noEmit
```

El servidor de desarrollo se levanta en `http://localhost:5173/`.

---

## 📋 Diseño de referencia

Las vistas **LandingPage** y **MainFeed** fueron recreadas desde Figma:\
[MusicTwins — Figma Design](https://www.figma.com/design/DK5SVgaW6ZBtt3ytKAyjhM/MusicTwins)

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
