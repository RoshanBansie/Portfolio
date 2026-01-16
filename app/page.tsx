import "./page.css";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
      <main>
        <div className="hero">
          <h1>Turning design into reality</h1>
          <p>
            Lorem ipsum dolor sit amet. 
            Ab quam laborum est nulla dolores in delectus consequatur et 
            quam porro ut ducimus mollitia et quia eligendi. 
            Eos eaque nostrum ut accusamus odit sed omnis cumque est autem corrupti 
            sed tempora sequi sed libero officia. 
            33 deleniti accusamus ut asperiores excepturi 
            ad accusamus mollitia vel velit sint ut molestiae odio
            sit possimus veniam ut temporibus rerum.
          </p>
        </div>
        <Projects />
      </main>
  );
}
