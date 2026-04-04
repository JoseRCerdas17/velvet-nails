const servicios = [
    { nombre: "Acrygel con Tips", precio: "₡XX,000", duracion: "90 min", descripcion: "Combinación perfecta de acrílico y gel para una resistencia superior con tips de extensión.", categoria: "Extensiones", color: "border-pink" },
    { nombre: "Escultural con Acrygel", precio: "₡XX,000", duracion: "120 min", descripcion: "Técnica avanzada de modelado sobre molde para un acabado natural y personalizado.", categoria: "Extensiones", color: "border-purple" },
    { nombre: "Semipermanente", precio: "₡XX,000", duracion: "45 min", descripcion: "Esmaltado de larga duración con brillo impecable hasta por 3 semanas.", categoria: "Color", color: "border-pink" },
    { nombre: "Híbridas", precio: "₡XX,000", duracion: "100 min", descripcion: "Mezcla de técnicas para lograr volumen y longitud con un aspecto sofisticado.", categoria: "Extensiones", color: "border-purple" },
    { nombre: "Fibra de Vidrio", precio: "₡XX,000", duracion: "120 min", descripcion: "Extensiones ultra finas y resistentes, ideales para uñas quebradizas o dañadas.", categoria: "Extensiones", color: "border-pink" },
    { nombre: "Rubber Base / Liquid Builder", precio: "₡XX,000", duracion: "60 min", descripcion: "Refuerzo flexible que aporta volumen y protege la uña natural favoreciendo su crecimiento.", categoria: "Cuidado", color: "border-purple" },
    { nombre: "Builder Gel", precio: "₡XX,000", duracion: "75 min", descripcion: "Gel constructor de alta viscosidad para nivelar y fortalecer la uña natural.", categoria: "Cuidado", color: "border-pink" },
    { nombre: "Pedicure Spa", precio: "₡XX,000", duracion: "60 min", descripcion: "Tratamiento completo de hidratación, exfoliación y cuidado profundo para tus pies.", categoria: "Spa", color: "border-purple" },
    { nombre: "Manicure Spa", precio: "₡XX,000", duracion: "50 min", descripcion: "Ritual de belleza para manos que incluye exfoliación orgánica y masaje relajante.", categoria: "Spa", color: "border-pink" },
  ];
  
  export default function Servicios() {
    return (
      <section className="bg-dark section-padding">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="text-pink text-xs tracking-[4px] uppercase mb-4">✦ Lo que ofrecemos ✦</p>
            <h2 className="text-white font-bold text-4xl md:text-5xl mb-4" style={{fontFamily: "Georgia, serif"}}>
              Servicios <span className="text-pink italic">&amp; Precios</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Desde técnicas clásicas hasta las últimas innovaciones en esculpido y cuidado spa.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div key={s.nombre} className={`bg-dark-card border border-dark-border border-t-2 ${s.color} rounded-lg p-6 hover:border-pink transition-all duration-300 group`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-gray-600 uppercase tracking-widest border border-dark-border px-2 py-1 rounded-full">{s.categoria}</span>
                  <span className="text-purple font-bold text-lg">{s.precio}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-pink transition-colors duration-300">{s.nombre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs">{s.duracion}</span>
                  <a href="/reservar" className="text-pink text-xs uppercase tracking-wider hover:text-purple transition-colors duration-300">Reservar →</a>
                </div>
              </div>
            ))}
          </div>
  
          <p className="text-center text-gray-600 text-xs mt-10 tracking-wider">
            * Los precios son base y pueden variar según diseño adicional y longitud.
          </p>
  
        </div>
      </section>
    );
  }