<template>
    <section v-if="data.name">
      <h3>
        {{data.name}}
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