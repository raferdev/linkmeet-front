import styled from 'styled-components';

import {
  LoginBackgroundTypes,
  LoginFormTypes,
  MenuDivType,
  UserHelloTypes,
} from '../../types/styledTypes.js';

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0ccaba;
  width: 100%;
  height: 80px;
  box-shadow: 0px 0px 7px 4px #777777;
`;

export const Title = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  color: #e3f5b7;
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 65px;
  height: 65px;
  border: 2px solid #fcfc58;
  background-color: #f4bd18;
  box-shadow: -1px 1px 3px 2px #e3f5b7;
`;

export const UserHello = styled.h2<UserHelloTypes>`
  font-family: 'Dancing Script', cursive;
  position: ${(props) => props.position};
  top: -7px;
  font-weight: 400;
  font-size: ${(props) => props.height};
  color: #111111;
`;

export const UserName = styled.h4`
  position: relative;
  top: 10px;
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 500;
  font-size: 20px;
  color: #111111;
  span {
    font-family: 'Dancing Script', cursive;
  }
`;

export const LoginBackground = styled.div<LoginBackgroundTypes>`
  position: absolute;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(255, 255, 255, 0.4);
`;

export const LoginForm = styled.form<LoginFormTypes>`
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 130px;
  width: 250px;
  background-color: #5d5e59;
  border-radius: 5px;
  box-shadow: -2px 2px 2px 0px #777777;
  border: 1px solid #302727;
`;

export const LoginInput = styled.input`
  font-family: 'Edu QLD Beginner', cursive;
  border: 1px solid #302727;
  outline: none;
  padding-left: 5px;
  border-radius: 5px;
  height: 30px;
  width: 200px;
`;

export const ButtonLoginSignUp = styled.button`
  position: absolute;
  font-family: 'Edu QLD Beginner', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 11px;
  right: -48px;
  height: 30px;
  width: 60px;
  border-left: 1px solid #302727;
  border-top: 1px solid #302727;
  border-bottom: 1px solid #302727;
  border-right: 1px solid #302727;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fea189;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const ButtonLoginSignIn = styled.button`
  position: absolute;
  font-family: 'Edu QLD Beginner', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 84px;
  right: -48px;
  height: 30px;
  width: 60px;
  border-left: 1px solid #302727;
  border-top: 1px solid #302727;
  border-bottom: 1px solid #302727;
  border-right: 1px solid #302727;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #8ff638;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const LoginLabel = styled.label`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  font-size: 17px;
  color: white;
`;

export const LoginHeaderButton = styled.button`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  display: flex;
  font-size: 20px;
  align-items: top;
  justify-content: center;
  color: #ffffff;
  box-shadow: -1px 1px 0px 1px #777777;
  height: 30px;
  width: 190px;
  border: 1px solid #777777;
  border-radius: 5px;
  background-color: #5d5e59;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const LogoutHeaderButton = styled.button`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 30px;
  width: 190px;
  border: 1px solid #777777;
  box-shadow: -1px 1px 0px 1px #777777;
  border-radius: 5px;
  background-color: #5d5e59;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const MenuHeaderButton = styled.button`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 190px;
  border: 1px solid #777777;
  box-shadow: -1px 1px 0px 1px #777777;
  border-radius: 5px;
  background-color: #5d5e59;
  margin-right: 10px;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const MenuDiv = styled.div<MenuDivType>`
  font-family: 'Edu QLD Beginner', cursive;
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: ${(props) => props.display};
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 200px;
  background-color: #5d5e59;
  border-radius: 5px;
  box-shadow: -2px 2px 2px 0px #777777;
  border: 1px solid #302727;
`;

export const MenuButton = styled.button`
  width: 140px;
  height: 30px;
  outline: none;
`;

export const NavHeader = styled.div`
  display: flex;
  position: absolute;
  bottom: -40px;
  justify-content: space-between;
`;
