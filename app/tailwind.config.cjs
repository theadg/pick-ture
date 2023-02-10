/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      main: ['Unbounded'],
      sans: ['Quicksand', 'sans-serifs'],
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      desk: '800px',
    },
    colors: {
      'primary-blue': '#00ADB5',
      'primary-bg': '#222831',
      'secondary-bg': '#393E46',
      yellow: '#A49359',
      card: '#282D36',
      rose: 'rgb(136 19 55)',
      white: '#EEEEEE',
    },
    extend: {
      boxShadow: {
        '3xl':
          'box-shadow: 0 20px 25px 0px rgb(0 0 0 / 0.1), 0 8px 10px 0px rgb(0 0 0 / 0.1);',
      },
    },
  },
  plugins: [],
};
