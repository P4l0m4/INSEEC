import { getNews } from "./src/utils/sitemap.js";
import { getPrograms } from "./src/utils/sitemap.js";

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],
  modules: [
    "@nuxtjs/sitemap",
    [
      "@storyblok/nuxt",
      { accessToken: process.env.STORYBLOK_KEY, cacheProvider: "memory" },
    ],
    "nuxt-jsonld",
    "dayjs-nuxt",
  ],

  dayjs: {
    locales: ["fr"],
    defaultLocale: "fr",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_variables.scss";',
        },
      },
    },
  },
  sitemap: {
    urls: async () => {
      const newsPages = await getNews();
      const programPages = await getPrograms();
      return [...newsPages, ...programPages];
    },
  },
  site: {
    url: "https://chamberycampus.com/",
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "fr" },
    },
  },
});
