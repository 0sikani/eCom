/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js,css,scss}",
    "./src/app/**/*.{html,ts,js,css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          600: '#4f46e5',
          700: '#4338ca'
        }
      }
    }
  },
  plugins: [],
}
