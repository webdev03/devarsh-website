import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://devarsh.me",
  output: "static",
  integrations: [],
  image: {
    service: passthroughImageService()
  }
});
