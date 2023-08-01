/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          'background-light': '#FFFFFF',
          'background-dark': '#2D3235',
          'default-light': '#37352F',
          'default-dark': '#FFFFFF',
          'gray-light': '#9B9A97',
          'gray-dark': '#979A9B',
          'brown-light': '#64473A',
          'brown-dark': '#937264',
          'orange-light': '#D9730D',
          'orange-dark': '#FFA344',
          'yellow-light': '#DFAB01',
          'yellow-dark': '#FFDC49',
          'green-light': '#0F7B6C',
          'green-dark': '#4DAB9A',
          'blue-light': '#0B6E99',
          'blue-dark': '#529CCA',
          'purple-light': '#9A6DD7',
          'purple-dark': '#6940A5',
          'pink-light': '#AD1A72',
          'pink-dark': '#E255A1',
          'red-light': '#E03E3E',
          'red-dark': '#FF7369',
        }
      },
      fontFamily: {
        'neon': []
      }
    },
  },
  plugins: [],
}
