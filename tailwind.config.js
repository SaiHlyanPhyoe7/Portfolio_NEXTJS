/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['JetBrains Mono', 'monospace'],
      plaster: ['Lilita One', 'cursive']
    },
    extend: {
      colors: {
        white: '#f5f5f7'
      }
    }
  },
  plugins: []
}
