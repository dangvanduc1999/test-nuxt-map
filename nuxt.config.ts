// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/apollo",
  ],
  devtools: { enabled: true },
  css: [
    "~/assets/main.scss", 
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://sandbox16.mybigcommerce.com/graphql",
        httpLinkOptions: {
          headers: {
            Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9kZXZlbG9wZXIuYmlnY29tbWVyY2UuY29tIl0sImVhdCI6MTY5NzEyNTIxMywiaWF0IjoxNjk2OTUyNDEzLCJpc3MiOiJCQyIsInNpZCI6OTk4NjUzLCJzdWIiOiJiY2FwcC5saW5rZXJkIiwic3ViX3R5cGUiOjAsInRva2VuX3R5cGUiOjF9.jnEcPrkXObNz4TXW0Lxe7IvXuhg_K5kQwUFv8z61dIiUnsSIfVIiP6JbHg_ZomnX0dZu5EvPqFffj5A60ueoCA"
          },
        },
      },
    },
  },
  
})
