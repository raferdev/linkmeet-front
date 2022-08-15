import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext.js';
import { HeaderStyles, Title, UserInfo, UserName } from './Header.styles.js';

export function Header() {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyles>
      <Title>Linkmeet</Title>
      <UserInfo>
        <UserName>{user.name}</UserName>
      </UserInfo>
    </HeaderStyles>
  );
}
