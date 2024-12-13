// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: "https://jung-han.github.io",
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
});