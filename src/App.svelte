<script lang="ts">
  import Navigation from './lib/components/Navigation.svelte';
  import Hero from './lib/components/Hero.svelte';
  import About from './lib/components/About.svelte';
  import Experience from './lib/components/Experience.svelte';
  import Projects from './lib/components/Projects.svelte';
  import Contact from './lib/components/Contact.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="min-h-screen">
  <Navigation />
  <main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </main>
  <Footer />
</div>
