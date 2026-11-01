import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { WhyMe } from "@/components/sections/WhyMe";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { profile } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <WaveDivider />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
