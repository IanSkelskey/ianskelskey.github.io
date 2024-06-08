# Ian Skelskey's Portfolio

Welcome to my portfolio, a showcase of my skills and projects as a full-stack software engineer. This web application is crafted with React Tailwind CSS, and Framer Motion featuring a clean, responsive, and accessible design.

## Features

- Responsive layout with adaptive components for optimal viewing on any device.
- Dark mode toggle for accessibility and user preference.
- Contact form integrated with Formspree for direct messaging.
- Projects section with detailed cards for each portfolio item.
- Animated drawer for mobile navigation.
- GitHub workflows to automate deployment and code formatting.

## Getting Started

To set up your portfolio with this template:

1. Clone the repository:
   `git clone https://github.com/IanSkelskey/ianskelskey.github.io.git`
2. Install the necessary dependencies:
   `npm install`
3. Start the development server:
   `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Customize content and styles to match your brand and showcase your work.

## Tech Stack

| Tech                                                                                                 | Description                                                |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)                      | Front-end JavaScript library for building user interfaces. |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) | Utility-first CSS framework for rapid UI development.      |
| ![Form Spree](https://img.shields.io/badge/-Form_Spree-2EA2EF?logo=formspree&logoColor=white)        | Form backend service for contact form integration.         |
| ![Font Awesome](https://img.shields.io/badge/-Font_Awesome-339AF0?logo=font-awesome&logoColor=white) | Scalable vector icons for modern web applications.         |
| ![Simple Icons](https://img.shields.io/badge/-Simple_Icons-111111?logo=simpleicons&logoColor=white)  | Free SVG icons for popular brands.                         |
| ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white)             | Opinionated code formatter for consistent code style.      |
| ![GitHub Pages](https://img.shields.io/badge/-Github_Pages-2088FF?logo=githubpages&logoColor=white)  | Static site hosting for deployment.                        |
| ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white)     | Production-ready motion library for React.                 |

## Project File Structure

The project follows a standard React application structure, organized for clarity and easy navigation. Here's a brief overview of the main directories and files:

```bash
.
├── .github/                  # GitHub workflows for CI/CD
│   ├── workflows/            # Workflows for CI/CD, including deployment and prettier formatting
├── public/                   # Static files like index.html, favicon, logos, and manifest
│   ├── assets/               # Public assets like images and project-specific graphics
│       ├── projects/         # Assets related to specific projects showcased in the portfolio
├── src/                      # Source code of the application
│   ├── components/           # Reusable React components
│       ├── atoms/            # Basic building blocks of the UI (e.g., Badge, Icon)
│       ├── content/          # Components for content sections (e.g., ContactForm, Footer)
│       ├── layout/           # Layout components for structuring pages (e.g., Drawer, Page)
│       ├── media/            # Media components like Spotify and YouTube players
│   ├── data/                 # Data files for badges, CV details, icons, projects, etc.
│   ├── pages/                # Components for whole pages (e.g., About, Projects, Resume)
│       ├── projects/         # Detailed project pages
│   ├── assets/               # Static assets (SVGs for tech stack icons and project logos)
│   ├── App.js                # Main application component
│   ├── App.test.js           # Tests for the main application
│   ├── index.css             # Global styles
│   ├── index.js              # Entry point of the React application
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Locked versions of dependencies
├── postcss.config.js         # PostCSS configuration for processing CSS
├── tailwind.config.js        # Tailwind CSS configuration for custom styles
├── README.md                 # Documentation of the project
├── TODO.md                   # List of tasks and features to be implemented
├── .gitignore                # Specifies intentionally untracked files to ignore
├── .prettierrc               # Configuration for Prettier to enforce consistent code style
├── .prettierignore           # Files and directories that Prettier will ignore
```

`.github/workflows/`

GitHub workflows for CI/CD. The `deploy.yml` workflow is configured to deploy the application to GitHub Pages on every push to the `main` branch. The `prettier.yml` workflow is configured to run Prettier on every push to the `main` or `dev` branches.

`public/`

Static files such as `index.html`, `favicon.ico`, and `robots.txt`.

`src/`

Source files for the application. The `components/` directory contains reusable components, and the `pages/` directory contains page components. The `assets/` directory contains static assets such as images and fonts. The `App.js` file is the main application component, and the `index.js` file is the application entry point.

## Deployment

This portfolio is set up to deploy to GitHub Pages using the `gh-pages` package. There are workflows configured to automatically deploy the application to GitHub Pages on every push to the `main` branch. You can also deploy the application manually by running the following commands in your terminal:

1. Run the build script:
   `npm run build`
2. Deploy to GitHub Pages:
   `npm run deploy`

## Contributions

I would like for other developers to review my code. I want to get better at writing clean, readable code, and I want to learn more about React. If you have any suggestions for improvements, please feel free to open an issue. I would also appreciate any feedback on my design and code.

---

© 2024 Ian Skelskey. All rights reserved.
