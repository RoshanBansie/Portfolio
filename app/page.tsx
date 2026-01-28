import Education from "@/components/home/education/Education";
import "./page.css";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import ContactForm from "@/components/home/contact/ContactForm";

export default function Home() {
  return (
      <main>
        <Hero />
        <Projects />
        <Education />
        <ContactForm />
      </main>
  );
}
