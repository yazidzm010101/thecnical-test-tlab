const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

