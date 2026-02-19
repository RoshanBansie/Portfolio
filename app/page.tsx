import Education from "@/components/home/education/Education";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import ContactSection from "@/components/home/contact/ContactSection";
import Skills from "@/components/home/skills/Skills";
import About from "@/components/home/about/About";

export default function Home() {
  return (
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Education />
        <ContactSection />
      </main>
  );
}
