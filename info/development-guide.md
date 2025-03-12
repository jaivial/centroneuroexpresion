# Development Guide: Centro de Intervención Temprana

This guide provides a comprehensive roadmap for developing the Centro de Intervención Temprana website using Astro and Tailwind CSS, with deployment on Netlify. It integrates the project requirements, website structure, and UX/UI guidelines into a cohesive development plan.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Development Workflow](#development-workflow)
3. [Implementation Phases](#implementation-phases)
4. [Technical Specifications](#technical-specifications)
5. [Component Development](#component-development)
6. [Page Development](#page-development)
7. [Testing & Quality Assurance](#testing--quality-assurance)
8. [Deployment Process](#deployment-process)
9. [Post-Launch Maintenance](#post-launch-maintenance)
10. [Resources & References](#resources--references)

## Project Setup

### Initial Setup
```bash
# Create a new Astro project
npm create astro@latest webmaria

# Navigate to project directory
cd webmaria

# Add Tailwind CSS integration
npx astro add tailwind

# Install additional dependencies
npm install -D @astrojs/image sharp
npm install -D astro-icon
npm install -D @fontsource/quicksand @fontsource/nunito @fontsource/varela-round
```

### Project Structure
Follow the structure outlined in the Astro rules:
```
/
├── public/           # Static assets (images, fonts, etc.)
├── src/
│   ├── components/   # Reusable UI components
│   ├── layouts/      # Page layouts
│   ├── pages/        # Astro pages (routes)
│   ├── styles/       # Global styles and Tailwind config
│   └── utils/        # Utility functions
├── astro.config.mjs  # Astro configuration
├── tailwind.config.cjs # Tailwind configuration
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration (if using TS)
```

### Configuration Files

#### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  site: 'https://centrointervencion.netlify.app', // Update with your actual domain
});
```

#### tailwind.config.cjs
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#75C2F6',    // Soft Sky Blue
        'secondary': '#FFD166',  // Sunshine Yellow
        'accent': '#FF8C8C',     // Coral Pink
        
        // Secondary Colors
        'mint': '#A6E3B7',       // Mint Green
        'lavender': '#D9C6FF',   // Lavender
        
        // Neutral Colors
        'background': '#F9F7F3', // Off-White
        'light-gray': '#E8E8E8', // Light Gray
        'medium-gray': '#9A9A9A', // Medium Gray
        'text': '#3D3D3D',       // Charcoal
        
        // Functional Colors
        'success': '#4CAF50',    // Success Green
        'warning': '#FF9800',    // Alert Orange
        'error': '#F44336',      // Error Red
      },
      fontFamily: {
        'heading': ['Quicksand', 'sans-serif'],
        'body': ['Nunito', 'sans-serif'],
        'accent': ['Varela Round', 'sans-serif'],
      },
      borderRadius: {
        'button': '20px',
        'card': '16px',
        'input': '12px',
        'image': '8px',
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0,0,0,0.1)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

#### src/styles/global.css
```css
/* Import fonts */
@import '@fontsource/quicksand/400.css';
@import '@fontsource/quicksand/700.css';
@import '@fontsource/nunito/400.css';
@import '@fontsource/nunito/600.css';
@import '@fontsource/varela-round/400.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply font-body text-text bg-background;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-bold;
  }
  
  h1 {
    @apply text-[28px] md:text-[36px];
  }
  
  h2 {
    @apply text-[24px] md:text-[30px];
  }
  
  h3 {
    @apply text-[20px] md:text-[24px];
  }
  
  p {
    @apply text-[16px] md:text-[18px] leading-relaxed;
  }
  
  small {
    @apply text-[14px];
  }
}

@layer components {
  .btn-primary {
    @apply bg-secondary text-text font-bold py-3 px-6 rounded-button 
           shadow hover:shadow-md transition-all duration-200 
           hover:scale-105 focus:outline-none focus:ring-2 
           focus:ring-secondary focus:ring-opacity-50;
  }
  
  .btn-secondary {
    @apply bg-transparent border-2 border-primary text-primary 
           font-bold py-3 px-6 rounded-button hover:bg-primary/10 
           transition-all duration-200 focus:outline-none focus:ring-2 
           focus:ring-primary focus:ring-opacity-50;
  }
  
  .btn-tertiary {
    @apply text-primary font-bold py-2 px-4 hover:underline 
           transition-all duration-200 focus:outline-none focus:ring-2 
           focus:ring-primary focus:ring-opacity-50;
  }
  
  .card {
    @apply bg-white rounded-card shadow-card p-md md:p-lg 
           border border-light-gray hover:shadow-lg transition-all duration-200;
  }
  
  .input-field {
    @apply w-full px-4 py-3 rounded-input border border-light-gray 
           focus:outline-none focus:ring-2 focus:ring-primary 
           focus:border-primary transition-all duration-200;
  }
}
```

## Development Workflow

### Git Workflow
1. Create a new branch for each feature or section
   ```bash
   git checkout -b feature/header-component
   ```

2. Commit changes with descriptive messages
   ```bash
   git commit -m "Add responsive header with mobile menu"
   ```

3. Push changes to remote repository
   ```bash
   git push origin feature/header-component
   ```

4. Create pull request for code review
5. Merge to main branch after approval

### Development Process
1. Start with mobile designs first
2. Create reusable components
3. Build page layouts
4. Implement responsive behavior
5. Add interactivity where needed
6. Optimize for performance
7. Test across devices and browsers

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Set up project structure and configuration
- Implement design system in Tailwind
- Create base layout components
- Develop header and footer components
- Set up responsive grid system
- Create UI component library (buttons, cards, etc.)

### Phase 2: Core Pages (Weeks 2-3)
- Implement home page
- Develop about us page
- Create services page
- Build programs page
- Implement contact page with form

### Phase 3: Additional Pages & Features (Week 4)
- Develop resources page
- Create success stories page
- Implement blog functionality
- Add multilingual support
- Develop utility pages (privacy policy, 404, etc.)

### Phase 4: Refinement & Optimization (Week 5)
- Implement animations and microinteractions
- Optimize images and assets
- Improve accessibility
- Implement SEO best practices
- Performance optimization

### Phase 5: Testing & Deployment (Week 6)
- Cross-browser testing
- Mobile device testing
- Accessibility testing
- Deploy to Netlify
- Configure custom domain and HTTPS

## Technical Specifications

### Astro Configuration
- Use `.astro` files for components and pages
- Leverage Astro's partial hydration with `client:*` directives only when necessary
- Implement image optimization using Astro's built-in tools
- Use Astro's content collections for blog posts and resources

### Tailwind Implementation
- Follow utility-first approach
- Create component classes for repeated patterns
- Use responsive prefixes for different screen sizes
- Implement custom design tokens in Tailwind config

### JavaScript Usage
- Minimize JavaScript usage (leverage Astro's zero JS by default)
- Use vanilla JavaScript for simple interactions
- Implement progressive enhancement
- Load third-party scripts only when necessary

### Accessibility Implementation
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers
- Support reduced motion preferences

### Performance Optimization
- Optimize images using WebP format with fallbacks
- Implement lazy loading for below-the-fold content
- Minimize CSS and JavaScript
- Use responsive images with srcset
- Implement critical CSS

## Component Development

### Layout Components

#### MainLayout.astro
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} | Centro de Intervención Temprana</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

#### Header.astro
```astro
---
// Header component with mobile menu
---

<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-md md:px-lg">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/logo.svg" alt="Centro de Intervención Temprana" class="h-10" />
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="font-heading font-bold text-text hover:text-primary transition-colors">Home</a>
        <a href="/about" class="font-heading font-bold text-text hover:text-primary transition-colors">About Us</a>
        <a href="/services" class="font-heading font-bold text-text hover:text-primary transition-colors">Services</a>
        <a href="/programs" class="font-heading font-bold text-text hover:text-primary transition-colors">Programs</a>
        <a href="/resources" class="font-heading font-bold text-text hover:text-primary transition-colors">Resources</a>
        <a href="/contact" class="btn-primary">Contact Us</a>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button id="menu-toggle" class="md:hidden text-text" aria-label="Toggle Menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden pb-4">
      <nav class="flex flex-col space-y-4">
        <a href="/" class="font-heading font-bold text-text hover:text-primary transition-colors">Home</a>
        <a href="/about" class="font-heading font-bold text-text hover:text-primary transition-colors">About Us</a>
        <a href="/services" class="font-heading font-bold text-text hover:text-primary transition-colors">Services</a>
        <a href="/programs" class="font-heading font-bold text-text hover:text-primary transition-colors">Programs</a>
        <a href="/resources" class="font-heading font-bold text-text hover:text-primary transition-colors">Resources</a>
        <a href="/contact" class="btn-primary text-center">Contact Us</a>
      </nav>
    </div>
  </div>
</header>

<script>
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
</script>
```

### Reusable Components

#### Button.astro
```astro
---
const { variant = 'primary', href, type, class: className, ...rest } = Astro.props;

const getClass = () => {
  switch (variant) {
    case 'primary':
      return 'btn-primary';
    case 'secondary':
      return 'btn-secondary';
    case 'tertiary':
      return 'btn-tertiary';
    default:
      return 'btn-primary';
  }
};

const classes = `${getClass()} ${className || ''}`;
---

{
  href ? (
    <a href={href} class={classes} {...rest}>
      <slot />
    </a>
  ) : (
    <button type={type || 'button'} class={classes} {...rest}>
      <slot />
    </button>
  )
}
```

#### Card.astro
```astro
---
const { title, image, alt = '', class: className, ...rest } = Astro.props;
---

<div class={`card ${className || ''}`} {...rest}>
  {image && <img src={image} alt={alt} class="w-full h-auto rounded-image mb-md" />}
  {title && <h3 class="mb-sm">{title}</h3>}
  <div class="card-content">
    <slot />
  </div>
</div>
```

#### Hero.astro
```astro
---
const { title, subtitle, image, overlay = true } = Astro.props;
---

<section class="relative">
  <div class="absolute inset-0">
    <img 
      src={image} 
      alt="" 
      class="w-full h-full object-cover"
    />
    {overlay && <div class="absolute inset-0 bg-text/40"></div>}
  </div>
  
  <div class="relative max-w-7xl mx-auto px-md md:px-lg py-2xl md:py-3xl text-white">
    <div class="max-w-2xl">
      <h1 class="mb-md">{title}</h1>
      {subtitle && <p class="text-xl md:text-2xl mb-lg">{subtitle}</p>}
      <slot />
    </div>
  </div>
</section>
```

## Page Development

### Home Page (index.astro)
```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import Hero from '../components/Hero.astro';
import Card from '../components/Card.astro';
import Button from '../components/Button.astro';
import Testimonial from '../components/Testimonial.astro';
import CallToAction from '../components/CallToAction.astro';

const services = [
  {
    title: 'Speech Therapy',
    icon: 'speech',
    description: 'Help children develop communication skills and overcome speech challenges.'
  },
  {
    title: 'Occupational Therapy',
    icon: 'occupational',
    description: 'Support for developing fine motor skills and daily living activities.'
  },
  {
    title: 'Physical Therapy',
    icon: 'physical',
    description: 'Improve movement, balance, and coordination through specialized exercises.'
  },
  // Add more services
];

const testimonials = [
  {
    quote: "The center has been transformative for our child's development. We've seen incredible progress in just a few months.",
    author: "Maria G., Parent",
    image: "/testimonials/parent1.jpg"
  },
  // Add more testimonials
];
---

<MainLayout 
  title="Home" 
  description="Centro de Intervención Temprana provides specialized early intervention services for children with developmental needs."
>
  <Hero
    title="Supporting Your Child's Development Journey"
    subtitle="Specialized early intervention services for children from birth to six years"
    image="/images/hero-home.jpg"
  >
    <Button href="/contact" variant="primary">Schedule a Consultation</Button>
  </Hero>
  
  <!-- Services Overview -->
  <section class="py-2xl bg-background">
    <div class="max-w-7xl mx-auto px-md md:px-lg">
      <div class="text-center mb-xl">
        <h2>Our Services</h2>
        <p class="mt-sm max-w-2xl mx-auto">Comprehensive early intervention services tailored to your child's unique needs</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {services.map(service => (
          <Card title={service.title}>
            <p>{service.description}</p>
            <Button href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} variant="tertiary" class="mt-md">
              Learn More
            </Button>
          </Card>
        ))}
      </div>
      
      <div class="text-center mt-xl">
        <Button href="/services" variant="secondary">View All Services</Button>
      </div>
    </div>
  </section>
  
  <!-- Testimonials -->
  <section class="py-2xl bg-lavender/20">
    <div class="max-w-7xl mx-auto px-md md:px-lg">
      <div class="text-center mb-xl">
        <h2>Success Stories</h2>
        <p class="mt-sm max-w-2xl mx-auto">Hear from families who have experienced the difference our services make</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {testimonials.map(testimonial => (
          <Testimonial
            quote={testimonial.quote}
            author={testimonial.author}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  </section>
  
  <!-- Call to Action -->
  <CallToAction
    title="Ready to Start Your Child's Journey?"
    description="Our team of specialists is here to support your family every step of the way."
    buttonText="Contact Us Today"
    buttonLink="/contact"
  />
</MainLayout>
```

## Testing & Quality Assurance

### Accessibility Testing
- Use Lighthouse for initial accessibility audits
- Test with screen readers (NVDA, VoiceOver)
- Verify keyboard navigation
- Check color contrast with WebAIM Contrast Checker
- Validate HTML with W3C Validator

### Cross-Browser Testing
- Test on Chrome, Firefox, Safari, and Edge
- Use BrowserStack for additional browser testing
- Verify responsive behavior across browsers

### Mobile Testing
- Test on iOS and Android devices
- Verify touch interactions
- Check for proper viewport behavior
- Test on different screen sizes

### Performance Testing
- Use Lighthouse for performance audits
- Optimize Core Web Vitals
- Check page load times
- Verify image optimization
- Test on slow network connections

## Deployment Process

### Netlify Setup
1. Create a new site in Netlify dashboard
2. Connect to your Git repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### netlify.toml Configuration
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Custom Domain Setup
1. Add custom domain in Netlify dashboard
2. Configure DNS settings
3. Enable HTTPS

### Continuous Deployment
- Set up automatic deployments from main branch
- Configure preview deployments for pull requests
- Set up build notifications

## Post-Launch Maintenance

### Regular Updates
- Update content monthly
- Add new blog posts bi-weekly
- Review and update services as needed

### Monitoring
- Set up Netlify Analytics
- Monitor site performance
- Track user behavior
- Check for broken links

### Backups
- Maintain regular backups of content
- Version control for all code changes

## Resources & References

### Astro Documentation
- [Astro Docs](https://docs.astro.build/)
- [Astro Integrations](https://docs.astro.build/en/guides/integrations-guide/)

### Tailwind CSS Resources
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Accessibility Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)

### Netlify Resources
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)

### Design Resources
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Undraw](https://undraw.co/) - Open-source illustrations
- [Heroicons](https://heroicons.com/) - SVG icons 