<script lang="ts">
  import { onMount } from 'svelte';
  import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-svelte';
  import { personalInfo } from '../data.js';
  
  let sectionVisible = $state(false);
  let formData = $state({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  let isSubmitting = $state(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
  
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
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }
  });
  
  function handleSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      submitStatus = 'success';
      
      // Reset form
      formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Reset status after 3 seconds
      setTimeout(() => {
        submitStatus = 'idle';
      }, 3000);
    }, 2000);
  }
  
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-red-400'
    }
  ];
</script>

<section id="contact" class="py-20">
  <div class="container-max section-padding">
    <!-- Section Header -->
    <div class="text-center mb-16 {sectionVisible ? 'animate-slide-up' : 'opacity-0'}">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Get In <span class="gradient-text">Touch</span>
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Have a project in mind or want to discuss opportunities? I'd love to hear from you!
      </p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Contact Information -->
      <div class="{sectionVisible ? 'animate-slide-left' : 'opacity-0'}" style="animation-delay: 0.2s;">
        <div class="card-glass p-8">
          <h3 class="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
          <p class="text-gray-300 mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and development. Feel free to reach out!
          </p>
          
          <!-- Contact Methods -->
          <div class="space-y-6 mb-8">
            {#each contactMethods as method, index}
              <div 
                class="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 {sectionVisible ? 'animate-slide-right' : 'opacity-0'}"
                style="animation-delay: {0.4 + index * 0.1}s;"
              >
                <div class="p-3 bg-white/10 rounded-lg">
                  <svelte:component this={method.icon} size={24} class={method.color} />
                </div>
                <div>
                  <h4 class="font-semibold text-white">{method.title}</h4>
                  {#if method.href !== '#'}
                    <a href={method.href} class="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                      {method.value}
                    </a>
                  {:else}
                    <span class="text-gray-300">{method.value}</span>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
          
          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-white mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                class="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="{sectionVisible ? 'animate-slide-right' : 'opacity-0'}" style="animation-delay: 0.4s;">
        <div class="card-glass p-8">
          <h3 class="text-2xl font-bold mb-6 text-white flex items-center">
            <MessageCircle class="mr-3 text-primary-400" size={28} />
            Send Message
          </h3>
          
          {#if submitStatus === 'success'}
            <div class="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6 animate-bounce-in">
              <p class="text-green-400 font-medium">Thank you! Your message has been sent successfully.</p>
            </div>
          {/if}
          
          <form onsubmit={handleSubmit} class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                placeholder="Project Discussion"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="5"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {#if isSubmitting}
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              {:else}
                <Send size={20} />
                Send Message
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
