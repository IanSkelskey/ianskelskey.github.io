module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'theme-blue-light': '#009cff',
        'theme-blue': '#0051dd',
        'linkedin-blue': '#0077b5',
      },
      maxWidth: {
        'screen-3xl': '1800px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
