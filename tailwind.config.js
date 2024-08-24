/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gold': '#D0A933',
      },
      borderColor: {
        'custom-gold': '#D0A933',
      },
    },
  },
  plugins: [],
}

