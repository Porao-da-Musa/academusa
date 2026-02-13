import users from "../data/users.json";
import { supabase } from "./supabase.ts";

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const { error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
    },
  });

  if (authError) {
    throw new Error(`Erro ao registrar usuário: ${authError.message}`);
  }
}

export function login(email: string, password: string) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error("Credenciais inválidas.");

  return user;
}
