/**
 * Single place to edit personal details. Nothing here is invented:
 * every value comes from Mohamed's own CV or public GitHub/LinkedIn profiles.
 */
export const profile = {
  name: "Mohamed Eid",
  monogram: "ME",
  role: "Data Analyst & Front-end Developer",
  tagline: "Turning Data into Insights. Turning Ideas into Digital Solutions.",
  secondaryTagline: "Data Analyst & Front-end Developer | Business-Minded Problem Solver.",
  location: "Cairo, Egypt",
  /** Public contact email (approved by the owner for public display). */
  email: "mohamedeid.tm@gmail.com",
  github: "https://github.com/Mohamed-025",
  linkedin: "https://www.linkedin.com/in/mohamedeid25/",
  /** Path of a public CV in /public, for example "/Mohamed_Eid_CV.pdf". Empty hides the button. */
  cvPath: "/Mohamed_Eid_CV.pdf",
  siteUrl: "https://mohamed-025.github.io/Portfolio",
  /**
   * Availability badge. Edit the text, or set `show` to false to hide it.
   * It is not a promise of availability.
   */
  availability: { show: true, text: "Open to data analytics and front-end roles" },
  /**
   * Optional: a form endpoint (for example a Formspree URL). When empty, the
   * contact form opens the visitor's email app with the message prefilled.
   */
  contactEndpoint: "",
} as const;
