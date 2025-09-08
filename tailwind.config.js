// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"], // Montserrat
        serif: ["var(--font-eb-garamond)", "serif"],    // EB Garamond
      },
    },
  },
  plugins: [],
};
