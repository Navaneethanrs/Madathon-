# MADATHON – 24-Hour Hackathon (MADC · KEC)

A retro pixel-art styled 24-hour hackathon web application built with React and Vite.

## Features
- Dynamic pixel-art desert landscape with animated flying crows.
- Real-time countdown timer to October 16, 2026.
- Event domains and registration handling.
- Mobile-responsive navigation and interactive UI.

## Run Locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Configuration
Open `src/data.js`:
- `CONFIG.REG_LINK` -> Registration form URL
- `CONFIG.REG_DEADLINE` -> Target date for countdown timer
- `CONFIG.DATE_TEXT` -> Displayed date banner
- `DOMAINS` -> Event domains and explore links
- `COORDS` -> Event coordinators list
