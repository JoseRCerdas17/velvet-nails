export default function Equipo() {
    return (
      <section className="bg-dark section-padding">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="text-pink text-xs tracking-[4px] uppercase mb-4">✦ Conoce a la artista ✦</p>
            <h2 className="text-white font-bold text-4xl md:text-5xl mb-4" style={{fontFamily: "Georgia, serif"}}>
              Nuestro <span className="text-pink italic">Equipo</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Una experta dedicada a transformar tus manos en una expresión de lujo y estilo.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
  
            {/* Foto */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80" alt="Nail technician" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-dark-card border border-pink rounded-xl p-4">
                <p className="text-pink font-bold text-2xl">5.0</p>
                <p className="text-gray-500 text-xs tracking-wider uppercase">Rating</p>
              </div>
            </div>
  
            {/* Info */}
            <div>
              <p className="text-purple text-xs tracking-[3px] uppercase mb-2">Master Artist</p>
              <h3 className="text-white font-bold text-3xl mb-1" style={{fontFamily: "Georgia, serif"}}>Sofia Velvet</h3>
              <p className="text-pink text-sm mb-6">Nail Artist & Fundadora</p>
  
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Con más de 8 años de experiencia en nail art y técnicas avanzadas de extensión, Sofia se especializa en crear diseños únicos que combinan elegancia y vanguardia. Certificada en técnicas rusas y americanas, cada servicio es una experiencia de lujo diseñada exclusivamente para ti.
              </p>
  
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: "8+", label: "Años de experiencia" },
                  { num: "5k+", label: "Clientes satisfechas" },
                  { num: "100%", label: "Productos orgánicos" },
                  { num: "12", label: "Técnicas certificadas" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-dark-card border border-dark-border rounded-lg p-4">
                    <p className="text-purple font-bold text-xl">{stat.num}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
  
              <a href="/reservar" className="btn-pink uppercase tracking-widest text-xs px-8 py-4 inline-block">
                Reservar con Sofia
              </a>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }