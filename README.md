# The Elder Lands | B. Salem

[![Live Site](https://img.shields.io/badge/Live-Demo-red?style=for-the-badge)](https://github.com/ijazahvmmed/bassel-1)
[![Tech Stack](https://img.shields.io/badge/Powered%20By-React%20%2B%20GSAP-black?style=for-the-badge)](https://reactjs.org/)

A premium, immersive author portfolio for **The Elder Lands** series by **B. Salem**. This platform is designed to showcase the kingdom-building LitRPG epic, featuring cinematic animations, detailed series information, and a seamless reading order guide.

## ⚔️ The Series
**"Where Gods Bleed and Empires Burn"**

The Elder Lands is a grounded progression fantasy focused on Lucan Zesh—a young noble navigating the heavy burden of leadership, refugee crises, and a complex relationship with his pragmatic father. 

- **4+ Books Planned** (2 Available now)
- **Hard Magic System**: God Orbs & Skill Slots
- **No Cliffhangers**: Every book delivers a complete, satisfying arc.

## ✨ Key Features
- **Cinematic Entrance**: High-impact Hero section with GSAP-powered reveals.
- **Scroll Storytelling**: Smooth scroll-triggered animations using `GSAP ScrollTrigger`.
- **Dynamic Book Catalog**: Full details on published works and upcoming releases.
- **Interactive FAQ**: Accordion-style system for series mechanics and world lore.
- **Responsive Architecture**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Technology Stack
- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ijazahvmmed/bassel-1.git
   cd bassel-1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure
```text
├── components/         # Reusable UI components (Hero, BookSection, etc.)
│   └── ScrollReveal.tsx # GSAP reveal wrapper
├── pages/              # Main page layouts (Home, Reading Order)
├── constants.ts        # Content manifest and configuration
├── App.tsx             # Routing and layout logic
└── index.css           # Global styles and Tailwind directives
```

---
*Created with ❤️ for readers of Progression Fantasy.*
