import AboutMe from "../_layouts/05_about/AboutMe";
import Contact from "../_layouts/07_contact/Contact";
import Design from "../_layouts/06_desing/Design";
import Experience from "../_layouts/04_experience/Experience";
import Hero from "../_layouts/01_home/Hero";
import Process from "../_layouts/03_process/Process";
import Proyects from "../_layouts/02_proyects/Proyects";

export default async function page() {

  return (
    <section className="flex-1 flex flex-col justify-center items-center w-full">
      <Hero />
      <Proyects />
      <Process />
      <Experience />
      <AboutMe />
      <Design />
      <Contact />
    </section>
  )
}
