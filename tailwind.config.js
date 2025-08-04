// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['var(--font-eb-garamond)', 'serif'],
      },
    },
  },
  plugins: [],
};