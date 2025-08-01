<script lang="ts">
  import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-svelte';
  
  let isMenuOpen = $state(false);
  let activeSection = $state('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection = sectionId;
      isMenuOpen = false;
    }
  }

  function handleScroll() {
    const sections = navItems.map(item => item.id);
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection = section;
          break;
        }
      }
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav class="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/10">
  <div class="container-max section-padding">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <button 
        onclick={() => scrollToSection('home')}
        class="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
      >
        Aansh Ojha
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <button
            onclick={() => scrollToSection(item.id)}
            class="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10
                   {activeSection === item.id ? 'text-primary-400 bg-white/5' : 'text-gray-300 hover:text-white'}"
          >
            <svelte:component this={item.icon} size={18} />
            <span class="font-medium">{item.label}</span>
          </button>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button
        onclick={() => isMenuOpen = !isMenuOpen}
        class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
      >
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 border-t border-white/10 animate-slide-down">
        <div class="flex flex-col space-y-2">
          {#each navItems as item}
            <button
              onclick={() => scrollToSection(item.id)}
              class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10
                     {activeSection === item.id ? 'text-primary-400 bg-white/5' : 'text-gray-300'}"
            >
              <svelte:component this={item.icon} size={20} />
              <span class="font-medium">{item.label}</span>
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>
