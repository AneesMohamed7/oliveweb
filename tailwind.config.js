/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E8BCB', // Primary Blue
          light: '#5aa3db',
          dark: '#1e6899',
        },
        accent: {
          DEFAULT: '#64B546', // Accent Green
          light: '#82c968',
          dark: '#4a8a32',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        background: {
          soft: '#f0f8ff',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
