# MyPortfolio - AI Coding Agent Instructions

## Project Overview
A React-based portfolio application template with dark mode, animated page transitions, and reusable components. Built with modern tooling (React Router v7, Framer Motion, Tailwind CSS).

## Architecture & Data Flow

### Component Hierarchy
```
App
├── DarkModeProvider (Context)
├── Router & ScrollToTop
├── Navbar (sticky, dark mode toggle)
└── AnimatedRoutes (Framer Motion + PageWrapper)
    ├── PageWrapper (page transition animations)
    └── Route Pages (Hero, About, Projects, etc.)
```

### Key Patterns

1. **Data-Driven Components**: Reusable components consume data from `src/data/*.js` files
   - `Hero` receives `heroData` (greeting, name, tagline, description, CTA)
   - `Projects` maps over `projects` array and renders `ProjectCard` components
   - Data is object-based with descriptive fields (e.g., `tech`, `achievements`)

2. **Dark Mode (Context + LocalStorage)**
   - `DarkModeProvider` wraps entire app with context
   - Persists to localStorage as `'darkMode': 'true'|'false'`
   - Applies/removes `dark` class on `document.body`
   - Components use `dark:*` Tailwind utilities for dark mode styling

3. **Page Transitions (Framer Motion)**
   - `PageWrapper` wraps each route with motion variants (opacity, translateY)
   - `AnimatePresence` mode="wait" ensures transitions complete before showing next page
   - Reusable animation definition in `pageVariants` object

4. **Hook: `useDarkMode()`**
   - Provides `{ darkMode: boolean, toggleDarkMode: () => void }` throughout app
   - Used in Navbar and any component needing theme awareness

## Styling Architecture

**Tailwind CSS** is the primary styling approach:
- Dark mode enabled via `darkMode: 'class'` in `tailwind.config.js`
- All components use inline Tailwind classes (no utility extraction)
- Responsive breakpoints: `sm:` (640px), `lg:` (1024px)
- Dark mode: prefix with `dark:` (e.g., `dark:bg-gray-900 dark:text-white`)
- Global styles in `src/styles/global.css` (animations, resets, gradients)
- CSS grid/flexbox for layouts: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` pattern

## Critical Implementation Details

### Contact Form (EmailJS)
- Located in `src/components/Contact.jsx`
- **⚠️ WARNING**: Service ID, template ID, and public key are hardcoded
  - `service_ndticne`, `template_k152grf`, `7gelbx73KoR8D4Ech`
  - Should move to environment variables before production
- Form state: `{ name, email, message }` with success/error feedback

### Navigation
- React Router NavLinks in Navbar
- Active link styling via NavLink's `isActive` callback: `text-gray-900 dark:text-yellow-300 underline`
- Routes defined in `AnimatedRoutes` component in `App.js`
- All main sections: `/, /about, /projects, /experience, /skills, /contact`

### Libraries & Initialization
- **AOS (Animate On Scroll)**: Initialized in `App.js` useEffect with `duration: 800`
- **React Icons**: Used for hamburger menu, sun/moon icons in Navbar
- **React Typewriter**: Hero section uses array of taglines with loop=true

## Development Workflow

### Build & Run
```bash
npm start          # Dev server (localhost:3000)
npm build          # Production build → /build folder
npm test           # Run tests with react-scripts
```

### Key Files to Edit
- **Content**: `src/data/hero.js`, `src/data/projects.js` (data arrays/objects)
- **Pages**: `src/pages/*.jsx` (page-level components)
- **Components**: `src/components/*.jsx` (reusable UI)
- **Styling**: Tailwind classes directly in JSX; global styles in `src/styles/global.css`

### Common Tasks
1. **Add new page**: Create route in `App.js` AnimatedRoutes and component file
2. **Add section data**: Create/update object in `src/data/*.js`, import and spread props to component
3. **Styling adjustments**: Use Tailwind classes; remember `dark:*` for dark mode
4. **Dark mode issues**: Check `dark` class applied to `body` and `dark:` prefixes in Tailwind

## Project-Specific Conventions
- **File naming**: Components `.jsx`, data files `.js`
- **Prop patterns**: Components accept configuration as individual props from data objects
- **Responsive design**: Mobile-first with `sm:` and `lg:` breakpoints
- **CSS-in-JS**: Framer Motion variants defined as JS objects (e.g., `pageVariants`)
- **No external CSS modules**: All styling via Tailwind inline classes or global CSS

## Known Considerations
- Tailwind `dark:` mode requires `class` strategy (not system preference)
- Document.body classList manipulation for dark mode (watch for SSR issues if added later)
- EmailJS credentials should be moved to environment variables
- AOS animations use 800ms duration globally—adjust in App.js if needed
