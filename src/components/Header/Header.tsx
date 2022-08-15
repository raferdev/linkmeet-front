import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext.js';
import { HeaderStyles, Title, UserInfo, UserName } from './Header.styles.js';

export function Header() {
  const { user } = useContext(UserContext);

  const ProfileTitle = 'Hello!';
  return (
    <HeaderStyles>
      <Title>Linkmeet</Title>
      <UserInfo>
        <UserName>{ProfileTitle}</UserName>
      </UserInfo>
    </HeaderStyles>
  );
}
