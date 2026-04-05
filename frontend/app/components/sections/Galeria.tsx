import Image from "next/image";

const fotos = [
    { id: 1, url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80", categoria: "Acrygel", alt: "Acrygel con tips" },
    { id: 2, url: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&q=80", categoria: "Semipermanente", alt: "Semipermanente" },
    { id: 3, url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80", categoria: "Nail Art", alt: "Nail art creativo" },
    { id: 4, url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&q=80", categoria: "Builder Gel", alt: "Builder gel" },
    { id: 5, url: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&q=80&v=2", categoria: "Pedicure Spa", alt: "Pedicure spa" },
{ id: 6, url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&v=2", categoria: "Híbridas", alt: "Unas hibridas" },];
  
  export default function Galeria() {
    return (
      <section id="galeria" className="bg-dark-card section-padding">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="text-pink text-xs tracking-[4px] uppercase mb-4">✦ Nuestro trabajo ✦</p>
            <h2 className="text-white font-bold text-4xl md:text-5xl mb-4" style={{fontFamily: "Georgia, serif"}}>
              La <span className="text-pink italic">Galería</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Cada diseño es una obra de arte. Inspírate con nuestros trabajos más recientes.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fotos.map((foto) => (
              <div key={foto.id} className="relative overflow-hidden rounded-lg group aspect-square">
                <Image src={foto.url} alt={foto.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center" style={{background: "rgba(10,10,10,0.7)"}}>
                  <span className="text-pink font-bold text-xs tracking-[3px] uppercase border border-pink px-4 py-2 rounded-full mb-2">
                    {foto.categoria}
                  </span>
                  <a href="/reservar" className="text-white text-xs tracking-wider hover:text-purple transition-colors duration-300">
                    Reservar este estilo →
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-6">Síguenos en Instagram para ver más de nuestro trabajo</p>
            <a href="https://instagram.com" target="_blank" className="btn-outline-pink uppercase tracking-widest text-xs px-8 py-4">Ver Instagram</a>
          </div>
  
        </div>
      </section>
    );
  }