import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import robotsTxt from "astro-robots-txt";
const { PUBLIC_WP_URL, PUBLIC_PROTOCOL } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: "https://astro-estates-course.vercel.app",
  image: {
    remotePatterns: [
      {
        protocol: `${PUBLIC_PROTOCOL}`,
        hostname: `${PUBLIC_WP_URL}`,
      },
    ],
  },
  integrations: [react(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
