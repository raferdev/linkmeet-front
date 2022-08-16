import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingContext } from '../../contexts/loadingContext.js';
import { UserContext } from '../../contexts/userContext.js';
import { SignIn } from '../../services/apiAuthRoutes.js';
import * as S from './SignInPage.styles.js';

export function SignInPage() {
  const { setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const user = await SignIn(identifier, password);

    if (user) {
      setUser(user);
      setLoading(false);
      return navigate('/search');
    }

    if (!user) {
      setLoading(false);
      alert('Profile identifier or password is incorrect!');
    }
  }

  return (
    <S.LoginMain>
      <h1>Faz o login aí</h1>
      <S.FormLogin onSubmit={submitHandler}>
        <S.LabelLogin htmlFor="name"> Name,Profile or Email</S.LabelLogin>
        <S.InputLogin
          name="identifier"
          type="text"
          placeholder="fulano da silva"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
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
        <S.ButtonLogin type="submit">Enviar</S.ButtonLogin>
        <S.LinkTo onClick={() => navigate('/signup')}>
          Dont have account? <span>Click here.</span>
        </S.LinkTo>
      </S.FormLogin>
    </S.LoginMain>
  );
}
