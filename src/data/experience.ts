export type Experience = {
  title: string;
  org: string;
  period: string;
  duration: string;
  context: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "Data Analyst",
    org: "Fresh Energy Company",
    period: "2025",
    duration: "About 1 year",
    context: "Agricultural production and export operations",
    points: [
      "Worked with daily production and operational data.",
      "Organized and analyzed information using Microsoft Excel.",
      "Developed reports and structured tables.",
      "Used formulas to improve reporting and information accessibility.",
      "Monitored operational progress against targets and plans.",
      "Prepared performance summaries to help management understand operational activities.",
      "Worked within an agricultural export business environment.",
    ],
  },
  {
    title: "AI Evaluator / Data Annotation",
    org: "Micro Engineering Company",
    period: "Jun 2024 - Oct 2024",
    duration: "About 5 months",
    context: "AI training and autonomous driving-related evaluation",
    points: [
      "Evaluated AI-generated outputs in driving scenarios.",
      "Worked with LiDAR and radar-related annotation tasks.",
      "Compared driving scenarios against US traffic rules.",
      "Identified potential safety issues and rule violations.",
      "Provided structured feedback to support AI model evaluation.",
    ],
  },
  {
    title: "Business Owner / Entrepreneur",
    org: "Independent business",
    period: "During university",
    duration: "About 3 years",
    context: "Running a small business day to day",
    points: [
      "Managed an independent business.",
      "Handled day-to-day business challenges.",
      "Developed practical problem-solving and decision-making skills.",
      "Gained experience in customer interaction and negotiation.",
      "Learned to understand business needs and operational constraints.",
      "Took ownership of responsibilities and decisions.",
    ],
  },
];
