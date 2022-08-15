import styled from 'styled-components';

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 500px;
  border-radius: 17px;
  padding: 15px 20px;
  box-shadow: -4px 4px 7px 0px #777777;
  background-color: #fcfc58;
  border: 1px solid #777777;
`;

export const CardTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-family: 'Edu QLD Beginner', cursive;
  font-size: 25px;
  font-weight: 700;
  color: #111111;
`;

export const CardBodyDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const CardBodyLeft = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #eaea7e;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #424240;
`;

export const CardBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export const CardBodyRightLines = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom-right-radius: 2px;
  font-family: 'Edu QLD Beginner', cursive;
  font-size: 23px;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid #424240;
`;

export const CardBodyLeftRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 7px;
  align-items: center;
  flex-direction: column;
  vertical-align: middle;
  font-family: 'Edu QLD Beginner', cursive;
  font-size: 20px;
`;

export const CardBodyLeftLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CardBodyLeftLeftTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardBodyLeftLeftBottom = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardBodyLeftLeftBottomLineOne = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  font-family: 'Edu QLD Beginner', cursive;
  font-size: 16px;
  font-weight: 700;
`;

export const CardBodyLeftLeftBottomLineTwo = styled.div`
  width: 90px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  font-family: 'Edu QLD Beginner', cursive;
  font-size: 16px;
  text-decoration: underline;
  font-weight: 500;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #000000;
`;

export const CardProfileImage = styled.img`
  height: 90px;
  width: 90px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right: 1px solid #424240;
  border-bottom: 1px solid #424240;
`;
