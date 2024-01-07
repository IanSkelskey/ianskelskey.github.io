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
      screens: {
        'md': '840px',
      },
      spacing: {
        '31': '7.75rem',
        '100': '25rem',
        '114': '29rem',
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
