import AboutMe from "../_layouts/05_about/AboutMe";
import Contact from "../_layouts/07_contact/Contact";
import Design from "../_layouts/06_desing/Design";
import Experience from "../_layouts/04_experience/Experience";
import Hero from "../_layouts/01_home/Hero";
import Process from "../_layouts/03_process/Process";
import Proyects from "../_layouts/02_proyects/Proyects";
import Footer from "../_layouts/08_Footer/Footer";
import Header from "../_components/Header/Header";

export default async function page() {

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col justify-center items-center w-full">
          <Hero />
          <Proyects />
          <Process />
          <Experience />
          <AboutMe />
          <Design />
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  )
}
