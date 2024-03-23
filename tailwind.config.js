/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D9F8F3', // Light green
          200: '#B2F2E8',
          300: '#8CEDDC',
          400: '#66E7D0',
          500: '#3FE2C5', // Main green
          600: '#1ADAB4',
          700: '#16B896',
          800: '#119778',
          900: '#0C775A',
        },
        secondary: {
          100: '#FFE8E8', // Light purple
          200: '#FFCACA',
          300: '#FFA9A9',
          400: '#FF8989',
          500: '#FF6868', // Main purple
          600: '#FF4747',
          700: '#FF2626',
          800: '#FF0505',
          900: '#CC0404',
        },
        neutral: {
          100: '#F5F5F5', // Light gray
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373', // Main gray
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}