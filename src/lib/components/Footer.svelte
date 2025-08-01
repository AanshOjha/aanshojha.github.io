<script lang="ts">
  import { Heart, Github, Linkedin, Mail } from 'lucide-svelte';
  import { personalInfo } from '../data.js';
  
  const currentYear = new Date().getFullYear();
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="bg-dark-900 border-t border-white/10">
  <div class="container-max section-padding py-12">
    <div class="grid md:grid-cols-3 gap-8 items-center">
      <!-- Left: Logo and Description -->
      <div class="text-center md:text-left">
        <button 
          onclick={scrollToTop}
          class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 mb-2"
        >
          {personalInfo.name}
        </button>
        <p class="text-gray-400 text-sm">
          Software Developer passionate about creating innovative solutions.
        </p>
      </div>
      
      <!-- Center: Quick Links -->
      <div class="text-center">
        <h4 class="font-semibold text-white mb-4">Quick Links</h4>
        <div class="flex flex-wrap justify-center gap-6">
          <button onclick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} class="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
            About
          </button>
          <button onclick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} class="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
            Experience
          </button>
          <button onclick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} class="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
            Projects
          </button>
          <button onclick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} class="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
            Contact
          </button>
        </div>
      </div>
      
      <!-- Right: Social Links -->
      <div class="text-center md:text-right">
        <h4 class="font-semibold text-white mb-4">Connect</h4>
        <div class="flex justify-center md:justify-end space-x-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
    
    <!-- Bottom: Copyright -->
    <div class="border-t border-white/10 mt-8 pt-8 text-center">
      <p class="text-gray-400 text-sm flex items-center justify-center">
        © {currentYear} {personalInfo.name}. Made with
        <Heart size={16} class="mx-1 text-red-500" />
        using SvelteKit & Tailwind CSS
      </p>
    </div>
  </div>
</footer>
