export interface ProfileData {
  name: string;
  roleTitles: string[];
  statusText: string;
  headlineStatement: string;
  shortDescription: string;
  bioParagraphs: string[];
  location: string;
  email: string;
  quickFacts: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socialLinks: {
    name: string;
    url: string;
    icon: "github" | "linkedin" | "mail";
  }[];
  resumeUrl: string;
  avatarUrl: string;
}

export const profileData: ProfileData = {
  name: "Medabalam Manohar",
  roleTitles: [
    "Full-Stack Developer",
    "Generative AI Specialist",
    "Meta-Certified Frontend Engineer",
    "Django & Python Developer"
  ],
  statusText: "Available for Full-Time Roles",
  headlineStatement: "Building quiet, robust interfaces and AI-integrated web systems.",
  shortDescription: "A Full-Stack Developer and Generative AI Specialist based in India. I engineer clean, production-grade web applications that blend modern React architectures with Django and LLM integrations.",
  bioParagraphs: [
    "I am a Full-Stack Developer with hands-on experience building and deploying production-grade web applications. As a Meta-Certified Front-End Developer, I blend frontend design using modern tools like React with robust backend architectures powered by Django and Python.",
    "Additionally, I have practical experience building AI-integrated solutions including RAG pipelines, LLM-powered applications, and vector database integrations using LangChain and Ollama. I am passionate about writing clean, testable, and maintainable code."
  ],
  location: "India",
  email: "manohar.leo.2005@gmail.com",
  quickFacts: [
    {
      label: "Education",
      value: "B.Tech ECE",
      subtext: "Graduated (75.0%)"
    },
    {
      label: "Certification",
      value: "Meta Certified",
      subtext: "Front-End Developer"
    },
    {
      label: "Projects Shipped",
      value: "8+ Projects",
      subtext: "Full-Stack & Clones"
    },
    {
      label: "Location",
      value: "India",
      subtext: "Open to Remote & Onsite"
    }
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/manohar-leo99",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/medabalam-manohar-93b241386",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:manohar.leo.2005@gmail.com",
      icon: "mail"
    }
  ],
  resumeUrl: "#contact",
  avatarUrl: "/images/profile-pic.jpeg"
};
