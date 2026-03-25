/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        memorial: {
          bg: '#f5f5f5',
          card: '#ffffff',
          text: '#333333',
          muted: '#666666',
          accent: '#8b7355',
          border: '#eaeaea'
        }
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Segoe UI', 'system-ui', 'sans-serif']
      },
      animation: {
        'flicker': 'flicker 1s infinite alternate',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        flicker: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.05)', opacity: '0.9' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
