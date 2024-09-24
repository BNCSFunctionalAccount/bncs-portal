import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
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
