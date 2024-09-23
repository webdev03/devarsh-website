import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://devarsh.me",
  output: "server",
  integrations: [],
  adapter: cloudflare({
    imageService: "cloudflare"
  })
});
