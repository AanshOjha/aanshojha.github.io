# Aansh Ojha - Portfolio Website

A modern, responsive portfolio website built with SvelteKit, TypeScript, and Tailwind CSS. Features smooth animations, glass morphism design, and optimized performance.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Built with SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- **Modern Design**: Glass morphism UI with gradient backgrounds and smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Type Safety**: Full TypeScript support for better development experience
- **Smooth Animations**: Custom CSS animations and transitions for enhanced UX
- **Interactive Components**: Animated typing effects, hover states, and smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aansh-ojha/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Built With

- **[SvelteKit](https://kit.svelte.dev/)** - Modern web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **[Lucide Svelte](https://lucide.dev/)** - Beautiful & consistent icon toolkit

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/        # Reusable Svelte components
│   │   ├── Navigation.svelte
│   │   ├── Hero.svelte
│   │   ├── About.svelte
│   │   ├── Experience.svelte
│   │   ├── Projects.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   └── data.ts           # Portfolio content and data
├── app.css               # Global styles with Tailwind
├── App.svelte           # Main application component
└── main.ts              # Application entry point
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) with full palette
- **Dark Theme**: From #0f172a to #1e293b
- **Accents**: Purple and pink for gradients

### Typography
- **Font**: Inter with weights from 100-900
- **Responsive**: Fluid typography scaling

### Components
- **Glass Cards**: Translucent cards with backdrop blur
- **Gradient Text**: Animated gradient text effects
- **Custom Buttons**: Primary and secondary button styles
- **Skill Tags**: Rounded skill/technology tags

## 📝 Customization

### Update Portfolio Content

Edit `/src/lib/data.ts` to customize your portfolio:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};

export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    // ... other project details
  }
];
```

### Styling

- **Tailwind Config**: Modify `tailwind.config.js` for theme customization
- **Global Styles**: Update `src/app.css` for custom CSS classes
- **Component Styles**: Each component has scoped styling options

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)

## ⚡ Performance

- **Vite**: Fast HMR and optimized builds
- **Code Splitting**: Automatic code splitting by SvelteKit
- **Image Optimization**: Optimized assets and lazy loading
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

- **Vercel**: Zero-config deployment with SvelteKit adapter
- **Netlify**: Static site hosting with form handling
- **GitHub Pages**: Free hosting for static sites
- **VPS**: Self-hosted with Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aansh Ojha**
- Portfolio: [https://aansh-ojha.com](https://aansh-ojha.com)
- GitHub: [@aansh-ojha](https://github.com/aansh-ojha)
- LinkedIn: [Aansh Ojha](https://linkedin.com/in/aansh-ojha)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with love using [SvelteKit](https://kit.svelte.dev/)

---

⭐ **If you like this portfolio template, please give it a star on GitHub!**
