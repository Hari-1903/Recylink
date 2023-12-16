import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': '#3E8914',
        'dark-primary': '#134611',
        'secondary': '#3DA35D',
        'teritiary': '#96E072',
        'tint': '#F9FFF1',
      },
      boxShadow: {
        'nav': '-3px -3px 5px 5px rgba(0, 0, 0, 0.1)',
        'content': '3px 3px 5px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
