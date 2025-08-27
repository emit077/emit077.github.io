# Amit Sahu - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 **Modern Design**: Clean, elegant design following Next.js design principles
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark/Light Theme**: Theme toggle with system preference detection
- ⚡ **Performance Optimized**: Built with Next.js 15 and modern web standards
- 🎭 **Smooth Animations**: Framer Motion animations and transitions
- 📧 **Contact Form**: EmailJS integration for contact form submissions
- 🔧 **Tech Stack Showcase**: Interactive display of technologies and skills
- 🚀 **SEO Optimized**: Meta tags, OpenGraph, and structured data

## Sections

- **Hero**: Animated typing effect with call-to-action buttons
- **About**: Dynamic experience calculation and personal information
- **Projects**: Responsive grid showcasing 10+ completed projects
- **Tech Stack**: Categorized display of technologies and tools
- **Contact**: Interactive contact form with validation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd portfolio_V2
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure EmailJS** (optional):

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/components/sections/contact.tsx`:
     ```typescript
     await emailjs.send(
       "YOUR_SERVICE_ID", // Replace with your service ID
       "YOUR_TEMPLATE_ID", // Replace with your template ID
       {
         /* form data */
       },
       "YOUR_PUBLIC_KEY" // Replace with your public key
     );
     ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Update personal details in the following files:

- `src/components/sections/hero.tsx` - Name, role, and tagline
- `src/components/sections/about.tsx` - Experience calculation and description
- `src/components/sections/contact.tsx` - Contact information
- `src/app/layout.tsx` - SEO metadata

### Projects

Add or modify projects in `src/components/sections/projects.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    liveUrl: "https://project-url.com",
    githubUrl: "https://github.com/username/repo",
    featured: true, // Show in larger card
  },
];
```

### Tech Stack

Update technologies in `src/components/sections/tech-stack.tsx`:

```typescript
const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-500 text-white" },
    ],
  },
];
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Other Platforms

The project can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **GitHub**: [emit077](https://github.com/emit077)
- **Email**: amit@example.com

---

Built with ❤️ using Next.js
