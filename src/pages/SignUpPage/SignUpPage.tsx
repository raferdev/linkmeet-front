import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingContext } from '../../contexts/loadingContext.js';
import { SignUp } from '../../services/apiAuthRoutes.js';
import * as S from './SignUpPage.styles.js';

export function SignUpPage() {
  const { loading, setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    setLoading(true);

    if (password === confirmPassowrd) {
      const token = await SignUp(email, alias, name, password);
      if (token) {
        setLoading(false);
        return navigate('/login');
      }
      if (!token) {
        setLoading(false);
        return navigate('/signup');
      }
    }
  }
  return (
    <S.LoginMain>
      <h1>Faz o login aí</h1>
      <S.FormLogin onSubmit={submitHandler}>
        <S.LabelLogin htmlFor="email"> Email</S.LabelLogin>
        <S.InputLogin
          name="email"
          type="email"
          placeholder="fulano@beltrano.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <S.LabelLogin htmlFor="profile"> Profile Name</S.LabelLogin>
        <S.InputLogin
          name="profile"
          type="text"
          placeholder="fulanodasilva22"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <S.LabelLogin htmlFor="name"> Name</S.LabelLogin>
        <S.InputLogin
          name="name"
          type="text"
          placeholder="fulano da silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <S.LabelLogin htmlFor="password"> Password</S.LabelLogin>
        <S.InputLogin
          name="password"
          type="password"
          placeholder="****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <S.LabelLogin htmlFor="confirmPassword"> Confirm Password</S.LabelLogin>
        <S.InputLogin
          name="confirmPassword"
          type="password"
          placeholder="****"
          value={confirmPassowrd}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <S.ButtonLogin type="submit">Enviar</S.ButtonLogin>
      </S.FormLogin>
      <S.LinkTo onClick={() => navigate('/login')}>
        Do you have account? <span>Click here.</span>
      </S.LinkTo>
    </S.LoginMain>
  );
}
