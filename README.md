# UBreakFix Dashboard

A modern, dark-themed dashboard for a phone repair store (inspired by a Figma design). Built with React, Vite, Tailwind CSS, React Router, Recharts, and lucide-react icons.

## Features

- Responsive sidebar (mobile slide-in + desktop fixed)
- Glassmorphic cards with blur effects
- Dynamic page titles in top bar
- Call logs with selectable items and transcript view
- Appointments table with pagination
- Dashboard with stats, area chart (Recharts), recent activity, and progress bars
- Settings page with profile editing UI

## Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- React Router v6 (navigation)
- Recharts (trends chart)
- lucide-react (icons)
- react-icons (additional outline icons)

## Prerequisites

- Node.js ≥ 18
- npm or yarn or pnpm

## Installation

1. **Clone the repository** (or unzip the project folder)

   ```bash
   git clone <your-repo-url>
   cd ubreakfix-dashboard


## Install dependencies

npm install
# or
yarn install
# or
pnpm install

# Build for production

npm run build
# or
yarn build
# or
pnpm build

## Project Structure (main folders)
```
src/
├── components/         # reusable pieces (Sidebar, TopBar, StatCard, CallDetails…)
├── pages/              # main views (Dashboard, CallLogs, Appointments, Settings)
├── data/               # mock data (calls, appointments)
├── App.jsx             # main layout + routing
└── index.css           # global styles + Tailwind imports
```


>>>>>>> a337967 (all updated)
