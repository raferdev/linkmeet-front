import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext.js';
import {
  HeaderStyles,
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
