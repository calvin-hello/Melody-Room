/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0d0b14',
          secondary: '#161224',
          card: '#1c1730',
        },
        purple: {
          deep: '#3d1f7a',
          mid: '#5b2fa8',
          bright: '#7b4fd4',
          accent: '#9d6eef',
          glow: '#b98fff',
        },
        text: {
          primary: '#f0eaff',
          secondary: '#a89bc4',
          muted: '#6b5e88',
        },
        border: 'rgba(123,79,212,0.25)',
        danger: '#e05c7a',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        'card-lg': '20px',
      },
      backdropBlur: {
        glass: '16px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease both',
      },
    },
  },
  plugins: [],
};
