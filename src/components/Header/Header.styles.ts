import styled from 'styled-components';

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

export const UserName = styled.h2`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 400;
  font-size: 30px;
  color: #111111;
`;
