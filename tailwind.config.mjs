/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        AlexBrush: ["Alex Brush", "cursive"],
      },
    },
  },
  plugins: [],
};
