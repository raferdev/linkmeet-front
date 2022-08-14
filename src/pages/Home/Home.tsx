import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext.js';
import {
  CardBodyDiv,
  CardBodyLeft,
  CardBodyLeftLeft,
  CardBodyLeftLeftBottom,
  CardBodyLeftLeftBottomLine,
  CardBodyLeftLeftTop,
  CardBodyLeftRight,
  CardBodyRight,
  CardBodyRightLines,
  CardDiv,
  CardProfileImage,
  CardTitle,
  CardTitleDiv,
  Header,
  Main,
  Title,
  UserInfo,
  UserName,
} from './Home.styles.js';

export function Home() {
  const { user } = useContext(UserContext);
  return (
    <Main>
      <Header>
        <Title>Linkmeet</Title>
        <UserInfo>
          <UserName>{user.name}</UserName>
        </UserInfo>
      </Header>
      <CardDiv>
        <CardTitleDiv>
          <CardTitle>Titulo legal</CardTitle>
        </CardTitleDiv>
        <CardBodyDiv>
          <CardBodyLeft>
            <CardBodyLeftLeft>
              <CardBodyLeftLeftTop>
                <CardProfileImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhASEBAQEBAVFRAQDw8PDw8VDxUVFRIWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHx8tLS0tLS0rLS0tLS0tLS0vLS0tLS0wLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EADUQAQACAQEGAwYEBgMBAAAAAAABAhEDBAUSITFBUWGRInGBobHBE0LR4SMyUmLw8QYVghT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QAJREBAAICAgICAQUBAAAAAAAAAAECAxEEIRIxInFBEzIzUWEF/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADV27a4048bT0j/Ozm1orG5e1rNp1C7X160jNpiI83A2r/k9eL8PRrNr4zMzE4iPPwUbTrTeZm05n5NbT04iZZWbn2mdU6hpYeJSI3fuW7/9urb+a8x5V5R8llNovH5restSq2sq0ZrT+ZS2pX+ob2nvG8f3R5w6OzbbW/LpPhP2cCfJCLzH2WcfLvX33CG3Grb109WOVu/eWfZvPut+rqtPHkrkjdVC+O1J1IAkcAAAAAAAAAAAAAAAAAAI6l4rEzPSObze16s6lptPp5OrvjWxWK+PX3Q49ZZH/Qzd+EL/ABaajzVTVmKrsM8LPiu1zya02wzF0tWijLy06dx2urfpn4s2nKjjOJ7W54rZtjo6m694/lv07T4fs5PVGmnKziy2pbyqjyYq3rqXshytz7dn2LdfyzP0dVt48kXr5QyMlJpbUgDtwAAAAAAAAAAAAAAAA8/vrV/iY8MRHplr1Wb1rnVnynl6KqPneTuctp/1r441jr9JpyjUlzUlXqtWza1Z5NWyDKmxqbT1ZiWLyxCKJ7Tra2W0u1ZlZp3WKXcWq24nExMcpjnD0exbTGpWJ79LR5vMVs3d37V+HaP6Z6x92lxc3jOvxKjycXlXce4eiGIllrMwAAAAAAAAAAAAAAAB5veVZ/Gv4csekI9G1vSvt2+H0hqXiJjExE9J5+MTmPm+f5EayW+2tjndK/QllGIJlBE6doarVs2LS17osiWipXM4WWVXV56TwccTy74zhbptfC3TlJW3ZLYiyddRr8SVbLlLdobQ9PujaeKvDPWOnudB5nYNfgtEvS1nPOG5xsnnTX9MjkY/G32yAsK4AAAAAAAAAAAAADkb0j2/hDQtDqb0rzifJzbQxeXX5y0sE/CGFepjE5WzCrh88qcwnhXaVFl+pyUShumopsqtXPeY555L7IShlNCvDEXSshNHMTp6siWYznMfsVhnOFqko5bWnZ6TdWtxUx3jl8OzzOlZ09z63DfHaeX6fNqcW/jb7UeTTyp9PQANZlgAAAAAAAAAAAAANLedcxDmS628Y9n4w5F5ZvLj5LvH/axdCTUlXNmdZbiGNSFF4WX5q7ShtpLVTaEJW4VzCCYTQq4ec/JPCOtfhxOJnnj2YynhxMOhia5ZIlLSXMp6cNnRtictaJbGnzXsVkF4er2fU4q1t4wsc7c2rms18J+rot3HbyrEsa9fG0wAO3AAAAAAAAAAAACjbY9ifh9XE1pdza49izibRTMY+Pozub7XOL6USrlfwozVl2hdiVEqrdcfFtcKFqo5hJFmrJhZaFUzzxz6Zz2RSliWJhiYSliXEw9V2jMTGZ58uU4n4M1hiZJs9rL2VkS2NOcQ06+PzbFLLWKyK8Ozum+Lx5xj/PR23mdg1MWr35w9M3OJbdNMnlV1fYAtKwAAAAAAAAAAACGvGa290/Rw7S71ocLUhR5kelrjT7UatMzE5mMdu0+9nDMyTLLlcQmFd4WWlXMo7O4a+ZnOYxzxHn5oWhbZXdDZPCuWEJ1E4lH7SIWqJzCEglp1hZMYj7qtK2fn1jwlesUhxZjY7zPFymPa4Y84z1+r2lXktlr7VfOYj1l65s8GPjLL5s9wAL6kAAAAAAAAAAAAOHt1Zi046ZnLuOXvGuLZ8cKvKruifjzqzl2mYxjnz5+5YzagyJhobVyrsnMqr3jOO/XCKzuqnnmfDtzLpWRshlNDQ1ItFoxjh55znPwbFUbWienPHVKqLSWUsMcKUSzLqHKFVsK6TFs+/Ercf52WKOLN/c2nnVrPWIiZ+PZ6Rwdw19qfdP1d5vcT+Nkcr+QAWVYAAAAAAAAAAAAae8tPNc+H3biGrTiiY8XGSvlWYdUt42iXAt/tDUie3qv1aTz+ambdIYl41LUrKqlJiOc5nvP7IXjv3bGFGogt0krPbU1doiLRWZiJnpE9/clKOto1mYtNYm0Z4ZmOcZ8EZlBKeIV3qlWEZmMpxCPTtmkY75SkY6y6h4nEJTKNeWPRLhWMaOXZ/wCP6f8ANPuiPr+jstXdmlw6dfGfan4/s2n0OCvjSIYua3leZAEqIAAAAAAAAAAAAABztv0sTmO/1c63OM4d7W0+KJj0cXX0pjijv4SzOXi1O/xK7x77jTXyhdZbza+pZm3nS7XtRr0mcYmYxPbHPyV2qs/EienPtPkxhXt2sR01o0fa4sz0xw8se9fEJTDEuPT3e0LVnx5fNKCbI5exIU5TM5mc9I5Yjl2dDduhOpeI7R7VvdH6tCsc4iOc9IiOr0m7dGNKuOtp52n7e5o8LDN7bn1CrycvjXUe5dLJlR+KlW7d2yNLYlKEKpvXgAPAAAAAAAAAAAABq7dsnHHLlbtLaYlxesWrqXVbTWdw8zqzMcrROenNr3tGPDyd7b9ni8c49093ndu0r0/LNo8urE5HHtX121cGSt476RmY7I/iObq7dwTzpeP/ADb7Q5+078x/Lp6tvdp2+7OtW2/S7EQ71tePFCdeHjdp3ttN5/h6Fqx/d1Y0dXbZ/JHx/wBOow5J/BusPX214jwa9dr7ZzPk4tNh2vU/mmKx4VifrLr7u3JeOuVnDxJmfkhvmiI6dbd+pFZ4utvHw8odbS2iZauybql1tn2DDZxU8Y1DNy2iZ3JpTMtzSqlp6GF0VWIiVabMVhIHbgAAAAAAAAAAAAAAYlkBVeii+z57NxjCOce3cXmHMvsFZ61j0VTumk/kj0djBhx+jDv9ezjf9PT+mPRZXdVI7R6OrgwRhgnNZoU3dWOy+myVjs2R3GOIcTe0oV04hMHcQ4AHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="></CardProfileImage>
              </CardBodyLeftLeftTop>
              <CardBodyLeftLeftBottom>
                <CardBodyLeftLeftBottomLine>
                  Rafael Fernandes
                </CardBodyLeftLeftBottomLine>
                <CardBodyLeftLeftBottomLine>Turma 5</CardBodyLeftLeftBottomLine>
              </CardBodyLeftLeftBottom>
            </CardBodyLeftLeft>
            <CardBodyLeftRight>
              Comecei a estudar em janeiro e estou disponivel nesses links
            </CardBodyLeftRight>
          </CardBodyLeft>
          <CardBodyRight>
            <CardBodyRightLines>alo</CardBodyRightLines>
            <CardBodyRightLines>alo</CardBodyRightLines>
            <CardBodyRightLines>alo</CardBodyRightLines>
            <CardBodyRightLines>alo</CardBodyRightLines>
            <CardBodyRightLines>alo</CardBodyRightLines>
            <CardBodyRightLines>alo</CardBodyRightLines>
          </CardBodyRight>
        </CardBodyDiv>
      </CardDiv>
    </Main>
  );
}
