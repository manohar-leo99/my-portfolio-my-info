import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import ecommercePreview from "../../assets/ecommerce-preview.png";
import foodDeliveryPreview from "../../assets/food-delivery-preview.png";
import productPreview from "../../assets/product-preview.png";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Shopping platform with cart management.",
      tags: ["React", "CSS Grid"],
      demoUrl: "https://manohar-leo99.github.io/E-commerce-Website-LandingPage",
      githubUrl:
        "https://github.com/manohar-leo99/E-commerce-Website-LandingPage",
      image: ecommercePreview,
    },
    {
      title: "Food Delivery App",
      description: "On-demand food ordering experience.",
      tags: ["React", "Flexbox"],
      demoUrl:
        "https://manohar-leo99.github.io/Swiggy-Style-Food-Delivery-Web-App/",
      githubUrl:
        "https://github.com/manohar-leo99/Swiggy-Style-Food-Delivery-Web-App",
      image: foodDeliveryPreview,
    },
    {
      title: "Product Landing Page",
      description: "High-conversion single-page showcase.",
      tags: ["HTML5", "CSS Variables"],
      demoUrl: "https://manohar-leo99.github.io/premium-product-landing-page",
      githubUrl:
        "https://github.com/manohar-leo99/premium-product-landing-page",
      image: productPreview,
    },
    {
      title: "Tap Academy Clone",
      description: "Pixel-perfect clone of the homepage.",
      tags: ["React", "Vanilla CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "College Fest Landing Page",
      description: "Portal for campus event registration.",
      tags: ["HTML5", "CSS Grid"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Instagram Clone",
      description: "Social media feed layout mockup.",
      tags: ["React", "CSS Modules"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "LinkedIn Clone",
      description: "Professional networking dashboard.",
      tags: ["React", "Flexbox"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Spotify Clone",
      description: "Audio streaming media dashboard.",
      tags: ["React", "CSS Variables"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-heading">Featured Projects</h2>
      <p className="projects-subtitle">
        A curation of interactive web interfaces, pixel-perfect clone layouts,
        and functional front-end applications.
      </p>

      <div className="projects-grid-layout">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
