module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'theme-black': '#1F2628',
        'theme-white': '#E6EAEA',
        'theme-brown': '#38312A',
        'theme-cream': '#C7ABA4',
        'theme-blue': '#344F62',
        'theme-pink': '#805C58'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
