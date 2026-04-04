import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Servicios from "./components/sections/Servicios";
import Galeria from "./components/sections/Galeria";
import Equipo from "./components/sections/Equipo";
import Contacto from "./components/sections/Contacto";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Galeria />
      <Equipo />
      <Contacto />
      <Footer />
    </main>
  );
}