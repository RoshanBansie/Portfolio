import Education from "@/components/home/education/Education";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import ContactForm from "@/components/home/contact/ContactForm";
import Skills from "@/components/home/skills/Skills";

export default function Home() {
  return (
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <ContactForm />
      </main>
  );
}
