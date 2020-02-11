<template>
  <main class="error">
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Back to Home</nuxt-link>
  </main>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'fullpage'
  }
</script>
