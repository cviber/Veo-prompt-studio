/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4f46e5',
        'brand-secondary': '#7c3aed',
        'light-bg': '#f9fafb',
        'dark-bg': '#111827',
        'dark-card': '#1f2937',
        'dark-border': '#374151',
        'light-text': '#f3f4f6',
        'dark-text': '#1f2937',
      },
    },
  },
  plugins: [],
}
