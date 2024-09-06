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
      boxShadow: {
        'custom-shadow': '0 8px 16px rgba(208, 169, 51, 0.5)',
      },
      textShadow: {
        'custom-gold': '0 8px 16px rgba(208, 169, 51, 0.5)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const textShadow = theme('textShadow');
      const textShadowUtilities = Object.keys(textShadow).map(key => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: textShadow[key],
          },
        };
      });
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    }
  ],
}

