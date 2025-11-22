/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Apple Green shades
        appleGreen: {
          50: '#e7f1d9',
          100: '#cfe3b3',
          200: '#b7d68c',
          300: '#9fc866',
          400: '#87b943',
          500: '#6c9335',
          600: '#516e28',
          700: '#36491a',
          800: '#1b250d',
        },
        // Asparagus shades
        asparagus: {
          50: '#deefd7',
          100: '#bddeaf',
          200: '#9cce88',
          300: '#7abe60',
          400: '#5ea543',
          500: '#4b8235',
          600: '#386228',
          700: '#26411b',
          800: '#13210d',
        },
        // Yellow Green shades
        yellowGreen: {
          50: '#eff5d7',
          100: '#deecaf',
          200: '#cee286',
          300: '#bed85e',
          400: '#adce36',
          500: '#8ca829',
          600: '#697e1e',
          700: '#465414',
          800: '#232a0a',
        },
        // Sea Green shades
        seaGreen: {
          50: '#c3f5d7',
          100: '#88ecb0',
          200: '#4ce288',
          300: '#21c864',
          400: '#178e46',
          500: '#127038',
          600: '#0e542a',
          700: '#09381c',
          800: '#051c0e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        logo: ['Montserrat', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(135, 185, 67, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(135, 185, 67, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
