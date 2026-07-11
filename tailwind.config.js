/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5EB',
          100: '#FFE6CC',
          200: '#FFC899',
          300: '#FFAA66',
          400: '#FF8C33',
          500: '#FF6B00',
          600: '#E55F00',
          700: '#CC5300',
          800: '#993F00',
          900: '#662B00',
        },
        navy: {
          50: '#E7ECF3',
          100: '#C4CFDE',
          200: '#9CB0C5',
          300: '#7489A6',
          400: '#4D6287',
          500: '#3A4E6E',
          600: '#2D3D56',
          700: '#1F2C3F',
          800: '#0F172A',
          900: '#0A0F1C',
        },
        ink: '#111827',
        muted: '#6B7280',
        line: '#E5E7EB',
        canvas: '#F8FAFC',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.875rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.5rem',
        'xl4': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(15, 23, 42, 0.08)',
        'card': '0 8px 32px -12px rgba(15, 23, 42, 0.12)',
        'lift': '0 20px 48px -16px rgba(15, 23, 42, 0.18)',
        'glow': '0 0 40px -8px rgba(255, 107, 0, 0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(255,107,0,0.12), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
