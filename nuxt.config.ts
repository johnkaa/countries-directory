// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Countries directory",
    },
    baseURL: "/countries-directory/",
  },
  modules: ["@nuxtjs/eslint-module", "@nuxt/image", "@nuxt/ui", "@pinia/nuxt"],
});
