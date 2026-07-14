# Rehan Jameel - Portfolio Dashboard

A modern, interactive portfolio dashboard built with React, TailwindCSS, and Framer Motion. Designed as a single-page application with smooth animations and a professional dashboard layout.

## Features

- **Single-Page Application**: Zero page reloads with state-based view switching
- **Dashboard Layout**: Fixed sidebar with glassmorphism main content panel
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Design**: Mobile-friendly with collapsible sidebar navigation
- **Dark Mode First**: Sleek dark theme with vibrant accent colors
- **Interactive Components**:
  - Overview with metrics cards
  - Experience timeline with expandable details
  - Projects grid with category filters
  - Skills matrix with progress bars
  - Contact form with social links

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to a GitHub repository
2. Run the deployment command:
```bash
npm run deploy
```

The `predeploy` script will build the project, and `deploy` will publish it to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Navigation sidebar
│   ├── Overview.jsx      # Home/Overview tab
│   ├── Experience.jsx    # Experience & Education timeline
│   ├── Projects.jsx      # Projects grid with filters
│   ├── Skills.jsx        # Skills matrix
│   └── Contact.jsx       # Contact form and info
├── App.jsx               # Main app with tab switching
├── index.css             # Global styles with Tailwind
└── main.jsx              # React entry point
```

## Customization

### Update Content

Edit the component files to update your personal information:
- `Sidebar.jsx` - Profile card details
- `Overview.jsx` - Hero section and metrics
- `Experience.jsx` - Education and work history
- `Projects.jsx` - Project portfolio
- `Skills.jsx` - Technical skills
- `Contact.jsx` - Contact information and links

### Update Deployment Path

If deploying to a different repository name, update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## License

MIT
