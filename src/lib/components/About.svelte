<script lang="ts">
  import { onMount } from 'svelte';
  import { Code, Lightbulb, Users, Target } from 'lucide-svelte';
  import { about, skills } from '../data.js';
  
  let mounted = $state(false);
  let sectionVisible = $state(false);
  
  onMount(() => {
    mounted = true;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  });
  
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code that stands the test of time.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve complex problems creatively.'
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Designing systems, like the microservices-based PhotoVault, that can grow and adapt to increasing demands.'
    },
    {
      icon: Target,
      title: 'Adaptability & Continuous Learning',
      description: 'I am a quick learner who adapts to new challenges. I am focused on continuous growth and am currently learning AI.'
    }
  ];
</script>

<section id="about" class="py-20 bg-dark-800/50">
  <div class="container-max section-padding">
    <!-- Section Header -->
    <div class="text-center mb-16 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        About <span class="gradient-text">Me</span>
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Get to know more about my background, skills, and what drives me as a developer.
      </p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Column - About Content -->
      <div class="{sectionVisible ? 'animate-slide-left' : 'opacity-0'}" style="animation-delay: 0.2s;">
        <div class="card-glass p-8">
          <h3 class="text-2xl font-bold mb-6 text-primary-400">My Story</h3>
          <p class="text-gray-300 leading-relaxed mb-6">
            {about.summary}
          </p>
          
          <h4 class="text-xl font-semibold mb-4 text-white">Key Highlights</h4>
          <ul class="space-y-3">
            {#each about.highlights as highlight}
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-300">{highlight}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      
      <!-- Right Column - Values -->
      <div class="space-y-6 {sectionVisible ? 'animate-slide-right' : 'opacity-0'}" style="animation-delay: 0.4s;">
        <h3 class="text-2xl font-bold mb-6 text-center lg:text-left">What I Value</h3>
        {#each values as value, index}
          <div 
            class="card-glass p-6 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}" 
            style="animation-delay: {0.6 + index * 0.1}s;"
          >
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-primary-500/20 rounded-lg">
                <svelte:component this={value.icon} size={24} class="text-primary-400" />
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2 text-white">{value.title}</h4>
                <p class="text-gray-300 text-sm">{value.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Skills Section -->
    <div class="mt-20">
      <h3 class="text-2xl font-bold text-center mb-12 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
        Technical <span class="gradient-text">Skills</span>
      </h3>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each Object.entries(skills) as [category, skillList], categoryIndex}
          <div 
            class="card-glass p-6 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}"
            style="animation-delay: {1 + categoryIndex * 0.1}s;"
          >
            <h4 class="text-lg font-semibold mb-4 text-primary-400">{category}</h4>
            <div class="flex flex-wrap gap-2">
              {#each skillList as skill}
                <span class="skill-tag">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
