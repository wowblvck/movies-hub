import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...fontFamily.serif],
        roboto: ['Roboto', ...fontFamily.serif],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['acid'],
    logs: false,
  },
};
