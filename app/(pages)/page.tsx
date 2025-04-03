import About from "../_components/About/About";
import Proyects from "../_components/Proyects/Proyects";

export default async function page() {

  return (
    <section className="flex-1 flex flex-col justify-center items-center mx-auto w-[95%] sm:w-3/4">
      <About />
      {/* <Proyects /> */}
    </section>
  )
}
