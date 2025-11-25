/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        limeBright: {
          light: '#a3d977',
          DEFAULT: '#b8e986',
        },
        mediumGreen: '#7a9b2e',
        darkOliveGreen: '#3d4a26',
        offWhiteCream: {
          light: '#f8f8f6',
          DEFAULT: '#fafaf9',
        },
        lightGray: '#e5e5e3',
        mediumGray: '#888888',
        darkCharcoal: '#333333',
        veryDarkGray: '#1c1c1c',
        darkGreenGray: '#323d2a',
      }
    },
  },
  plugins: [],
}
