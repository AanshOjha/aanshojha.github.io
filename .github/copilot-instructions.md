<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Website Development Instructions

This is a modern portfolio website built with:
- **SvelteKit** - Modern web framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Vite** - Fast build tool and development server

## Project Structure
- `/src/lib/data.ts` - Portfolio content and data
- `/src/lib/components/` - Reusable Svelte components
- `/src/app.css` - Global styles with Tailwind directives and custom CSS
- `tailwind.config.js` - Tailwind configuration with custom theme

## Design System
- **Colors**: Primary blue (#3b82f6) and dark theme (#0f172a to #1e293b)
- **Typography**: Inter font family with responsive sizing
- **Animations**: Custom keyframes for smooth interactions
- **Components**: Glass morphism cards, gradient text, and modern UI elements

## Development Guidelines
1. Use TypeScript for all new files
2. Follow Svelte 5 syntax with runes (`$state`, `$derived`, etc.)
3. Utilize Tailwind classes and custom CSS classes defined in app.css
4. Ensure responsive design with mobile-first approach
5. Add smooth animations and transitions for better UX
6. Maintain consistent spacing with the design system

## Content Customization
Update `/src/lib/data.ts` with actual portfolio information:
- Personal information and contact details
- Professional experience and job descriptions
- Education and certifications
- Skills and technologies
- Project details with links and descriptions

## Component Structure
Each section is a separate component for modularity:
- `Navigation.svelte` - Fixed navigation with smooth scrolling
- `Hero.svelte` - Landing section with animated typing effect
- `About.svelte` - Personal introduction and skills showcase
- `Experience.svelte` - Professional timeline and education
- `Projects.svelte` - Portfolio projects with interactive cards
- `Contact.svelte` - Contact form and social links
- `Footer.svelte` - Site footer with navigation links
