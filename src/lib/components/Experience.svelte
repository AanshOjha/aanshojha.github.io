<script lang="ts">
  import { onMount } from 'svelte';
  import { MapPin, Calendar, Briefcase } from 'lucide-svelte';
  import { experience, education, certifications } from '../data.js';
  
  let sectionVisible = $state(false);
  
  onMount(() => {
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
    
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }
  });
</script>

<section id="experience" class="py-20">
  <div class="container-max section-padding">
    <!-- Section Header -->
    <div class="text-center mb-16 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        My <span class="gradient-text">Journey</span>
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        A timeline of my professional experience, education, and achievements.
      </p>
    </div>
    
    <!-- Experience Timeline -->
    <div class="mb-20">
      <h3 class="text-2xl font-bold mb-8 text-center {sectionVisible ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.2s;">
        Professional <span class="gradient-text">Experience</span>
      </h3>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600 transform md:-translate-x-1/2"></div>
        
        {#each experience as job, index}
          <div 
            class="relative flex items-center mb-12 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}"
            style="animation-delay: {0.4 + index * 0.2}s;"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 transform md:-translate-x-1/2 z-10"></div>
            
            <!-- Content Card -->
            <div class="ml-12 md:ml-0 md:w-1/2 {index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}">
              <div class="project-card">
                <div class="flex items-center mb-3">
                  <Briefcase size={20} class="text-primary-400 mr-2" />
                  <h4 class="text-xl font-bold text-white">{job.title}</h4>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h5 class="text-lg font-semibold text-primary-300">{job.company}</h5>
                  <div class="flex items-center text-gray-400 text-sm mt-1 sm:mt-0">
                    <Calendar size={16} class="mr-1" />
                    {job.duration}
                  </div>
                </div>
                
                <div class="flex items-center text-gray-400 text-sm mb-4">
                  <MapPin size={16} class="mr-1" />
                  {job.location}
                </div>
                
                <ul class="space-y-2 mb-4">
                  {#each job.description as desc}
                    <li class="flex items-start space-x-2">
                      <div class="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span class="text-gray-300 text-sm">{desc}</span>
                    </li>
                  {/each}
                </ul>
                
                <div class="flex flex-wrap gap-2">
                  {#each job.technologies as tech}
                    <span class="skill-tag">{tech}</span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Education & Certifications -->
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Education -->
      <div class="{sectionVisible ? 'animate-slide-left' : 'opacity-0'}" style="animation-delay: 0.8s;">
        <h3 class="text-2xl font-bold mb-6 text-center lg:text-left">
          <span class="gradient-text">Education</span>
        </h3>
        
        {#each education as edu}
          <div class="card-glass p-6">
            <h4 class="text-xl font-bold text-white mb-2">{edu.degree}</h4>
            <h5 class="text-lg font-semibold text-primary-300 mb-2">{edu.school}</h5>
            
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <div class="flex items-center text-gray-400 text-sm">
                <MapPin size={16} class="mr-1" />
                {edu.location}
              </div>
              <div class="flex items-center text-gray-400 text-sm">
                <Calendar size={16} class="mr-1" />
                {edu.duration}
              </div>
            </div>
            
            {#if edu.gpa}
              <p class="text-gray-300 mb-3">GPA: <span class="text-primary-400 font-semibold">{edu.gpa}</span></p>
            {/if}
            
            {#if edu.coursework}
              <div>
                <p class="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</p>
                <div class="flex flex-wrap gap-2">
                  {#each edu.coursework as course}
                    <span class="px-2 py-1 bg-primary-500/10 text-primary-200 text-xs rounded">{course}</span>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
      
      <!-- Certifications -->
      <div class="{sectionVisible ? 'animate-slide-right' : 'opacity-0'}" style="animation-delay: 1s;">
        <h3 class="text-2xl font-bold mb-6 text-center lg:text-left">
          <span class="gradient-text">Certifications</span>
        </h3>
        
        <div class="space-y-4">
          {#each certifications as cert, index}
            <div 
              class="card-glass p-6 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}"
              style="animation-delay: {1.2 + index * 0.1}s;"
            >
              <h4 class="text-lg font-bold text-white mb-2">{cert.name}</h4>
              <p class="text-primary-300 font-semibold mb-2">{cert.issuer}</p>
              <div class="flex items-center justify-between text-sm text-gray-400">
                <span>Issued: {cert.date}</span>
                <span>ID: {cert.credentialId}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
