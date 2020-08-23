<template>
  <div>
    <header>
      <h1 class="name">James Paik</h1>
      <p>
        I'm an entrepreneur with a technical background.
      </p>
      <ul>
        <li>
          Currently I'm the lead full stack developer at <a href="//actoviacmi.com" target="_blank"
            rel="noopener">Actovia</a>.
        </li>
        <li>
          On the side, I run a web development business, <a href="//zinnia.dev" target="_blank" rel="noopener">Zinnia
            Development</a>.
        </li>
        <li>
          I also enjoy developing games as a hobby and run <a href="//cosinic.com" target="_blank"
            rel="noopener">Cosinic</a>.
        </li>
      </ul>
      <p>
        I focus on building beautiful and scalable applications that both the development team and the end users are
        satisfied with.
        I tend to explore new technologies and build projects with them to expand my boundaries in this seemingly
        endless field.
      </p>
    </header>
    <main>

      <h2>Experience</h2>
      <Section v-for="e in experiences" :key="e.name" :data="e"></Section>

      <h2>Projects</h2>
      <Section v-for="p in projects" :key="p.name" :data="p"></Section>

      <h2>Favorite Tech</h2>
      <section class="grid">
        <ul v-for="t in tech" :key="t.id">
          <li v-for="i in t.list" :key="i.id">{{i}}</li>
        </ul>
      </section>

      <h2>Connect with me</h2>
      <section class="grid">
        <nav>
          <a href="//github.com/jpaik" target="_blank" rel="noopener">
            <img src="/github-square-brands.svg" class="large" alt="Github Icon" />
            <br />
            Github
          </a>
        </nav>
        <nav>
          <a href="//www.linkedin.com/in/jamespaik" target="_blank" rel="noopener">
            <img src="/linkedin-brands.svg" class="large" alt="LinkedIn Icon" />
            <br />
            LinkedIn
          </a>
        </nav>
        <nav>
          <a href="mailto:james@jpaik.me" target="_blank" rel="noopener">
            <img src="/envelope-square-solid.svg" class="large" alt="Email Icon" />
            <br />
            Email
          </a>
        </nav>
      </section>

      <Footer />
    </main>
  </div>
</template>

<script>
  import Footer from '~/components/Footer';
  import Section from '~/components/sections/section';
  export default {
    components: {
      Footer,
      Section
    },
    async asyncData({
      req
    }) {
      const experiences = await import('~/content/experience.json');
      const projects = await import('~/content/projects.json');
      const tech = await import('~/content/tech.json');
      return {
        experiences,
        projects,
        tech: tech.default
      }
    }
  }

</script>
