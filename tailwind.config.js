/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0c0c0d',
          900: '#0a0a0b',
          850: '#101012',
          800: '#16161a',
          700: '#1d1d22',
          600: '#26262c',
        },
        cream: {
          DEFAULT: '#f3f1ea',
          50: '#faf9f5',
          100: '#f3f1ea',
          200: '#e9e6dc',
          300: '#dcd8cb',
        },
        bone: '#ffffff',
        muted: {
          dark: '#7c7c84',
          light: '#8a877d',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1180px',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
