import Hero from "./[home]/Hero";
import Proyects from "./[proyects]/Proyects";

export default async function page() {

  return (
    <section className="flex-1 flex flex-col justify-center items-center w-full">
      <Hero />
      <Proyects />
    </section>
  )
}
