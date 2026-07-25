export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Web Applications" | "UI Clones" | "Landing Pages";
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image?: string;
  isFeatured: boolean;
  keyFeatures?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    shortDescription: "Shopping platform with cart management and fluid product grid.",
    fullDescription: "A feature-rich e-commerce landing page and store experience built with React and custom CSS Grid layout. Features interactive cart management, dynamic product filter views, responsive image displays, and polished checkout UI mockups.",
    category: "Web Applications",
    tags: ["React", "CSS Grid", "State Management", "Responsive UI"],
    demoUrl: "https://manohar-leo99.github.io/E-commerce-Website-LandingPage",
    githubUrl: "https://github.com/manohar-leo99/E-commerce-Website-LandingPage",
    image: "/images/ecommerce-preview.png",
    isFeatured: true,
    keyFeatures: [
      "Dynamic shopping cart drawer and price calculations",
      "CSS Grid responsive product catalog",
      "Interactive product view modals and image galleries",
      "Optimized load times and cross-browser support"
    ]
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    shortDescription: "On-demand food ordering experience with Swiggy-style layout.",
    fullDescription: "An intuitive Swiggy-style food ordering web application designed with flexible React component architecture. Includes restaurant menu navigation, filter chips, rating badges, and cart management.",
    category: "Web Applications",
    tags: ["React", "Flexbox", "Component Architecture", "UI Design"],
    demoUrl: "https://manohar-leo99.github.io/Swiggy-Style-Food-Delivery-Web-App/",
    githubUrl: "https://github.com/manohar-leo99/Swiggy-Style-Food-Delivery-Web-App",
    image: "/images/food-delivery-preview.png",
    isFeatured: true,
    keyFeatures: [
      "Restaurant listing cards with rating badges & delivery metrics",
      "Category carousel & live search filter",
      "Subtotal calculation and order item drawer",
      "Mobile-first responsive Flexbox layout"
    ]
  },
  {
    id: "product-landing-page",
    title: "Product Landing Page",
    shortDescription: "High-conversion single-page showcase with rich typography.",
    fullDescription: "A sleek, conversion-focused single-page marketing application built using HTML5, modern CSS custom properties, and micro-interactions for smooth user engagement.",
    category: "Landing Pages",
    tags: ["HTML5", "CSS Variables", "Responsive Design", "SEO Optimized"],
    demoUrl: "https://manohar-leo99.github.io/premium-product-landing-page",
    githubUrl: "https://github.com/manohar-leo99/premium-product-landing-page",
    image: "/images/product-preview.png",
    isFeatured: true,
    keyFeatures: [
      "High-impact visual hero section with dynamic CTAs",
      "Feature matrix grid and interactive FAQ accordions",
      "Lightweight, zero-dependency fast loading",
      "Clean CSS variable color tokens"
    ]
  },
  {
    id: "tap-academy-clone",
    title: "Tap Academy Clone",
    shortDescription: "Pixel-perfect clone of the Tap Academy home page layout.",
    fullDescription: "A comprehensive structural replica of the Tap Academy educational platform layout, demonstrating exact layout matching, typography hierarchy, and CSS component structure.",
    category: "UI Clones",
    tags: ["React", "Vanilla CSS", "Pixel Perfect", "Layout Design"],
    demoUrl: "https://github.com/manohar-leo99",
    githubUrl: "https://github.com/manohar-leo99",
    isFeatured: false,
    keyFeatures: [
      "Structured navigation and course grid sections",
      "Custom banner sliders and announcement banners",
      "Exact font and color palette replication"
    ]
  },
  {
    id: "college-fest-landing-page",
    title: "College Fest Landing Page",
    shortDescription: "Portal for campus event registration and schedule details.",
    fullDescription: "An vibrant event portal landing page crafted for college fest registrations, schedule listings, event category cards, and student coordinator contacts.",
    category: "Landing Pages",
    tags: ["HTML5", "CSS Grid", "Event Registration", "Responsive"],
    demoUrl: "https://github.com/manohar-leo99",
    githubUrl: "https://github.com/manohar-leo99",
    isFeatured: false,
    keyFeatures: [
      "Event schedule timeline view",
      "Interactive category selection cards",
      "Embedded registration form UI"
    ]
  },
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    shortDescription: "Social media feed layout mockup with stories and post interactions.",
    fullDescription: "A front-end mockup of Instagram's web dashboard layout, featuring story avatar circles, post feeds, like buttons, and sidebar recommendations.",
    category: "UI Clones",
    tags: ["React", "CSS Modules", "Social Feed", "Interactive UI"],
    demoUrl: "https://github.com/manohar-leo99",
    githubUrl: "https://github.com/manohar-leo99",
    isFeatured: false,
    keyFeatures: [
      "Story avatar scroll container",
      "Post feed card with action buttons (like, comment, share)",
      "Right sidebar with suggested profiles"
    ]
  }
];
