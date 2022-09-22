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
      
      <template v-if="data.positions">
        <div v-for="p in data.positions" :key="p.position">
          <hgroup>
            <p>{{p.position}}</p>
            <h4>{{p.timeframe}}</h4>
          </hgroup>
          <ul>
            <li v-for="point in p.bullets" :key="point">
                {{point}}
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <p>
          {{data.position}}
        </p>
        <ul>
          <li v-for="point in data.bullets" :key="point">
              {{point}}
          </li>
        </ul>
      </template>
    </section>
</template>

<script>
export default {
    props: ['data'],
    computed: {
      hasMultiple() {
        return this.data.positions !== undefined;
      }
    }
}
</script>