export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  tailwindcss: {},
  googleFonts: {
    families: {
      Lora: true,
      Inter: true,
    }
  },
})
