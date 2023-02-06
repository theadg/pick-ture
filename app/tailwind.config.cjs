/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      main: ['Unbounded'],
      sans: ['Quicksand', 'sans-serifs'],
    },
    // TODO: Add Color Palette
    colors: {
      'primary-blue': '#00ADB5',
      'primary-bg': '#222831',
      'secondary-bg': '#393E46',
      white: '#EEEEEE',
    },
    extend: {},
  },
  plugins: [],
};