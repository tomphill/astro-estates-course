/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "**/@wp-block-tools/styles/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "event-horizon": "var(--color--event-horizon)",
        "blast-off": "var(--color--blast-off)",
      },
    },
  },
  plugins: [],
};
