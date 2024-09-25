import type { Config } from 'tailwindcss'
// import { Table } from './src'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // define colors here
      },
    },
  },
  plugins: [],
}
export default config
