
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
        },
        // GTA 6 inspired color palette
        gta: {
          red: '#F97316',
          pink: '#EC4899',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          neon: '#10B981',
          gold: '#F59E0B',
          dark: '#1A1F2C',
          light: '#F8FAFC',
        },
        // Trolling funny colors
        funny: {
          bubblegum: '#FF77E9',
          slime: '#A3FF00',
          crayon: '#FF5757',
          banana: '#FFDE59',
          cyan: '#00FFFF',
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
        // GTA 6 inspired animations
        'neon-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 15px 5px rgba(236, 72, 153, 0.7)',
            textShadow: '0 0 15px rgba(236, 72, 153, 0.7)'
          },
          '50%': { 
            boxShadow: '0 0 25px 10px rgba(236, 72, 153, 0.9)',
            textShadow: '0 0 25px rgba(236, 72, 153, 0.9)'
          },
        },
        'cityscape': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        'flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 3px)' },
          '66%': { transform: 'translate(5px, -3px)' },
        },
        // Trolling animations
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        'bounce-crazy': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '40%': { transform: 'translateY(-20px) scale(0.8)' },
          '60%': { transform: 'translateY(-10px) scale(1.2)' },
          '80%': { transform: 'translateY(-5px) scale(1.1)' },
        },
        'shake-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(10px)' },
          '60%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
        },
        'shake-vertical': {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-10px)' },
          '40%': { transform: 'translateY(10px)' },
          '60%': { transform: 'translateY(-10px)' },
          '80%': { transform: 'translateY(10px)' },
        },
        'jello': {
          '0%, 100%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
        },
        'flip-x': {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
        },
        'flip-y': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(-1)' },
        },
        'spin-fast': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-grow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'tilt-left-right': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        'fall': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        'move-around': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, 10px) rotate(5deg)' },
          '50%': { transform: 'translate(0, 15px) rotate(0deg)' },
          '75%': { transform: 'translate(-10px, 10px) rotate(-5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
        'rainbow': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
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
        // GTA 6 inspired animations
        'neon-pulse': 'neon-pulse 2s infinite',
        'cityscape': 'cityscape 20s linear infinite',
        'flicker': 'flicker 0.5s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'gta-float': 'float 4s ease-in-out infinite alternate',
        // Trolling animations
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'bounce-crazy': 'bounce-crazy 1s ease-in-out infinite',
        'shake-horizontal': 'shake-horizontal 0.3s ease-in-out infinite',
        'shake-vertical': 'shake-vertical 0.5s ease-in-out infinite',
        'jello': 'jello 1s ease-in-out infinite',
        'flip-x': 'flip-x 2s ease-in-out infinite',
        'flip-y': 'flip-y 2s ease-in-out infinite',
        'spin-fast': 'spin-fast 0.8s linear infinite',
        'pulse-grow': 'pulse-grow 1s ease-in-out infinite',
        'tilt-left-right': 'tilt-left-right 2s ease-in-out infinite',
        'fall': 'fall 5s linear infinite',
        'move-around': 'move-around 5s ease-in-out infinite',
        'rainbow': 'rainbow 3s linear infinite',
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/hero-pattern.svg")',
        'aurora-gradient': 'linear-gradient(135deg, #9b87f5, #3B82F6, #0EA5E9)',
        'mesh-gradient': 'radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.2) 0px, transparent 70%), radial-gradient(at 0% 50%, rgba(155, 135, 245, 0.2) 0px, transparent 70%), radial-gradient(at 80% 100%, rgba(14, 165, 233, 0.2) 0px, transparent 70%)',
        // GTA 6 inspired backgrounds
        'gta-gradient': 'linear-gradient(135deg, #1A1F2C 0%, #403E43 100%)',
        'neon-grid': 'repeating-linear-gradient(90deg, rgba(236, 72, 153, 0.15) 0px, rgba(236, 72, 153, 0.15) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(180deg, rgba(236, 72, 153, 0.15) 0px, rgba(236, 72, 153, 0.15) 1px, transparent 1px, transparent 20px)',
        'cityscape': 'url("/cityscape.svg")',
        // Trolling backgrounds
        'comic-dots': 'radial-gradient(#000 1px, transparent 2px)',
        'funky-stripes': 'repeating-linear-gradient(45deg, #FF77E9, #FF77E9 20px, #A3FF00 20px, #A3FF00 40px)',
      },
      boxShadow: {
        'glow': '0 0 20px 10px rgba(129, 140, 248, 0.4)',
        'aurora': '0 0 40px rgba(155, 135, 245, 0.5)',
        'neon': '0 0 10px rgba(155, 135, 245, 0.5), 0 0 20px rgba(155, 135, 245, 0.3), 0 0 30px rgba(155, 135, 245, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.05)',
        '3d': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
        // GTA 6 inspired shadows
        'gta-neon': '0 0 10px rgba(249, 115, 22, 0.7), 0 0 20px rgba(236, 72, 153, 0.4)',
        'gta-text': '0 0 5px rgba(249, 115, 22, 0.7)',
        'gta-box': '0 0 15px rgba(139, 92, 246, 0.5), 0 10px 30px -15px rgba(0, 0, 0, 0.5)',
        // Trolling shadows
        'silly': '5px 5px 0 rgba(0,0,0,0.8)',
        'multi-color': '0 0 10px rgba(255,0,0,0.5), 0 0 20px rgba(0,255,0,0.5), 0 0 30px rgba(0,0,255,0.5)',
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
