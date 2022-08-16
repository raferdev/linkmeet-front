import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import { LoadingContext } from '../../contexts/loadingContext.js';
import { UserContext } from '../../contexts/userContext.js';
import { userState } from '../../hooks/hooksStates.js';
import { SignIn } from '../../services/apiAuthRoutes.js';
import {
  ButtonLoginSignIn,
  ButtonLoginSignUp,
  HeaderStyles,
  LoginBackground,
  LoginForm,
  LoginHeaderButton,
  LoginInput,
  LoginLabel,
  LogoutHeaderButton,
  MenuButton,
  MenuDiv,
  MenuHeaderButton,
  NavHeader,
  Title,
  UserHello,
  UserInfo,
  UserName,
} from './Header.styles.js';

export function Header() {
  const { user, setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  let ProfileTitle = 'Hello!';

  if (user.name) {
    user.name = user.name[0].toUpperCase() + user.name.slice(1);
    ProfileTitle = 'Hello,';
  }

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    setLoading(true);

    const user = await SignIn(identifier, password);

    if (user) {
      setUser(user);
      setLoading(false);
      setSelected(false);
      setIdentifier('');
      setPassword('');
    }

    if (!user) {
      setLoading(false);
      alert('Profile identifier or password is incorrect!');
    }
  }

  function Logout() {
    setUser(userState);
  }

  function BackgroundDisable() {
    setSelected(false);
    setMenu(false);
  }

  function MenuCardNav() {
    navigate(`/${user.alias}/cards`);
    setMenu(false);
  }
  return (
    <>
      <MenuDiv display={menu ? 'flex' : 'none'}>
        <MenuButton onClick={MenuCardNav}>Cards</MenuButton>
        <MenuButton>Organizations</MenuButton>
        <MenuButton>Notifications</MenuButton>
        <MenuButton>Search</MenuButton>
      </MenuDiv>
      <LoginForm display={selected ? 'flex' : 'none'} onSubmit={submitHandler}>
        <LoginLabel htmlFor="identifier">User</LoginLabel>
        <LoginInput
          name="identifier"
          type="text"
          placeholder="Email or Profile"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading ? true : false}
        />
        <ButtonLoginSignUp>
          {loading ? (
            <ScaleLoader height={20} width={5} color={'#e6ae00'} />
          ) : (
            'Sign Up'
          )}
        </ButtonLoginSignUp>
        <ButtonLoginSignIn type="submit">
          {loading ? (
            <ScaleLoader height={20} width={5} color={'#e6ae00'} />
          ) : (
            'Send'
          )}
        </ButtonLoginSignIn>
      </LoginForm>
      <LoginBackground
        onClick={BackgroundDisable}
        display={selected || menu ? 'flex' : 'none'}
      ></LoginBackground>
      <HeaderStyles>
        <Title>Linkmeet</Title>
        <NavHeader>
          {user.name ? (
            <MenuHeaderButton onClick={() => setMenu(true)}>
              Menu
            </MenuHeaderButton>
          ) : (
            <></>
          )}
          {user.name ? (
            <LogoutHeaderButton onClick={Logout}>Logout</LogoutHeaderButton>
          ) : (
            <LoginHeaderButton onClick={() => setSelected(true)}>
              Login
            </LoginHeaderButton>
          )}
        </NavHeader>
        <UserInfo>
          <UserHello
            position={user.name ? 'fixed' : 'inital'}
            height={user.name ? '25px' : '30px'}
          >
            {ProfileTitle}
          </UserHello>
          {user.name ? (
            <UserName>
              {user.name}
              <span>!</span>
            </UserName>
          ) : (
            <></>
          )}
        </UserInfo>
      </HeaderStyles>
    </>
  );
}
