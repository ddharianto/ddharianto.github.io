/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#330099',
        raisin: '#2E282A',
        flame: '#E4572E',
      },
      backgroundImage: {
        hero: "url('/src/assets/images/starry-night-sky.jpg')",
        sun: "url('/src/assets/images/sun.png')",
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
          },
        },
      },
      animation: {
        ping_once: 'ping 0.5s linear',
        bounceslow: 'bounce 5s linear infinite',
        bounceslowdelay: 'bounce 5s 2.5s linear infinite',
        spinslow: 'spin 5s linear infinite',
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
