/** @type {import('tailwindcss').Config} */
export default {
  // Updated content path to ensure it catches files in root (App.tsx) and subfolders
  content: [
    './index.html', 
    './*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
    './context/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FF9F8C', // Soft coral/orange
        secondary: '#A0E8AF', // Soft green
        accent: '#8CC0FF', // Soft blue
        dark: '#2D3748',
        light: '#F7FAFC',
        glass: 'rgba(255, 255, 255, 0.4)',
        'glass-border': 'rgba(255, 255, 255, 0.6)',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};