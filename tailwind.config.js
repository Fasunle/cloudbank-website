/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        brand: '120%',
      },
      screens: {
        'tablet-8': { min: '700px', max: '1024px' },
        'xs-max': { max: '600px' },
        xs: { max: '380px' },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        maven: ['Maven Pro', 'sans-serif'],
      },
      colors: {
        'cb-grey': '#959595',
        'cb-black': '#0f0f0f',
        'cb-black-100': '#313e3e',
        'cb-black-200': '#232323',
        'cb-black-300': '#07060d',
        'cb-brown-100': ' #45050a',
        'cb-green': '#008080',
        'cb-green-100': '#d7ecec',
        'cb-green-200': 'rgba(0, 128, 128, 0.2)',
        'cb-red': '#db261b',
        'cb-red-100': '#fff0f0',
        'cb-red-300': 'rgba(254, 163, 170, 0.3)',
        'cb-red-400': 'rgba(254, 163, 170, 0.4)',
        'cb-purple-100': 'rgba(204, 204, 255, 0.4)',
      },
    },
  },
  plugins: [],
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
