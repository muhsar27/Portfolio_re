# Muhammad Sarumi | Personal Portfolio

A modern, high-performance web developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed from a professional Figma design system and customized for **Muhammad Sarumi** (Electrical Engineer & Full-Stack Web Developer).

![Portfolio Preview](/public/assets/clobgroup-preview.jpg)

---

## Live Demo & Links

* **Live Development Server**: `http://localhost:3000`
* **Featured Client Project**: [CLOB Group Live Platform](https://clobgroup.netlify.app/)
* **GitHub**: [@muhsar27](https://github.com/muhsar27)
* **Email**: [muhsar4321@gmail.com](mailto:muhsar4321@gmail.com)

---

## Tech Stack & Architecture

* **Frontend Framework**: [React 18](https://react.dev/)
* **Build Tool & Bundler**: [Vite 5](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
* **Typography**: 
  * `IBM Plex Mono` — Technical monospace typography for body text, tags, and code blocks
  * `Raleway` — High-impact, elegant headings and numerals
* **Icons & Vectors**: Extracted and normalized SVG vectors from the original Figma design system
* **Design Origin**: Extracted via Figma MCP from the [Personal Portfolio Template](https://www.figma.com/design/xO1tSgxT77829hyiq0UByH/%F0%9F%8E%A8-Personal-Portfolio-Template--Community-?node-id=216-14)

---

## Features

- **Responsive Floating Navigation**: Sticky top navigation with brand monogram, smooth section scrolling, social links (GitHub, LinkedIn, Email), and a mobile hamburger menu.
- **Hero Section**: Introduces Muhammad's dual background in Electrical Engineering and full-stack software development, featuring core pillars (Go, TypeScript, Docker, AWS), and a tech stack badge strip.
- **Featured Case Studies**:
  - **Centric**: Peer-to-peer urban logistics marketplace built for **Wema Hackaholics 7.0 (YabaTech)** with a team of 4 ([Live Web App](https://orbit-billing-nomba.vercel.app/)).
  - **CLOB Group**: Curated Luxury Real Estate & Advisory Platform in Lagos ([Live Platform](https://clobgroup.netlify.app/)).
  - **StreamPay**: Decentralized payment gateway and merchant dashboard leveraging Stellar blockchain rails.
  - **TrusTrove**: Trustless web escrow platform with cryptographic contract audits and milestone verification.
  - **SnippetBox Enterprise**: High-throughput web service in Go featuring connection pooling and TLS encryption.
- **Recent Work**: Highlighted builds including the **AsciiArt Web Engine** (Go, [Live Site](https://ascii-art-web-mqal.onrender.com/)) and **PointBox UI** (React + TypeScript).
- **Interactive Project Modal**: Deep dive into architecture breakdowns, key features delivered, metrics, and direct live deployment links.
- **Contact Form**: Interactive message dispatcher with real-time feedback, field validation, and direct email connection.

---

## Project Structure

```text
Portfolio_re/
├── public/
│   └── assets/              # Downloaded Figma SVGs, icons, and project media
│       ├── 4dc39.svg        # Arrow vectors
│       ├── clobgroup-preview.jpg
│       ├── muhammad-headshot.jpeg
│       └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Floating navigation bar & mobile drawer
│   │   ├── Hero.jsx         # Hero section & core engineering stack
│   │   ├── CaseStudies.jsx  # Flagship case study cards & metrics
│   │   ├── RecentWork.jsx   # Selected builds with carousel navigation
│   │   ├── Testimonials.jsx # Recommendations grid
│   │   ├── Contact.jsx      # Direct connect & validated contact form
│   │   ├── ProjectModal.jsx # Detailed project architecture modal view
│   │   └── Footer.jsx       # Minimalist footer with back-to-top action
│   ├── App.jsx              # Main application root
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives and custom scrollbars
├── index.html               # HTML5 entry with Google Fonts preloaded
├── tailwind.config.js       # Color tokens, fonts, and theme extensions
├── vite.config.js           # Vite dev and build configuration
└── package.json
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed:

```bash
node -v
npm -v
```

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd Portfolio_re
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Production Build

To generate an optimized, production-ready build in the `dist/` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Author

**Muhammad Sarumi**
* **Role**: Electrical Engineer & Full-Stack Web Developer
* **GitHub**: [@muhsar27](https://github.com/muhsar27)
* **Email**: [muhsar4321@gmail.com](mailto:muhsar4321@gmail.com)

---

## License

This project is licensed under the [ISC License](LICENSE).

