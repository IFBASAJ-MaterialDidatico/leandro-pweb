// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import Draft from "./theme/layouts/Draft.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Draft", Draft);
  },
});
