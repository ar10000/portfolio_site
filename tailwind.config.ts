import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        // Mobile: 320px - 640px (default)
        // Tablet: 641px - 1024px
        'tablet': '641px',
        // Desktop: 1025px+
        'desktop': '1025px',
      },
      spacing: {
        'touch': '44px', // Minimum touch target size
      },
      fontSize: {
        // Responsive font sizes
        'xs-mobile': ['0.75rem', { lineHeight: '1.5' }],
        'sm-mobile': ['0.875rem', { lineHeight: '1.5' }],
        'base-mobile': ['1rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
export default config;

