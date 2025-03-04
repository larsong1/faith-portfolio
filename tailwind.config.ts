import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Adrianna', 'Arial', 'sans-serif'],
        adrianna: ['Adrianna', 'Arial', 'sans-serif'],
      },
      colors: {
        /*background: "var(--background)",
        foreground: "var(--foreground)",*/
      },
    },
  },
  plugins: [],
} satisfies Config;
