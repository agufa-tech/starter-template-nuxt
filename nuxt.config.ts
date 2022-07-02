import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",

  app: {
    head: {
      title: "Nuxt 3 Starter Template",
      titleTemplate: "%s - Nuxt 3 Starter Template",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt 3 Starter Template",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
  },

  runtimeConfig: {
    public: {
      env: process.env.ENV,
      baseURL: process.env.BASE_URL,
      mediaURL: process.env.MediaURL,
      domain: process.env.DOMAIN,
      name: process.env.NAME,
      title: process.env.TITLE,
      company: process.env.COMPANY,
      randomLen: process.env.RANDOMLEN,
      apiURL:
        process.env.ENV === "dev"
          ? process.env.DevAPI
          : process.env.ENV === "stage"
          ? process.env.StageAPI
          : process.env.ProdAPI,
    },
  },

  alias: {
    images: fileURLToPath(new URL("./assets/images", import.meta.url)),
    style: fileURLToPath(new URL("./assets/css", import.meta.url)),
    data: fileURLToPath(new URL("./assets/other/data", import.meta.url)),
  },

  modules: [
    "nuxt-windicss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "unplugin-icons/nuxt",
    "@intlify/nuxt3",
    "@nuxtjs/svg",
  ],

  // localization - i18n config
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "es", "fr", "de", "ru", "it", "zh", "ja", "ko"],
    },
  },

  // unplugin-icons
  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
      Components({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
    ],
  },
});
