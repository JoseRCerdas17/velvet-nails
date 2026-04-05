"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Por favor completa todos los campos");
      return;
    }
    setCargando(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("admin_token", data.access_token);
        router.push("/admin");
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch {
      setError("Error de conexión con el servidor");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="bg-dark-card border border-dark-border rounded-xl p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <div className="w-12 h-12 border border-pink rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-pink font-black text-sm">VN</span>
          </div>
          <h1 className="text-white font-bold text-2xl mb-1" style={{fontFamily: "Georgia, serif"}}>
            Velvet <span className="text-pink italic">Nails</span>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-wider">Panel de Administración</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Usuario</label>
            <input type="text" placeholder="admin" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink transition-colors" />
          </div>
          <div>
            <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Contraseña</label>
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink transition-colors" />
          </div>

          {error && <p className="text-red-400 text-xs text-center">{error}</p>}

          <button onClick={handleLogin} disabled={cargando} className="btn-pink w-full uppercase tracking-widest text-sm py-4 mt-2 disabled:opacity-50">
            {cargando ? "Entrando..." : "Entrar"}
          </button>
        </div>

        <p className="text-gray-600 text-xs text-center mt-6">Solo personal autorizado de Velvet Nails</p>
      </div>
    </div>
  );
}