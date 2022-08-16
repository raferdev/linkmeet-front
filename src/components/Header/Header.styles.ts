import styled from 'styled-components';

import {
  LoginBackgroundTypes,
  LoginFormTypes,
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
  width: 60px;
  height: 60px;
  border: 2px solid #fcfc58;
  background-color: #f4bd18;
  box-shadow: -1px 1px 3px 2px #e3f5b7;
`;

export const UserHello = styled.h2<UserHelloTypes>`
  font-family: 'Dancing Script', cursive;
  position: ${(props) => props.position};
  top: -9px;
  font-weight: 400;
  font-size: ${(props) => props.height};
  color: #111111;
`;

export const UserName = styled.h4`
  position: relative;
  top: 11px;
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 500;
  font-size: 22px;
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
  position: absolute;
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 26px;
  height: 30px;
  left: 30px;
  width: 190px;
  border-left: 1px solid #302727;
  border-top: 1px solid #302727;
  border-bottom: 1px solid #302727;
  border-right: 1px solid #302727;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #dcfc8d;
  padding-left: 30px;
  z-index: -1;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const LogoutHeaderButton = styled.button`
  position: absolute;
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 26px;
  height: 30px;
  left: 30px;
  width: 190px;
  border-left: 1px solid #302727;
  border-top: 1px solid #302727;
  border-bottom: 1px solid #302727;
  border-right: 1px solid #302727;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #f4c3b7;
  padding-left: 30px;
  z-index: -1;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const MenuHeaderButton = styled.button`
  position: absolute;
  padding-right: 30px;
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 26px;
  height: 30px;
  right: 30px;
  width: 190px;
  border-left: 1px solid #302727;
  border-top: 1px solid #302727;
  border-bottom: 1px solid #302727;
  border-right: 1px solid #302727;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #e3f5b7;
  z-index: -1;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;
