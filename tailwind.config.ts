import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./Componentes/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    theme: {
      extend: {
        gridAutoRows: {
          "2fr": "minmax(0, 2fr)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
