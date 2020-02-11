<template>
  <main>
    <h1 class="name">James Paik</h1>
    <p>
      I'm an entrepreneur with a technical background.
    </p>
    <ul>
      <li>
      Currently I'm the lead front end developer at <a href="//actoviacmi.com" target="_blank" rel="noopener">Actovia</a>.
      </li>
      <li>      
      On the side, I run a web development business, <a href="//zinnia.dev" target="_blank" rel="noopener">Zinnia Development</a>.
      </li>
      <li>
      I also enjoy developing games as a hobby and run <a href="//cosinic.com" target="_blank" rel="noopener">Cosinic</a>.
      </li>
    </ul>
    <p>
      I focus on building beautiful and scalable applications that both the development team and the end users are satisfied with.
      I tend to explore new technologies and build projects with them to expand my boundaries in this seemingly endless field. 
    </p>

    <h2>Professional Experience</h2>
    <Experience v-for="e in experiences" :key="e.name" :data="e"></Experience>

    <h2>Projects</h2>
    <Project v-for="p in projects" :key="p.name" :data="p"></Project>

    <h2>Tech Stack</h2>    
    <section class="grid">
      <ul>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Python</li>
        <li>PHP</li>
        <li>C#</li>
        <li>HTML5 + CSS</li>
      </ul>
      <ul>
        <li>Node.js</li>
        <li>Vue.js</li>
        <li>AngularJS</li>
        <li>Laravel</li>
        <li>Django &amp; Flask</li>
        <li>ASP.NET</li>
      </ul>
      <ul>
        <li>Git & SVN</li>
        <li>Jira</li>
        <li>Devops</li>
        <li>Nginx & Apache</li>
        <li>Cloud Servers</li>
        <li>Linux Systems</li>
      </ul>
    </section>

    <h2 class="center">Connect with me</h2>
    <section class="grid">
      <nav>
        <a href="//github.com/jpaik" target="_blank" rel="noopener">
          <img src="/github-square-brands.svg" class="large"/>
          <br />
          Github
        </a>
      </nav>
      <nav>
        <a href="//www.linkedin.com/in/jamespaik" target="_blank" rel="noopener">
          <img src="/linkedin-brands.svg" class="large"/>
          <br />
          LinkedIn
        </a>
      </nav>
      <nav>
        <a href="mailto:james@jpaik.me" target="_blank" rel="noopener">          
          <img src="/envelope-square-solid.svg" class="large"/>
          <br />
          Email
        </a>
      </nav>
    </section>

    <Footer />
  </main>
</template>

<script>
  import Footer from '~/components/Footer';
  import Experience from '~/components/sections/experience';
  import Project from '~/components/sections/project';
  export default {    
    components: {
      Footer,
      Experience,
      Project
    },
    async asyncData({req}) {
      const experiences = await import('~/content/experience.json');
      const projects = await import('~/content/projects.json');
      return {
        experiences,
        projects
      }
    }
  }

</script>
