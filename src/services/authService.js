export async function login(email, password) {
  const response = await fetch('/accounts.json');
  const data = await response.json();

  const user = data.users.find(usuario => usuario.email === email && usuario.password === password);
  return user? true: false;
}