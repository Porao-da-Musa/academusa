import users from "../data/users.json";
import { supabase } from "./supabaseClient";

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
    switch (authError.code) {
      case "user_already_exists":
        throw new Error("Usuário já cadastrado.");

      case "invalid_email":
        throw new Error("E-mail inválido.");

      case "weak_password":
        throw new Error("Senha muito fraca.");

      default:
        throw new Error("Erro ao criar conta. Tente novamente.");
    }
  }
}

export function login(email: string, password: string) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error("Credenciais inválidas.");

  return user;
}
