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

export async function login(email: string, password: string) {
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .maybeSingle();

  if (error || !user) {
    throw new Error("Credenciais inválidas.");
  }

  return user;
}
