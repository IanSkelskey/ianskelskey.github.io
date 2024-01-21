module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "theme-blue-light": "#009cff",
        "theme-blue": "#0077b5",
        'asu-maroon': '#8C1D40',
        'asu-gold': '#FFC627',
      },
      screens: {
        xs: "540px",
        md: "860px",
      },
      spacing: {
        31: "7.75rem",
        100: "25rem",
        114: "29rem",
      },
      maxWidth: {
        "screen-3xl": "1800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
