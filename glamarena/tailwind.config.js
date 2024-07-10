/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif-jp': ['"Noto Serif JP"', 'serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
        'libre-baskerville': ['Libre Baskerville', 'serif'],
      },
      backgroundImage: {
        'custom-image': "url('/bg.jpg')",
        'poster-bg':"url('/posterbg.jpg')",
        'custom-gradient': 'linear-gradient(90deg, #fff7ad 0%, #ffa9f9 100%)',
      },
    },
  },
  plugins: [],
}