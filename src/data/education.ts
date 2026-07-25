export interface TimelineItem {
  id: string;
  type: "education" | "experience" | "certification";
  period: string;
  title: string;
  institution: string;
  scoreOrDetail: string;
  status: "completed";
  highlights: string[];
}

export const educationData: TimelineItem[] = [
  {
    id: "btech",
    type: "education",
    period: "2022 — 2026",
    title: "B.Tech in Electronics and Communication Engineering",
    institution: "Anantha Lakshmi Institute of Technology and Sciences",
    scoreOrDetail: "Percentage: 75.0%",
    status: "completed",
    highlights: [
      "Graduated with B.Tech degree in ECE (75.0% aggregate)",
      "Specialized in core software engineering, algorithms, and signal systems",
      "Built multiple production-grade web applications integrating React and Django",
      "Completed Meta Front-End Developer Specialization with distinction"
    ]
  },
  {
    id: "intermediate",
    type: "education",
    period: "2020 — 2022",
    title: "Intermediate (MPC — Maths, Physics, Chemistry)",
    institution: "Govt. Junior College, Kanekal",
    scoreOrDetail: "Percentage: 57.1%",
    status: "completed",
    highlights: [
      "Focused on analytical mathematics and foundational sciences",
      "Developed strong problem-solving logic and algorithmic reasoning"
    ]
  },
  {
    id: "ssc",
    type: "education",
    period: "2018 — 2020",
    title: "Secondary School Certificate (SSC)",
    institution: "Z.P.H. School, Yerragunta",
    scoreOrDetail: "Percentage: 79.0%",
    status: "completed",
    highlights: [
      "Completed secondary education with top honors in Mathematics & Sciences"
    ]
  }
];
