/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hm-yellow': '#fed50a',
        'hm-black75': '#404040',
      },
      backgroundColor: {
        'hm-black75': '#404040',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        light: '#ffffff20',
      },
    },
  },
  plugins: [],
};
