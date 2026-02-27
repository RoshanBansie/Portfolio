import Education from "@/components/home/education/Education";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import ContactSection from "@/components/home/contact/ContactSection";
import Skills from "@/components/home/skills/Skills";
import About from "@/components/home/about/About";

// Data
import projects from "@/data/projects";

export default function Home() {
  return (
      <main>
        <Hero />
        <Projects projects={projects} />
        <Skills />
        <About />
        <Education />
        <ContactSection />
      </main>
  );
}
