import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mar: "#3A59F9",
      },
      fontFamily: {
        nerd: "Nerd",
      },
      fontSize: {
        xxs: "0.6rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
