import React, { useState } from 'react';

import * as S from './LoginPage.styles.js';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log('xablau');
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
        />
        <S.LabelLogin htmlFor="profile"> Profile Name</S.LabelLogin>
        <S.InputLogin
          name="profile"
          type="text"
          placeholder="fulanodasilva22"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          required
        />
        <S.LabelLogin htmlFor="name"> Name</S.LabelLogin>
        <S.InputLogin
          name="name"
          type="text"
          placeholder="fulano da silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <S.LabelLogin htmlFor="password"> Password</S.LabelLogin>
        <S.InputLogin
          name="password"
          type="password"
          placeholder="****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <S.LabelLogin htmlFor="confirmPassword"> Confirm Password</S.LabelLogin>
        <S.InputLogin
          name="confirmPassword"
          type="password"
          placeholder="****"
          value={confirmPassowrd}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <S.ButtonLogin type="submit">Enviar</S.ButtonLogin>
      </S.FormLogin>
    </S.LoginMain>
  );
}