/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a1122',     // Matches the navy in your video
        primary: '#3b82f6',  // Matches the blue in your video
      },
    },
  },
  plugins: [],
}