/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This now correctly points to your new folder
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a1122',
        primary: '#3b82f6',
        secondary: '#10b981',
        card: '#1e293b',
      },
      // ... keep your other extensions
    },
  },
  plugins: [],
}