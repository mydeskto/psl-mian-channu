import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0E2A52',
        teal: '#1B7A9E',
        brandGreen: '#2E9E46',
        leaf: '#7EC850',
        gold: '#F0B429',
        ink: '#11213A',
        paper: '#F7F8FA'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Narrow', 'sans-serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 50px rgba(14, 42, 82, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
