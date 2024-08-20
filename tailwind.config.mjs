/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-yellow": "#a9800b",
        "light-yellow": "#fbbf13",
        "dark-blue": "#26303c",
        "light-blue": "#58eaf7",
      },
    },
  },
  plugins: [],
};
