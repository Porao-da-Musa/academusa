import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/userService";

export default function Login() {
  const navigate = useNavigate?.() ?? (() => {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const user = login(email, password);

      console.log("Usuário logado:", user); // <-- check

      // redirecionar para Dashboard ou Admin
      navigate("/dashboard");

    } catch (err: any) {
      setError(err.message ?? "Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-md p-8">
        
        <h1 className="text-2xl font-semibold mb-2">Entrar</h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <label className="block">
            <span className="text-sm font-medium">E-mail</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-black placeholder-slate-400 focus:outline-none focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@exemplo.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Senha</span>
            <input
              type="password"
              className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-black placeholder-slate-400 focus:outline-none focus:ring"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </label>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Ainda não tem conta?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-indigo-600 font-medium hover:underline"
          >
            Criar conta
          </button>
        </div>

      </div>
    </div>
  );
}
