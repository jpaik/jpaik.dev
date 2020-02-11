<template>
    <section v-if="data.name">
      <h3>
        {{data.name}}
        <nav>
          <a :href="data.link.url" target="_blank" rel="noopener"><img src="/link-regular.svg" :alt="data.link.alt" /></a>
        </nav>
        <i>{{data.timeframe}}</i>
      </h3>
      <p>
        {{data.position}}
      </p>
      <ul>
        <li v-for="point in data.bullets" :key="point">
            {{point}}
        </li>
      </ul>
    </section>
</template>

<script>
export default {
    props: ['data']
}
</script>