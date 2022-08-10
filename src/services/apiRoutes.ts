import { UserSignIn } from '../types/userTypes.js';
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
    const result = await api.post('/signup', data);
    if (result.data.status === 201) {
      return true;
    }
    return false;
  } catch (e) {
    console.error('Request error');
    return false;
  }
}

export async function SignIn(data: UserSignIn) {
  const result = await api.post('/signin', data);
  return result.data;
}
