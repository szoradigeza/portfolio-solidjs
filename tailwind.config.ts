import { parkwindPlugin } from "@park-ui/tailwind-plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["ubuntu"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
      },
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
  },
  plugins: [parkwindPlugin],
  parkUI: {
    accentColor: "crimson",
    grayColor: "olive",
    borderRadius: "md",
  },
  darkMode: ["class"],
};

export default config;
