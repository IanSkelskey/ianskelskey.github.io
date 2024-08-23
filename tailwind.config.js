// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-neutral': '#414141', // Tundora 
        'darker-neutral': '#262626', // Mine Shaft
        'darkest-neutral': '#171717', // Cod Gray
        'light-neutral': '#dadada', // Alto
        'lighter-neutral': '#e5e5e5', // Mercury
        'lightest-neutral': '#f5f5f5', // Wild Sand
        'accent': '#0077b5', // Deep Cerulean
        'accent-dark': '#00689e', // Bahama Blue
        'accent-light': '#0189d0', // Lochmara
      },
    },
  },
  plugins: [],
};
