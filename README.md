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


## 🚀 Run Locally

### Prerequisites
- Node.js v18+ and npm

### Steps
```bash
# 1. Clone the repository
git clone <repo-url>
cd madathon

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev        # http://localhost:5173

# 4. Build for production
npm run build      # Output in /dist
npm run preview    # Preview production build
```

## 📁 Project Structure

```
madathon/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── data.js       # Event config & data
│   └── main.jsx      # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## ⚙️ Configuration
Open `src/data.js` to customize:
- `CONFIG.REG_LINK` → Registration form URL
- `CONFIG.REG_DEADLINE` → Target date for countdown timer
- `CONFIG.DATE_TEXT` → Displayed date banner
- `DOMAINS` → Event domains and explore links
- `COORDS` → Event coordinators list

## 🤝 Contributing

We welcome contributions to improve the MADATHON website!

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/your-feature`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to the branch: `git push origin feat/your-feature`
5. **Open** a Pull Request

Please follow the existing code style and add meaningful commit messages.

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify for your own hackathon events.

## 🙌 Acknowledgements

- **MADC (Madras AI & Data Club)** — Organizing body
- **KEC (Kongu Engineering College)** — Host institution
- All event coordinators, sponsors, and participants who make MADATHON possible!

---

> *Built with ❤️ by the MADC team · Last updated: October 20, 2026*
