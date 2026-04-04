import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Servicios from "./components/sections/Servicios";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Footer />
    </main>
  );
}