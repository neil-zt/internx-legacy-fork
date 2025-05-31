/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          DEFAULT: '#3B82F6'
        },
        secondary: {
          pink: '#EC4899',
          green: '#10B981',
          yellow: '#F59E0B'
        },
        gray: {
          100: '#F3F4F6',
          500: '#6B7280',
          800: '#1F2937'
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #60A5FA, #8B5CF6)'
      }
    },
  },
  plugins: [],
} 