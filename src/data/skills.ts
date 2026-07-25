export interface SkillCategory {
  title: string;
  categoryKey: "languages" | "frontend" | "backend" | "ai" | "devops" | "practices";
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isHighlighted?: boolean;
  }[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Programming Languages",
    categoryKey: "languages",
    iconName: "Code2",
    description: "Core logic, OOP, and data querying languages.",
    skills: [
      { name: "Java (Core)", isHighlighted: true },
      { name: "Python", isHighlighted: true },
      { name: "JavaScript (ES6+)", isHighlighted: true },
      { name: "SQL" }
    ]
  },
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    iconName: "Layout",
    description: "Responsive layouts, component state, and modern styling.",
    skills: [
      { name: "React.js", isHighlighted: true },
      { name: "HTML5", isHighlighted: true },
      { name: "CSS3", isHighlighted: true },
      { name: "Bootstrap" },
      { name: "Responsive Design" },
      { name: "REST API Integration" }
    ]
  },
  {
    title: "Backend Development",
    categoryKey: "backend",
    iconName: "Database",
    description: "Server architecture, API endpoints, and relational databases.",
    skills: [
      { name: "Django (MVT)", isHighlighted: true },
      { name: "Django REST Framework", isHighlighted: true },
      { name: "RESTful API Design" },
      { name: "MySQL" },
      { name: "SQLite" }
    ]
  },
  {
    title: "Generative AI & LLM",
    categoryKey: "ai",
    iconName: "Cpu",
    description: "RAG architectures, vector embeddings, and LLM applications.",
    skills: [
      { name: "LangChain", isHighlighted: true },
      { name: "RAG Pipelines", isHighlighted: true },
      { name: "Vector Databases", isHighlighted: true },
      { name: "LLM App Development" },
      { name: "Prompt Engineering" }
    ]
  },
  {
    title: "DevOps & Tools",
    categoryKey: "devops",
    iconName: "Terminal",
    description: "Version control, containerization basics, and API testing.",
    skills: [
      { name: "Git", isHighlighted: true },
      { name: "GitHub", isHighlighted: true },
      { name: "Docker (Basic)" },
      { name: "CI/CD Pipelines" },
      { name: "Netlify" },
      { name: "Postman" }
    ]
  },
  {
    title: "Engineering Practices",
    categoryKey: "practices",
    iconName: "CheckSquare",
    description: "Maintainable code, version control strategies, and debugging.",
    skills: [
      { name: "Clean Code" },
      { name: "Unit Testing" },
      { name: "Code Reviews" },
      { name: "Debugging" },
      { name: "Agile/Scrum" },
      { name: "Version Control" }
    ]
  }
];
