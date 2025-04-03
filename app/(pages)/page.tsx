import About from "../_components/About/About";
import Proyects from "../_components/Proyects/Proyects";

export default async function page() {

  return (
    <section className="flex-1 flex flex-col justify-center items-center w-full">
      <About />
      <Proyects />
    </section>
  )
}
