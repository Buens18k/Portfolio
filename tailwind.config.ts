import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['flex-row', 'flew-row-reverse'],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        background: '#191111',
        text: '#FFE7B3',
        menu: '#1B180F',
      },
    },
  },
  variants: {
    extends: {
      opacity: ['group-hover'],
      display: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '@keyframes slideIn': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(30%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '0.7' },
        },
        '.animate-slideIn': {
          animation: 'slideIn 0.3s forwards',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
