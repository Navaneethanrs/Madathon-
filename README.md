# MADATHON – 24-Hour Hackathon (MADC · KEC)

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

A retro pixel-art styled 24-hour hackathon web application built with React and Vite.

## 📅 Event Overview

| Detail | Info |
|--------|------|
| **Event** | MADATHON – 24-Hour Hackathon |
| **Organizer** | MADC @ KEC |
| **Date** | October 16, 2026 |
| **Duration** | 24 Hours |
| **Theme** | Innovation × Technology |
| **Registration Deadline** | October 11, 2026 |

## ✨ Features
- 🏜️ Dynamic pixel-art desert landscape with animated flying crows.
- ⏱️ Real-time countdown timer to October 16, 2026.
- 🌐 Event domains and registration handling.
- 📱 Mobile-responsive navigation and interactive UI.
- 🔍 Interactive domain explore modal with tech stack flexibility info.
- 🤝 Event partners section with sponsor logos.
- 👥 Coordinator listing with contact details.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, JSX |
| **Build Tool** | Vite 5 |
| **Styling** | CSS3, custom pixel-art design |
| **Animation** | CSS keyframes, canvas-based sprites |
| **Hosting** | Static build (`/dist`) |


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
