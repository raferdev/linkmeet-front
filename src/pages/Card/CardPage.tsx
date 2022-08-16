import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import { Header } from '../../components/Header/Header.js';
import { LoadingContext } from '../../contexts/loadingContext.js';
import { UserContext } from '../../contexts/userContext.js';
import {
  ButtonsDiv,
  CreateCardButton,
  Main,
  SearchCardsButton,
} from './CardPage.styles.js';

export function CardPage() {
  const { loading } = useContext(LoadingContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Main>
      <Header />
      {loading ? (
        <ScaleLoader height={60} width={7} color={'#e6ae00'} />
      ) : (
        <ButtonsDiv>
          <SearchCardsButton>Your Cards</SearchCardsButton>
          <CreateCardButton
            onClick={() => navigate(`/${user.alias}/cards/new`)}
          >
            Create New Card
          </CreateCardButton>
        </ButtonsDiv>
      )}
    </Main>
  );
}
