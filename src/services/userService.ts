import users from "../data/users.json";

export function registerUser(name: string, email: string, password: string) {
  const exists = users.find(u => u.email === email);

  if (exists) {
    throw new Error("E-mail já cadastrado!");
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(newUser);
  return newUser;
}

export function login(email: string, password: string) {
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) throw new Error("Credenciais inválidas.");

  return user;
}
