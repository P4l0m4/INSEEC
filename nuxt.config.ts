// https://nuxt.com/docs/api/configuration/nuxt-config

import { getBlogPages, getPortfolioPages } from "./src/utils/sitemap.js";

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],
  modules: [
    "nuxt-simple-sitemap",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_KEY }],
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
    sitemaps: true,
    siteUrl: "https://chamberycampus.com/",
    // urls: async () => {
    //   const blogPages = await getBlogPages();
    //   const portfolioPages = await getPortfolioPages();
    //   return [...blogPages, ...portfolioPages];
    // },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },
  app: {
    head: {
      script: [
        {
          hid: "gtmHead",
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', 'GTM-W8N9CXHL');`,

          defer: true,
          async: true,
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=AW-355120123",
          innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'AW-355120123')`,
          async: true,
        },
      ],
      htmlAttrs: { lang: "fr" },
    },
  },
});
