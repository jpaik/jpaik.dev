<template>
  <div class="wrapper">
    <nuxt class="content" />
  </div>
</template>

<script>

export default {
  head() {
    return{
      bodyAttrs: {
        class: 'page__' + this.$route.name
      }
    }
  },
}
</script>