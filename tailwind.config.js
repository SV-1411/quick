/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Allura', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-green': '#0a2923',
        'brown': '#8b6f5c',
      },
    },
  },
  plugins: [],
};
