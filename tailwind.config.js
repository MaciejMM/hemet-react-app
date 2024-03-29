/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        black: {
          10: '#e6e6e6',
          25: '#bfbfbf',
          50: '#808080',
          75: '#404040',
          90: '#191919',
        },
      },
      colors: {
        'hm-yellow': '#fed50a',
        'hm-black50': '#808080',
        'hm-black75': '#404040',
        'hm-black90': '#191919',
        'hm-black10': '#e6e6e6',
        black: {
          10: '#e6e6e6',
          25: '#bfbfbf',
          50: '#808080',
          75: '#404040',
          90: '#191919',
        },
        yellow: {
          hm: '#fed50a',
          50: '#FED50A4C',
          70: '#FED50AB2',
          90: '#FED50AE5',
        },
      },
      backgroundColor: {
        'hm-black75': '#404040',
        'hm-lightgrey': 'rgb(242,245,247)',
        black: {
          10: '#e6e6e6',
          25: '#bfbfbf',
          50: '#808080',
          75: '#404040',
          90: '#191919',
        },
        yellow: {
          hm: '#fed50a',
          50: '#FED50A4C',
          70: '#FED50AB2',
          90: '#FED50AE5',
        },
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        light: '#ffffff20',
        menu: 'rgba(128, 128, 128, 0.2)',
      },
      fontSize: {
        'hm-title': '2.5rem',
        'footer-title': '1.5rem',
      },
      height: {
        menu: 'calc(100vh - 70px)',
      },
      gridTemplateRows: {
        custom: 'minmax(250px,auto) min-content',
        'custom-min': 'min-content',
      },
      width: {
        'container-xl': '1200px',
      },
      minWidth: {
        'container-xl': '1200px',
      },
      maxWidth: {
        'c-xl': '1200px',
      },
    },
  },
  plugins: [],
};
