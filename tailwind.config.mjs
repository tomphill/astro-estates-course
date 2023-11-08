/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@wp-block-tools/styles/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
