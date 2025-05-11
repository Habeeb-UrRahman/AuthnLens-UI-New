
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        detection: {
          real: '#10b981',
          ai: '#ef4444',
        },
        aurora: {
          purple: '#9b87f5',
          blue: '#3B82F6',
          cyan: '#0EA5E9',
          teal: '#2DD4BF',
          emerald: '#10B981',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'scale-out': {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(129, 140, 248, 0)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px 10px rgba(129, 140, 248, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        'aurora': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '33%': {
            transform: 'translateY(-10px) scale(1.05)',
            filter: 'hue-rotate(30deg)'
          },
          '66%': {
            transform: 'translateY(5px) scale(0.95)',
            filter: 'hue-rotate(-30deg)'
          }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'morph-blob': {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '25%': {
            borderRadius: '40% 60% 70% 30% / 30% 40% 60% 70%'
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
          },
          '75%': {
            borderRadius: '60% 40% 30% 70% / 70% 30% 60% 40%'
          }
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'shimmer': {
          '0%': { 
            'background-position': '-200% 0'
          },
          '100%': { 
            'background-position': '200% 0'
          }
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'scale-out': 'scale-out 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'gradient-flow': 'gradient-flow 5s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'enter': 'fade-in 0.5s ease-out, scale-in 0.4s ease-out',
        'aurora': 'aurora 15s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'morph-blob': 'morph-blob 10s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 3s infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee 30s linear infinite reverse',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/hero-pattern.svg")',
        'aurora-gradient': 'linear-gradient(135deg, #9b87f5, #3B82F6, #0EA5E9)',
        'mesh-gradient': 'radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.2) 0px, transparent 70%), radial-gradient(at 0% 50%, rgba(155, 135, 245, 0.2) 0px, transparent 70%), radial-gradient(at 80% 100%, rgba(14, 165, 233, 0.2) 0px, transparent 70%)',
        'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px 10px rgba(129, 140, 248, 0.4)',
        'aurora': '0 0 40px rgba(155, 135, 245, 0.5)',
        'neon': '0 0 10px rgba(155, 135, 245, 0.5), 0 0 20px rgba(155, 135, 245, 0.3), 0 0 30px rgba(155, 135, 245, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.05)',
        '3d': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(155, 135, 245, 0.2)'
      },
      perspective: {
        '800': '800px',
        '1000': '1000px',
        '1200': '1200px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
