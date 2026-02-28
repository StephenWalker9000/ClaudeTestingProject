# ClaudeTestingProject

## What This Application Does

This is a Vegas-style "Welcome to Fabulous" sign simulator — a React application that recreates the iconic Las Vegas welcome sign aesthetic with animated neon effects, flashing bulbs, and a night sky backdrop. The sign is personalized to say "Sykesville" instead of Las Vegas.

## Features

- **Animated neon sign** styled after the famous Las Vegas welcome sign
- **Flashing light bulbs** arranged around an oval border, cycling in groups of 3
- **Neon glow animations** on text elements with red flicker and teal pulse effects
- **Spinning starburst** on top of the sign post that color-cycles between red and gold
- **3D sphere letter circles** spelling out "WELCOME"
- **Night sky background** with a dark radial gradient
- **Responsive design** that adapts to mobile screens

## Tech Stack

- **React 19** with JSX
- **Vite 7** for bundling and development server
- **CSS animations** for all visual effects (no animation libraries)
- **GitHub Actions** for automated deployment to GitHub Pages

## Running Locally

```bash
npm install
npm run dev
```

## Deployment

The app automatically deploys to GitHub Pages when changes are pushed to the `main` branch. It is served from the `/ClaudeTestingProject/` subdirectory.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
