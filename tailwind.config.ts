import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      elsie: ['Elsie Swash Caps'],
    },
    extend: {
      colors: {
        background: '#191918',
        test: '#B5B3AD',
        menu: '#2A2A28',
      },
    },
  },
  plugins: [],
};
export default config;
