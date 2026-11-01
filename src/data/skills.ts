export type SkillGroup = { id: string; title: string; blurb: string; accent: "accent" | "accent2" | "violet"; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "analytics",
    title: "Data Analytics & Business Intelligence",
    blurb: "The core of my work: turning operational data into reports people can act on.",
    accent: "accent2",
    items: [
      "Microsoft Excel", "Power BI", "DAX", "Power Query", "Power Pivot", "SQL",
      "Data Cleaning", "Data Transformation", "ETL", "Data Modeling",
      "KPI Development", "Dashboard Development", "Data Visualization", "Operational Reporting",
    ],
  },
  {
    id: "frontend",
    title: "Front-end Development",
    blurb: "Modern interfaces and interactive web applications.",
    accent: "accent",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    id: "additional",
    title: "Additional Technical Experience",
    blurb: "Supporting skills from AI evaluation work and day-to-day development.",
    accent: "violet",
    items: ["Node.js fundamentals", "AI Model Evaluation", "Data Annotation", "Git", "GitHub", "Responsive Web Design"],
  },
];
