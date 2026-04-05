import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20">

      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[75vh]">

        {/* Izquierda — imagen */}
        <div className="relative min-h-72 md:h-full overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80" alt="Nail art de lujo" fill className="object-cover" />
          <div className="absolute inset-0" style={{background: "linear-gradient(to top, #0A0A0A 15%, transparent 60%)"}} />
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="w-full h-px mb-4" style={{background: "linear-gradient(90deg, #FF69B4, #C084FC)"}} />
            <p className="text-purple-light text-xs tracking-[4px] uppercase mb-2">Nail Art Premium</p>
            <h2 className="text-white font-bold text-2xl leading-tight" style={{fontFamily: "Georgia, serif"}}>Luxury Rose Velvet</h2>
            <p className="text-gray-400 text-xs mt-1">Builder Gel · 90 min</p>
          </div>
        </div>

        {/* Derecha — contenido */}
        <div className="bg-dark flex flex-col justify-center px-12 md:px-16 lg:px-20 py-16 md:py-0">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-px h-14" style={{background: "linear-gradient(180deg, #FF69B4, #C084FC)"}} />
            <div>
              <p className="text-pink text-xs tracking-[4px] uppercase">Velvet Nails</p>
              <p className="text-purple text-xs tracking-[3px] uppercase mt-1">Studio · Costa Rica</p>
            </div>
          </div>

          <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-3" style={{fontFamily: "Georgia, serif"}}>
            Donde la<br />Belleza
          </h1>
          <h1 className="text-pink font-normal italic text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{fontFamily: "Georgia, serif"}}>
            es Arte
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
            Sumérgete en una experiencia de manicura de alta gama diseñada exclusivamente para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/reservar" className="btn-pink text-center uppercase tracking-widest text-xs px-10 py-4">Reservar Cita</Link>
            <Link href="/galeria" className="btn-outline-purple text-center uppercase tracking-widest text-xs px-10 py-4">Ver Galería</Link>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-purple text-2xl font-bold">5k+</p>
              <p className="text-gray-600 text-xs tracking-[2px] uppercase mt-1">Clientes</p>
            </div>
            <div className="w-px h-10 bg-dark-border" />
            <div className="text-center">
              <p className="text-purple text-2xl font-bold">12</p>
              <p className="text-gray-600 text-xs tracking-[2px] uppercase mt-1">Expertas</p>
            </div>
            <div className="w-px h-10 bg-dark-border" />
            <div className="text-center">
              <p className="text-purple text-2xl font-bold">100%</p>
              <p className="text-gray-600 text-xs tracking-[2px] uppercase mt-1">Premium</p>
            </div>
          </div>

        </div>
      </div>

      {/* Features */}
      <div className="bg-dark border-t border-dark-border grid grid-cols-1 md:grid-cols-3">
        {[
          { num: "01", color: "text-pink", border: "border-l-pink", title: "Productos Orgánicos", desc: "Solo las marcas más exclusivas y respetuosas con tu salud." },
          { num: "02", color: "text-purple", border: "border-l-purple", title: "Higiene Certificada", desc: "Protocolos de esterilización de grado médico para tu tranquilidad." },
          { num: "03", color: "text-pink", border: "border-l-pink", title: "Atención Personalizada", desc: "Cada servicio es una obra de arte diseñada exclusivamente para ti." },
        ].map((f) => (
          <div key={f.num} className={`p-10 border-l-2 ${f.border} border-b md:border-b-0 border-dark-border`}>
            <p className={`${f.color} text-xs tracking-[3px] uppercase mb-3`}>{f.num}</p>
            <p className="text-white font-bold text-base mb-2">{f.title}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}