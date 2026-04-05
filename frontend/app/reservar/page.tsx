"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const servicios = [
  { id: 1, nombre: "Acrygel con Tips", precio: "₡XX,000", duracion: "90 min" },
  { id: 2, nombre: "Escultural con Acrygel", precio: "₡XX,000", duracion: "120 min" },
  { id: 3, nombre: "Semipermanente", precio: "₡XX,000", duracion: "45 min" },
  { id: 4, nombre: "Híbridas", precio: "₡XX,000", duracion: "100 min" },
  { id: 5, nombre: "Fibra de Vidrio", precio: "₡XX,000", duracion: "120 min" },
  { id: 6, nombre: "Rubber Base / Liquid Builder", precio: "₡XX,000", duracion: "60 min" },
  { id: 7, nombre: "Builder Gel", precio: "₡XX,000", duracion: "75 min" },
  { id: 8, nombre: "Pedicure Spa", precio: "₡XX,000", duracion: "60 min" },
  { id: 9, nombre: "Manicure Spa", precio: "₡XX,000", duracion: "50 min" },
];

const horarios = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

const pasos = ["Servicio", "Fecha y Hora", "Confirmar"];

export default function Reservar() {
  const [paso, setPaso] = useState(0);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<number | null>(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | null>(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);

  const servicio = servicios.find((s) => s.id === servicioSeleccionado);

  const confirmarReserva = async () => {
    if (!nombre || !telefono || !email) {
      alert("Por favor completa todos los campos");
      return;
    }
    setCargando(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setExito(true);
    } catch {
      alert("Error al crear la reserva");
    } finally {
      setCargando(false);
    }
  };

  if (exito) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen bg-dark flex items-center justify-center px-4 pt-20">
          <div className="bg-dark-card border border-pink rounded-xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-full bg-pink flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-black text-2xl">✓</span>
            </div>
            <h2 className="text-white font-bold text-2xl uppercase mb-2" style={{fontFamily: "Georgia, serif"}}>Cita Confirmada</h2>
            <p className="text-gray-500 text-sm mb-6">Tu cita ha sido agendada. Te esperamos en Velvet Nails Studio.</p>
            <div className="bg-dark rounded-xl p-4 mb-6 text-left flex flex-col gap-2">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Resumen</p>
              <p className="text-white text-sm"><span className="text-pink">Servicio:</span> {servicio?.nombre}</p>
              <p className="text-white text-sm"><span className="text-pink">Fecha:</span> {fechaSeleccionada?.toLocaleDateString("es-CR")}</p>
              <p className="text-white text-sm"><span className="text-pink">Hora:</span> {horarioSeleccionado}</p>
              <p className="text-white text-sm"><span className="text-pink">Total:</span> {servicio?.precio}</p>
            </div>
            <a href="/" className="btn-pink w-full uppercase tracking-widest text-sm py-3 block text-center">
              Volver al inicio
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-dark pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-10">
            <p className="text-pink text-xs tracking-[4px] uppercase mb-4">✦ Agenda tu cita ✦</p>
            <h1 className="text-white font-bold text-4xl md:text-5xl mb-2" style={{fontFamily: "Georgia, serif"}}>
              Reserva tu <span className="text-pink italic">Momento Velvet</span>
            </h1>
            <p className="text-gray-500 text-sm">Personaliza tu experiencia en solo unos pasos.</p>
          </div>

          {/* Pasos */}
          <div className="flex items-center justify-center mb-10 gap-2">
            {pasos.map((p, i) => (
              <div key={p} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 ${i <= paso ? "text-pink" : "text-gray-600"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${i <= paso ? "border-pink text-pink" : "border-gray-700 text-gray-600"} ${i === paso ? "bg-pink text-white" : ""}`}>
                    {i + 1}
                  </div>
                  <span className="text-xs uppercase tracking-wider hidden sm:block">{p}</span>
                </div>
                {i < pasos.length - 1 && <div className={`w-8 h-px ${i < paso ? "bg-pink" : "bg-gray-800"}`} />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Contenido principal */}
            <div className="lg:col-span-2 bg-dark-card border border-dark-border rounded-xl p-6">

              {/* Paso 1 - Servicio */}
              {paso === 0 && (
                <div>
                  <h2 className="text-white font-bold text-xl mb-6" style={{fontFamily: "Georgia, serif"}}>Selecciona un servicio</h2>
                  <div className="flex flex-col gap-3">
                    {servicios.map((s) => (
                      <button key={s.id} onClick={() => setServicioSeleccionado(s.id)} className={`p-4 rounded-xl border text-left transition-all duration-300 flex justify-between items-center ${servicioSeleccionado === s.id ? "border-pink bg-dark" : "border-dark-border bg-dark hover:border-pink"}`}>
                        <div>
                          <p className="text-white font-bold text-sm">{s.nombre}</p>
                          <p className="text-gray-500 text-xs mt-1">{s.duracion}</p>
                        </div>
                        <span className="text-purple font-bold">{s.precio}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paso 2 - Fecha y hora */}
              {paso === 1 && (
                <div>
                  <h2 className="text-white font-bold text-xl mb-6" style={{fontFamily: "Georgia, serif"}}>Elige fecha y hora</h2>
                  <div className="mb-6">
                    <label className="text-gray-500 text-xs uppercase tracking-wider mb-3 block">Fecha</label>
                    <Calendar onChange={(value) => setFechaSeleccionada(value as Date)} value={fechaSeleccionada} minDate={new Date()} locale="es-ES" className="react-calendar-velvet w-full" />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider mb-3 block">Horario disponible</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {horarios.map((h) => (
                        <button key={h} onClick={() => setHorarioSeleccionado(h)} className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all duration-300 ${horarioSeleccionado === h ? "border-pink bg-pink text-white" : "border-dark-border text-gray-400 hover:border-pink hover:text-pink"}`}>
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 3 - Confirmar */}
              {paso === 2 && (
                <div>
                  <h2 className="text-white font-bold text-xl mb-6" style={{fontFamily: "Georgia, serif"}}>Tus datos</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Nombre completo</label>
                      <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink transition-colors" />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Telefono o WhatsApp</label>
                      <input type="tel" placeholder="8888-8888" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink transition-colors" />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Email</label>
                      <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink transition-colors" />
                    </div>
                  </div>
                </div>
              )}

              {/* Botones navegación */}
              <div className="flex justify-between mt-8">
                {paso > 0 && (
                  <button onClick={() => setPaso(paso - 1)} className="btn-outline-pink text-xs uppercase tracking-widest px-6 py-3">
                    Atras
                  </button>
                )}
                {paso < 2 ? (
                  <button onClick={() => setPaso(paso + 1)} className="btn-pink text-xs uppercase tracking-widest px-6 py-3 ml-auto">
                    Continuar
                  </button>
                ) : (
                  <button onClick={confirmarReserva} disabled={cargando} className="btn-pink text-xs uppercase tracking-widest px-6 py-3 ml-auto disabled:opacity-50">
                    {cargando ? "Enviando..." : "Confirmar Cita"}
                  </button>
                )}
              </div>

            </div>

            {/* Resumen */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 h-fit">
              <h3 className="text-pink font-bold text-xs tracking-[3px] uppercase mb-4">Tu seleccion</h3>
              <div className="flex flex-col gap-3">
                <div className="border-b border-dark-border pb-3">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Servicio</p>
                  <p className="text-white font-bold text-sm">{servicio ? servicio.nombre : "---"}</p>
                </div>
                <div className="border-b border-dark-border pb-3">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Fecha</p>
                  <p className="text-white font-bold text-sm">{fechaSeleccionada ? fechaSeleccionada.toLocaleDateString("es-CR") : "---"}</p>
                </div>
                <div className="border-b border-dark-border pb-3">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Hora</p>
                  <p className="text-white font-bold text-sm">{horarioSeleccionado || "---"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total</p>
                  <p className="text-pink font-black text-xl">{servicio ? servicio.precio : "₡0"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}