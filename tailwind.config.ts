import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './util/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  safelist: ['flex-row', 'flew-row-reverse'],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        background: '#191111',
        text: '#FFE7B3',
        menu: '#1B180F',
      },
      dropShadow: {
        skill: '0 12px 20px #FFE7B3',
        banner: '0 0px 10px #FFE7B3',
        name: '0 -5px 5px #FFE7B3',
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
    addVariablesForColors,
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '@keyframes slideIn': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(30%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '0.7' },
        },
        '.animate-slideIn': {
          animation: 'slideIn 0.3s forwards',
        },
        '@keyframes slideDowntoUp': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        '.animate-slideDowntoUp': {
          animation: 'slideDowntoUp 0.3s ease-out forwards',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
export default config;
