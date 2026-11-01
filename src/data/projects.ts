/**
 * Central project data. Add, edit or remove a project here and the grid,
 * filters and detail pages update. Leave `github` or `demo` empty when no
 * real link exists: the buttons are hidden instead of pointing nowhere.
 */
export type ProjectCategory = "Data Analytics" | "Web Development";
export type ProjectStatus = "Completed" | "In progress" | "Live in production";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryDetail: string;
  summary: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailCaption?: string;
  thumbnailNote?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
  github: string;
  demo: string;
  features: { label: string; items: string[] }[];
  status: ProjectStatus;
  statusNote?: string;
  featured: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "learnora-learning-platform",
    title: "Learnora - English Learning Platform",
    category: "Web Development",
    categoryDetail: "Fullstack Development / EdTech",
    summary:
      "A fullstack learning platform that helps Egyptian preparatory-school students study English: vocabulary, flashcards, quizzes, spaced repetition and a class leaderboard. Designed, built and deployed end to end, and live in production.",
    description:
      "Learnora is an Arabic-first English study platform for Egyptian preparatory-school students, with an English interface option and full RTL support. I built the whole stack myself: the Next.js front end, the PostgreSQL database with Prisma, authentication, an admin panel for content and users, and the deployment. It runs in production on Render with a Neon Postgres database and transactional email for signups, and it installs on phones as a PWA. The source code is in a private repository, so this page describes the project without publishing its code, data or admin tools.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Neon", "Docker", "Render", "PWA"],
    thumbnail: "/projects/learnora-dashboard-en.webp",
    thumbnailAlt: "Learnora student dashboard showing vocabulary mastery, weekly study minutes, recent quiz results and review queue (demo account)",
    thumbnailCaption: "Learnora dashboard - demo account. Select the image to view it full size.",
    thumbnailNote: "Dashboard images: demo account",
    gallery: [
      {
        src: "/projects/learnora-dashboard.webp",
        alt: "Learnora student dashboard in its Arabic interface with full RTL layout (demo account)",
        caption: "The same dashboard in the Arabic interface (RTL) - demo account.",
      },
    ],
    github: "",
    demo: "https://learnora-zhj6.onrender.com/",
    features: [
      {
        label: "What students get",
        items: [
          "Vocabulary flashcards with audio pronunciation, organized by grade, term and unit",
          "Spaced-repetition review that brings each word back at the right time",
          "Timed question-bank exams with instant marking and explanations",
          "A personal mistake library that returns until each mistake is mastered",
          "AI explanations that walk students through their mistakes",
          "Daily progress, study streaks and a class leaderboard",
          "Arabic and English interface with full RTL support",
          "Installs on Android phones as an app (PWA)",
        ],
      },
      {
        label: "How it's built",
        items: [
          "Next.js 15, React 19 and TypeScript front end",
          "PostgreSQL database on Neon, accessed through Prisma",
          "Server-side authentication with MFA and passkeys, plus subscription checks",
          "Admin panel for content, users, plans and settings",
          "Transactional email for signup confirmation",
          "Docker deployment on Render",
        ],
      },
    ],
    status: "Live in production",
    statusNote: "Actively maintained.",
    featured: true,
    note: "The source code is private. The live link opens the production deployment; the first visit can take a moment while the server wakes up.",
  },
  {
    slug: "call-center-performance-dashboard",
    title: "Call Center Performance Dashboard",
    category: "Data Analytics",
    categoryDetail: "Data Analytics / Power BI",
    summary:
      "An interactive Power BI dashboard designed to analyze call center performance, monitor operational KPIs, and evaluate service efficiency.",
    description:
      "The raw data was cleaned and transformed in Power Query, then modeled with a dedicated date table and a separate measures table. DAX measures calculate the operational KPIs, and the report layout focuses on slicers, KPI cards and trend charts.",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    thumbnail: "/projects/call-center.png",
    thumbnailAlt: "Call center performance dashboard report page built in Power BI",
    github: "https://github.com/Mohamed-025/call-center-performance-dashboard",
    demo: "https://app.powerbi.com/groups/me/reports/35036538-82bf-4205-a5c9-85cf264cd18f?ctid=77255288-5298-4ea5-81aa-a13e604c30ac&pbi_source=linkShare&bookmarkGuid=f9c1d713-3751-4f5f-9025-58c8d8547e5f",
    features: [
      {
        label: "KPIs tracked",
        items: [
          "Answer Rate", "Abandoned Call Rate", "Average Handling Time", "Efficiency",
          "Service Level Agreement (SLA) and SLA target", "Total calls offered, handled and abandoned",
        ],
      },
      {
        label: "Work involved",
        items: [
          "Data cleaning and transformation in Power Query",
          "Date table and star-schema style data model",
          "Custom DAX measures for the KPIs above",
          "Interactive slicers, KPI cards and trend charts",
        ],
      },
    ],
    status: "Completed",
    featured: true,
    note: "The live report opens in Power BI Service and may require a Microsoft sign-in, depending on the sharing settings of the report.",
  },
  {
    slug: "hr-analysis-dashboard",
    title: "HR Analysis Dashboard",
    category: "Data Analytics",
    categoryDetail: "Data Analytics / Business Intelligence",
    summary:
      "An HR analytics project focused on transforming workforce-related information into structured insights and interactive visualizations.",
    description:
      "A Power BI dashboard that looks at employee attrition and workforce demographics. It covers attrition across education field, age band, marital status, department, business travel and job role.",
    technologies: ["Power BI", "DAX", "Power Query", "Excel"],
    thumbnail: "/projects/hr.png",
    thumbnailAlt: "HR analytics dashboard in Power BI showing attrition breakdowns",
    github: "https://github.com/Mohamed-025/hr-analytics-dashboard",
    demo: "https://app.powerbi.com/groups/me/reports/081b7392-1404-4bcd-8134-2ba08e8b3555?ctid=77255288-5298-4ea5-81aa-a13e604c30ac&pbi_source=linkShare",
    features: [
      {
        label: "Key metrics",
        items: ["Total employees (current)", "Number of attrition cases", "Attrition rate", "Average age", "Gender distribution"],
      },
      {
        label: "Analysis breakdowns",
        items: [
          "Attrition by education field", "Attrition by age band", "Attrition by marital status",
          "Attrition by department", "Attrition by business travel", "Job role analysis",
        ],
      },
    ],
    status: "Completed",
    featured: true,
    note: "Findings are described in the project repository README. The live report opens in Power BI Service and may require a Microsoft sign-in.",
  },
  {
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    categoryDetail: "Data Analytics / Power BI",
    summary:
      "An interactive Power BI dashboard built to analyze sales trends, profitability, customer segments, shipping performance, and regional insights.",
    description:
      "The raw sales data was cleaned and transformed in Power Query, then organized into fact and dimension tables in a relational data model. Custom DAX measures calculate the KPIs shown on the report.",
    technologies: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling"],
    thumbnail: "/projects/sales.png",
    thumbnailAlt: "Sales performance dashboard report page built in Power BI",
    github: "https://github.com/Mohamed-025/sales-performance-analysis",
    demo: "https://app.powerbi.com/groups/me/reports/2965d47a-dec4-4b4d-a996-9927ff04d594?ctid=77255288-5298-4ea5-81aa-a13e604c30ac&pbi_source=linkShare",
    features: [
      {
        label: "What it covers",
        items: [
          "Overall sales performance and trends over time",
          "Profitability across regions",
          "Customer segments",
          "Shipping methods and order distribution",
        ],
      },
      {
        label: "Work involved",
        items: [
          "Data cleaning in Power Query: duplicates, missing values, date formats, column names",
          "Relational model with fact and dimension tables",
          "Custom DAX measures and KPI cards",
        ],
      },
    ],
    status: "Completed",
    featured: true,
    note: "The live report opens in Power BI Service and may require a Microsoft sign-in, depending on the sharing settings of the report.",
  },
  {
    slug: "ecommerce-sales-analysis",
    title: "E-commerce Sales Analysis",
    category: "Data Analytics",
    categoryDetail: "Data Analytics / Microsoft Excel",
    summary:
      "An Excel-based sales analysis project focused on organizing business data, exploring sales performance, and extracting useful commercial insights.",
    description:
      "A single-page interactive Excel dashboard built from raw sales data covering branches, brands, customers, products and payment methods for 2023 and 2024. The data was cleaned and structured with Power Query, then explored with Pivot Tables and charts. Built entirely in Excel.",
    technologies: ["Microsoft Excel", "Pivot Tables", "Power Query", "Data Visualization"],
    thumbnail: "/projects/ecommerce.png",
    thumbnailAlt: "Excel e-commerce sales dashboard",
    github: "https://github.com/Mohamed-025/E-commerce-Sales-Analysis",
    demo: "",
    features: [
      {
        label: "What it covers",
        items: [
          "Sales performance, 2023 compared with 2024", "Top products and brands", "Customer behavior and segmentation",
          "Revenue by branch", "Payment method preferences", "Quantity trends",
        ],
      },
    ],
    status: "Completed",
    featured: true,
  },
];

export const categories: Array<"All" | ProjectCategory> = ["All", "Data Analytics", "Web Development"];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
