/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#080808',
          800: '#121212',
          700: '#1b1b1b',
          600: '#252525',
          border: '#484848',
        },
        accent: {
          green: '#3f8e00',
          'green-border': '#62ba1b',
          orange: '#ffa217',
          blue: '#000aff',
          teal: '#2ab090',
        },
        muted: {
          DEFAULT: '#9c9c9c',
          light: '#757575',
        }
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        heading: ['"Raleway"', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0px 8px 20px rgba(63, 142, 0, 0.45)',
        'glow-orange': '0px 8px 20px rgba(255, 162, 23, 0.35)',
        'glow-blue': '0px 8px 20px rgba(0, 10, 255, 0.35)',
        'glow-teal': '0px 8px 20px rgba(42, 176, 144, 0.35)',
      }
    },
  },
  plugins: [],
}
