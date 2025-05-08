/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="quickbooks"][data-colorscheme="dark"]'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      }
    },
    extend: {
      colors: {
        // Custom QuickBooks color palette
        'qb-primary': {
          DEFAULT: '#2ca01c',
          hover: '#258f1d',
          active: '#108000',
          focus: '#2ca01c',
          dark: '#53b700',
          'dark-hover': '#75c533',
          'dark-active': '#87cd4c'
        },
        'qb-info': {
          DEFAULT: '#0077c5',
          dark: '#34bfff',
        },
        'qb-attention': {
          DEFAULT: '#ff6a00',
          dark: '#ffac61',
        },
        'qb-negative': {
          DEFAULT: '#d52b1e',
          dark: '#ff8979',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Avenir Next forINTUIT", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        'qb-level-1': '0px 1px 4px 0px rgba(0, 0, 0, 0.2)',
        'qb-level-2': '0px 2px 8px 0px rgba(0, 0, 0, 0.2)',
        'qb-level-3': '0px 4px 16px 0px rgba(0, 0, 0, 0.2)',
        'qb-level-4': '0px 6px 24px 0px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        'display-1': '84px',
        'display-2': '72px',
        'display-3': '60px',
        'display-4': '48px',
        'heading-1': '48px',
        'heading-2': '40px',
        'heading-3': '34px',
        'heading-4': '28px',
        'heading-5': '24px',
        'heading-6': '16px',
        'body-1': '20px',
        'body-2': '16px',
        'body-3': '14px',
        'body-4': '12px',
      },
      animation: {
        'qb-appear': 'qbAppear 0.3s cubic-bezier(0, 0, 0.25, 1)',
        'qb-transform': 'qbTransform 0.4s cubic-bezier(0.35, 0, 0.25, 1)',
        'qb-emphasize': 'qbEmphasize 0.7s cubic-bezier(0.15, 1.4, 0.25, 1)',
      },
      keyframes: {
        qbAppear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        qbTransform: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        qbEmphasize: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '80%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'qb-emphasize': 'cubic-bezier(0.15, 1.4, 0.25, 1)',
      },
      spacing: {
        'qb-xs': '8px',
        'qb-sm': '12px',
        'qb-md': '16px',
        'qb-lg': '24px',
        'qb-xl': '40px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}