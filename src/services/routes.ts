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

  const result = await api.post('/signup', data);
  return result.data;
}

export async function SignIn(data: UserSignIn) {
  const result = await api.post('/signin', data);
  return result.data;
}
