import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
const {
  PUBLIC_WP_URL
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  site: "https://astro-estates-course.vercel.app",
  image: {
    domains: [PUBLIC_WP_URL]
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), robotsTxt()],
  output: "hybrid",
  adapter: vercel()
});