import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://devarsh.me",
  output: "static",
  integrations: [svelte()],
  adapter: cloudflare({
    imageService: "cloudflare"
  })
});
