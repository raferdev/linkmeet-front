import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext.js';

export function Home() {
  const { user } = useContext(UserContext);
  console.log(user);
  return <h1>Home</h1>;
}
