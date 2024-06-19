module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7c3aed',
          DEFAULT: '#5b21b6',
          dark: '#3c1d95',
        },
        secondary: {
          light: '#a78bfa',
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
        },
        neutral: {
          light: '#f3f4f6',
          DEFAULT: '#e5e7eb',
          dark: '#d1d5db',
        },
      },
    },
  },
  plugins: [],
}
