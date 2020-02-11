<template>
    <section v-if="data.name">
      <hgroup>
        <h3>
          {{data.name}}
          <nav v-if="data.link">
            <a :href="data.link.url" target="_blank" rel="noopener"><img src="/link-regular.svg" :alt="data.link.alt" /></a>
          </nav>
        </h3>
        <h4>{{data.timeframe}}</h4>
      </hgroup>
      
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