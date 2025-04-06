import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html",
     "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['BEBAS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config