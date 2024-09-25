import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        evidenOrange: "#ff6d43",
        deepBlue: "#002d4c",
        lightGray: "#ececed"
      },
    },
  },
  plugins: [],
}
export default config
