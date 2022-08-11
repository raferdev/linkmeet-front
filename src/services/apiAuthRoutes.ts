import api from './api.js';

export async function SignUp(
  alias: string,
  name: string,
  email: string,
  password: string,
) {
  const data = {
    alias,
    name,
    email,
    password,
  };
  try {
    await api.post('/signup', data);
  } catch (e) {
    console.log(e);
    console.error('Request error');
    return null;
  }
}

export async function SignIn(identifier: string, password: string) {
  const data = {
    identifier,
    password,
  };
  try {
    const result = await api.post('/signin', data);
    return result.data;
  } catch (e) {
    console.log(e);
    console.error('Request error');
    return null;
  }
}
