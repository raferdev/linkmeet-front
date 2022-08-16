import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3f5b7;
  width: 100%;
  height: 100%;
`;

export const ButtonsDiv = styled.div`
  display: flex;
`;

export const CreateCardButton = styled.button`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  width: 200px;
  padding: 15px 20px;
  color: #ffffff;
  margin: 10px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: -4px 4px 7px 0px #777777;
  background-color: #ffc018;
  border: 1px solid #777777;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;

export const SearchCardsButton = styled.button`
  font-family: 'Edu QLD Beginner', cursive;
  font-weight: 700;
  display: flex;
  font-size: 30px;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 15px 20px;
  box-shadow: -4px 4px 7px 0px #777777;
  background-color: #93c2b1;
  border: 1px solid #777777;
  &:hover {
    border: 2px solid #fcfc58;
  }
`;
