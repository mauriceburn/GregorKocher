// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity", "@nuxtjs/robots", "~/modules/sitemap"],
  sanity: {
    projectId: "1lv1ttz7",
  },
  robots: {
    rules: {
      UserAgent: "*",
      Allow: "/",
    },
  },
  sitemap: {
    hostname: "https://kocher-thoraxchirurgie.ch",
  },
});
