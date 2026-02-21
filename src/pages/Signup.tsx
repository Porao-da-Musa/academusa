import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signup } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate?.() ?? (() => {});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const validate = () => {
    if (!fullName.trim()) {
      setLoading(false);
      return "Por favor informe seu nome.";
    }
    if (!email.includes("@")) {
      setLoading(false);
      return "E-mail inválido.";
    }
    if (password.length < 6) {
      setLoading(false);
      return "Senha deve ter ao menos 6 caracteres.";
    }
    if (password !== confirmPassword) {
      setLoading(false);
      return "As senhas não conferem.";
    }
    return null;
  };

  const handleSignup = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError(null);
    setMessage(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setLoading(true);
    try {
      const user = await signup(fullName, email, password);

      setMessage("Usuário cadastrado com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err: any) {
      setLoading(false);
      setError(err.message ?? "Erro ao cadastrar usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-2">Criar conta</h1>

        <form onSubmit={handleSignup} className="space-y-4" noValidate>
          <div className="block">
            <label htmlFor="name" className="text-sm font-medium">
              Nome completo
            </label>
            <input
              id="name"
              className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-black placeholder-slate-400 focus:outline-none focus:ring"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex.: Maria Silva"
            />
          </div>

          <div className="block">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-black placeholder-slate-400 focus:outline-none focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@exemplo.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-black placeholder-slate-400 focus:outline-none focus:ring"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-black placeholder-slate-400 focus:outline-none focus:ring"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
              />
            </div>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}
          {message && <div className="text-green-600 text-sm">{message}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold disabled:opacity-60"
          >
            {loading ? "Cadastrando..." : "Criar conta"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Já tem conta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-indigo-600 font-medium hover:underline"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
