import { supabase } from "./supabaseClient.ts";

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data.user;
};

export const signup = async (name: string, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
    },
  });

  if (error) {
    switch (error.code) {
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
  return data.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};
