import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      elsie: ['Elsie Swash Caps'],
    },
    extend: {
      colors: {
        background: '#191111',
        text: '#FFE7B3',
        menu: '#1B180F',
      },
    },
  },
  plugins: [],
};
export default config;
