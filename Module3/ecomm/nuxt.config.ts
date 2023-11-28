// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.scss"],
  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-vuefire"],
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: "AIzaSyBy4c-036lb5IlVon6TVw1C-U0mMbfG2tQ",
      authDomain: "logical-bolt-384905.firebaseapp.com",
      projectId: "logical-bolt-384905",
      storageBucket: "logical-bolt-384905.appspot.com",
      messagingSenderId: "376340620311",
      appId: "1:376340620311:web:4d93657d1bf2d605782852",
      // there could be other properties depending on the project
    },
  },
});
