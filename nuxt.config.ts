export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lora: true,
      Inter: true,
      Proxima: true,
      Poppins: true,
    }
  },
  css: [
    '~/assets/style.scss'
  ]
})
