<script lang="ts">
  import { onMount } from 'svelte';
  import { Github, ExternalLink, Code } from 'lucide-svelte';
  import { projects } from '../data.js';
  
  let sectionVisible = $state(false);
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            sectionVisible = true;
          }
        });
      },
      { 
        threshold: [0.1, 0.2],
        rootMargin: '50px 0px -50px 0px'
      }
    );
    
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }
  });
</script>

<section id="projects" class="py-20 bg-dark-800/50">
  <div class="container-max section-padding">
    <!-- Section Header -->
    <div class="text-center mb-16 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Featured <span class="gradient-text">Projects</span>
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
      </p>
    </div>
    
    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {#each projects as project, index}
        <div 
          class="project-card group {sectionVisible ? 'animate-slide-up' : 'opacity-0'}"
          style="animation-delay: {0.2 + index * 0.1}s;"
        >
          <!-- Project Image -->
          <div class="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20">
            <div class="aspect-video flex items-center justify-center">
              <Code size={48} class="text-primary-400" />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex space-x-4">
                {#if project.github}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                {/if}
                {#if project.demo}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                {/if}
              </div>
            </div>
          </div>
          
          <!-- Project Content -->
          <div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
              {project.title}
            </h3>
            
            <p class="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <!-- Features -->
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
              <ul class="space-y-1">
                {#each project.features as feature}
                  <li class="flex items-start space-x-2">
                    <div class="w-1 h-1 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-gray-400 text-xs">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- Technologies -->
            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                {#each project.technologies as tech}
                  <span class="px-2 py-1 bg-primary-500/10 text-primary-200 text-xs rounded border border-primary-500/20">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
            
            <!-- Links -->
            <div class="flex space-x-3">
              {#if project.github}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              {/if}
              {#if project.demo}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- View More Projects -->
    <div class="text-center mt-12 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
      <p class="text-gray-300 mb-6">
        Want to see more of my work?
      </p>
      <a
        href="https://github.com/AanshOjha"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-secondary"
      >
        <Github size={20} />
        View All Projects on GitHub
      </a>
    </div>
  </div>
</section>
