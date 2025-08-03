<script lang="ts">
  import { onMount } from 'svelte';
  import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-svelte';
  import { personalInfo } from '../data.js';
  
  let mounted = $state(false);
  let typedText = $state('');
  
  const roles = ['Software Developer', 'Python Developer', 'Java Developer', 'Problem Solver', 'Tech Enthusiast'];
  let currentRoleIndex = $state(0);
  let currentCharIndex = $state(0);
  let isDeleting = $state(false);
  
  onMount(() => {
    mounted = true;
    typeWriter();
  });
  
  function typeWriter() {
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      typedText = currentRole.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
    } else {
      typedText = currentRole.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      
      if (currentCharIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }
    }
    
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
  
  function scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  function downloadResume() {
    // Replace with your actual resume link
    window.open('https://drive.google.com/file/d/120qwIKdTnqC2Qof_CBd0QQUVjQSxVqv2/view?usp=sharing', '_blank');
  }
</script>

<section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-16">
  <!-- Background Animation -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
    <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style="animation-delay: 2s;"></div>
  </div>
  
  <div class="container-max section-padding relative z-10">
    <div class="text-center">
      <!-- Profile Image -->
      <div class="mb-8 {mounted ? 'animate-bounce-in' : 'opacity-0'}">
        <div class="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
          <div class="w-full h-full rounded-full bg-dark-800 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
      
      <!-- Main Title -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 {mounted ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.2s;">
        Hi, I'm <span class="gradient-text">{personalInfo.name}</span>
      </h1>
      
      <!-- Typed Role -->
      <div class="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-10 {mounted ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.4s;">
        I'm a <span class="text-primary-400 font-semibold">{typedText}</span><span class="animate-pulse">|</span>
      </div>
      
      <!-- Description -->
      <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed {mounted ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.6s;">
        As a software developer, I specialize in backend systems and cloud technologies, currently learning AI.
        I have a passion for building scalable, efficient solutions and a strong foundation in computer science.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 {mounted ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
        <button onclick={downloadResume} class="btn-primary">
          <Download size={20} />
          &nbsp;Download Resume
        </button>
        <a href="mailto:{personalInfo.email}" class="btn-secondary">
          <Mail size={20} />
          &nbsp;Get In Touch
        </a>
      </div>
      
      <!-- Social Links -->
      <div class="flex justify-center space-x-6 mb-16 {mounted ? 'animate-slide-up' : 'opacity-0'}" style="animation-delay: 1s;">
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a 
          href={personalInfo.linkedIn} 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="mailto:{personalInfo.email}"
          class="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <Mail size={24} />
        </a>
      </div>
      
      <!-- Scroll Indicator -->
      <button 
        onclick={scrollToAbout}
        class="animate-bounce cursor-pointer hover:text-primary-400 transition-colors duration-300 {mounted ? 'animate-fade-in' : 'opacity-0'}" 
        style="animation-delay: 1.2s;"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  </div>
</section>
