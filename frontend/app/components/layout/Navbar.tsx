"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border border-pink rounded flex items-center justify-center">
              <span className="text-pink font-black text-xs">VN</span>
            </div>
            <span className="text-white font-bold text-lg tracking-widest uppercase">
              Velvet <span className="text-pink">Nails</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/servicios" className="text-white hover:text-pink transition-colors duration-300 text-sm uppercase tracking-wider">Servicios</Link>
            <Link href="/galeria" className="text-white hover:text-pink transition-colors duration-300 text-sm uppercase tracking-wider">Galería</Link>
            <Link href="/equipo" className="text-white hover:text-pink transition-colors duration-300 text-sm uppercase tracking-wider">Equipo</Link>
            <Link href="/contacto" className="text-white hover:text-pink transition-colors duration-300 text-sm uppercase tracking-wider">Contacto</Link>
            <Link href="/reservar" className="btn-pink text-sm uppercase tracking-wider px-6 py-2">Reservar Cita</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col px-4 pb-6 gap-4 bg-dark-card border-t border-dark-border">
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="text-white hover:text-pink transition-colors py-2 uppercase tracking-wider text-sm">Servicios</Link>
          <Link href="/galeria" onClick={() => setIsOpen(false)} className="text-white hover:text-pink transition-colors py-2 uppercase tracking-wider text-sm">Galería</Link>
          <Link href="/equipo" onClick={() => setIsOpen(false)} className="text-white hover:text-pink transition-colors py-2 uppercase tracking-wider text-sm">Equipo</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="text-white hover:text-pink transition-colors py-2 uppercase tracking-wider text-sm">Contacto</Link>
          <Link href="/reservar" onClick={() => setIsOpen(false)} className="btn-pink text-center uppercase tracking-wider text-sm">Reservar Cita</Link>
        </div>
      </div>
    </nav>
  );
}