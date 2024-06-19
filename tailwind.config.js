module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#262626',
          DEFAULT: '#0D0D0D',
          dark: '#3c1d95',
        },
        secondary: {
          light: '#a78bfa',
          DEFAULT: '#1E1E1E',
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
