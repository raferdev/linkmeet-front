import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext.js';
import {
  ButtonLoginSignIn,
  ButtonLoginSignUp,
  HeaderStyles,
  LoginDiv,
  LoginInput,
  LoginLabel,
  Title,
  UserHello,
  UserInfo,
  UserName,
} from './Header.styles.js';

export function Header() {
  const { user } = useContext(UserContext);
  let ProfileTitle = 'Hello!';
  if (user.name) {
    user.name = user.name[0].toUpperCase() + user.name.slice(1);
    ProfileTitle = 'Hello,';
  }
  return (
    <HeaderStyles>
      <Title>Linkmeet</Title>
      <UserInfo>
        <LoginDiv>
          <LoginLabel>User</LoginLabel>
          <LoginInput placeholder="Email or Profile" />
          <LoginLabel>Password</LoginLabel>
          <LoginInput placeholder="Password" />
          <ButtonLoginSignUp>Sign Up</ButtonLoginSignUp>
          <ButtonLoginSignIn>Send</ButtonLoginSignIn>
        </LoginDiv>
        <UserHello
          position={user.name ? 'fixed' : 'inital'}
          height={user.name ? '23px' : '30px'}
        >
          {ProfileTitle}
        </UserHello>
        {user.name ? <UserName>{user.name + '!'}</UserName> : <></>}
      </UserInfo>
    </HeaderStyles>
  );
}
