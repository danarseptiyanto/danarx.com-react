---
title: "The Making of This Portfolio Website - The Idea, the Stack, and the Source Code!"
thumbnail: "/blog-portfolio.png"
date: "Nov 28 2025"
---

Every developer needs a digital home—a place to showcase their work, share their thoughts, and connect with potential clients or collaborators. When I set out to build my portfolio website, I had a clear vision: create a **clean, modern, and performant** site that reflects my design sensibilities and technical capabilities.

The core requirements were:

- **Fast and responsive** - No bloated frameworks or unnecessary dependencies
- **Beautiful design** - Minimalist aesthetic with attention to detail
- **Easy to maintain** - Simple content management for projects and blog posts
- **Theme support** - Light and dark modes for better user experience
- **SEO-friendly** - Proper meta tags and semantic HTML

### **The Tech Stack: Modern, Fast, and Developer-Friendly**

After evaluating various options, I settled on a stack that prioritizes **developer experience** and **performance**:

#### **Frontend Framework: React 19**

React remains my go-to choice for building interactive UIs. With React 19, I get:

- **Concurrent rendering** for smoother user experiences
- **Automatic batching** for better performance
- **Component-based architecture** for maintainability

#### **Build Tool: Vite**

Gone are the days of slow webpack builds. Vite provides:

- **Lightning-fast HMR** (Hot Module Replacement)
- **Optimized production builds** with automatic code splitting
- **Native ES modules** support for faster development

```javascript
// vite.config.js - Simple and powerful
export default defineConfig({
    server: {
        port: 3000,
        historyApiFallback: true, // SPA routing support
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
```

#### **Styling: Tailwind CSS v4**

Tailwind CSS transformed how I approach styling. The utility-first approach means:

- **No CSS file bloat** - Only the classes you use get included
- **Consistent design system** - Predefined spacing, colors, and typography
- **Rapid prototyping** - Build UIs faster without context switching

```css
/* Custom theme with CSS variables for easy theming */
@theme {
    --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
    --color-bg-primary: #f7f7f4;
    --color-accent-primary: #f97316;
    --color-text-primary: #0a0a0a;
}
```

#### **Routing: React Router v7**

Client-side routing with React Router provides:

- **Seamless navigation** without page reloads
- **Nested routes** for complex layouts
- **404 error handling** with custom error pages

#### **Content Management: Markdown + Gray Matter**

For blog posts, I chose a file-based approach:

- **Write in Markdown** - Simple, portable, version-controlled
- **Frontmatter metadata** - Title, date, thumbnail extracted with gray-matter
- **Dynamic imports** - Vite's `import.meta.glob` loads posts on demand

```javascript
// Dynamic blog post loading
const posts = import.meta.glob("../blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});
```

#### **Image Optimization: ImageKit**

Instead of serving raw images, I integrated ImageKit for:

- **Automatic optimization** - WebP conversion, lazy loading
- **Responsive images** - Serve appropriate sizes for different devices
- **CDN delivery** - Fast global image delivery

### **Key Features: What Makes This Portfolio Special**

#### **1. Theme Switching (Light/Dark Mode)**

One of my favorite features is the theme switcher. Using React Context and CSS variables:

```jsx
// ThemeProvider.jsx - Persistent theme preference
const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
});

useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
}, [theme]);
```

The theme colors are defined once in CSS variables and automatically switch:

```css
.dark {
    --color-bg-primary: #0a0a0a;
    --color-text-primary: #ffffff;
    --color-accent-primary: #f97316;
}
```

#### **2. Data-Driven Project Gallery**

Projects are managed through a simple array, making it easy to add new work:

```jsx
const projectsData = [
    {
        thumbnail: "belajareradigital.png",
        title: "Belajar Era Digital",
        slug: "belajar-era-digital",
    },
    // Add more projects here...
];
```

Each project gets its own detail page with:

- **Project hero section** with title and description
- **Image gallery** with ImageKit optimization
- **Technical details** and live links

#### **3. Markdown-Based Blog**

Blog posts are written in Markdown with frontmatter:

```markdown
title: "The making of this Portfolio Website"
thumbnail: "/tailwind-thumbs.png"
date: "Feb 02 2024"

Your content here...
```

The blog system automatically:

- **Parses frontmatter** for metadata
- **Converts Markdown to HTML** using marked.js
- **Generates post listings** with thumbnails and excerpts
- **Supports direct URL access** to individual posts

#### **4. Contact Form with FormSubmit.co**

No backend needed! The contact form uses FormSubmit.co:

```jsx
<form action="https://formsubmit.co/septiyandanar@gmail.com" method="POST">
    <input type="hidden" name="_next" value="/contact-success" />
    <input type="hidden" name="_captcha" value="false" />
    {/* Form fields */}
</form>
```

#### **5. Responsive Mobile Menu**

A full-screen mobile menu with smooth animations:

```jsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Animated hamburger → close icon transition
// Slide-in menu panel with backdrop blur
```

### **Design Philosophy: Minimalism Meets Functionality**

The design follows these principles:

#### **Typography**

- **Manrope** for body text - Clean, modern, highly readable
- **Poppins** for accents - Geometric, friendly, professional

#### **Color Palette**

- **Orange accent** (#f97316) - Energetic, memorable, stands out
- **Neutral backgrounds** - Warm grays for light mode, true blacks for dark
- **High contrast text** - Ensures readability in both themes

#### **Layout**

- **Border-based sections** - Clear visual hierarchy
- **Generous whitespace** - Content breathes, easier to scan
- **Grid system** - Responsive layouts that adapt to any screen

#### **Interactions**

- **Hover effects** - Subtle feedback on interactive elements
- **Smooth transitions** - 300ms duration for theme switching
- **Focus states** - Keyboard navigation support

### **Project Structure: Clean and Organized**

```
danarx.com-react/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ...
│   ├── pages/            # Route components
│   │   ├── BlogList.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── projects/     # Individual project pages
│   ├── blog/             # Markdown blog posts
│   ├── contexts/         # React Context providers
│   ├── layouts/          # Layout wrappers
│   ├── App.css           # Global styles & theme
│   └── main.jsx          # App entry point
├── vite.config.js
└── package.json
```

### **Performance Optimizations**

#### **1. Code Splitting**

Vite automatically splits code by route, so users only download what they need.

#### **2. Image Optimization**

ImageKit serves optimized WebP images with lazy loading.

#### **3. Minimal Dependencies**

The entire app uses only essential packages:

- React & React DOM
- React Router
- Tailwind CSS
- Gray Matter & Marked (for blog)
- ImageKit React

#### **4. CSS Variables**

Theme switching doesn't require re-rendering—just CSS variable updates.

### **Lessons Learned**

#### **1. Tailwind CSS is a Game-Changer**

Once you understand the utility-first approach, you'll never want to go back to traditional CSS. The consistency and speed are unmatched.

#### **2. File-Based Content is Underrated**

For small to medium sites, Markdown files are simpler than a CMS. Version control, portability, and zero database overhead.

#### **3. Vite > Create React App**

The development experience with Vite is significantly better. Instant HMR and faster builds make a huge difference.

#### **4. Design Systems Save Time**

Defining colors, spacing, and typography upfront in Tailwind's theme ensures consistency across the entire site.

### **The Source Code**

The entire project is built with modern web technologies and follows best practices:

- **React 19.1.1** - Latest React features
- **Vite 7.1.7** - Next-gen build tool
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **React Router 7.9.5** - Client-side routing
- **ImageKit React** - Image optimization and delivery

All components are modular, reusable, and follow React best practices. The codebase uses:

- **Path aliases** (`@/components`) for cleaner imports
- **ESLint + Prettier** for code quality
- **TypeScript types** for better IDE support

### **Future Enhancements**

While the current version meets all my requirements, here are some ideas for the future:

1. **Blog search and filtering** - Find posts by topic or date
2. **RSS feed** - Let readers subscribe to new posts
3. **Analytics integration** - Track visitor behavior
4. **Newsletter signup** - Build an email list
5. **Case study pages** - Detailed project breakdowns
6. **Testimonials section** - Client feedback and reviews

### **Conclusion**

Building this portfolio was an exercise in **modern web development best practices**. By choosing the right tools and focusing on performance, maintainability, and user experience, I created a site that:

✅ **Loads instantly** - Optimized assets and code splitting  
✅ **Looks beautiful** - Thoughtful design and smooth animations  
✅ **Easy to update** - Add projects and blog posts in minutes  
✅ **Works everywhere** - Responsive design for all devices  
✅ **Accessible** - Semantic HTML and keyboard navigation

If you're building your own portfolio, I hope this breakdown gives you some ideas and inspiration. The key is to **start simple**, focus on what matters, and iterate based on feedback.

**Tech Stack Summary:**

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Markdown + Gray Matter
- ImageKit for images
- FormSubmit.co for contact form

**Want to see it in action?** You're already here! Feel free to explore the site and reach out if you have any questions.

_Happy coding! 🚀_
