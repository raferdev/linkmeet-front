import { useContext } from 'react';
import { ScaleLoader } from 'react-spinners';

import { Header } from '../../components/Header/Header.js';
import { LoadingContext } from '../../contexts/loadingContext.js';
import { Main } from './NewCardPage.styles.js';

export function NewCardPage() {
  const { loading } = useContext(LoadingContext);

  return (
    <Main>
      <Header />
      {loading ? (
        <ScaleLoader height={60} width={7} color={'#e6ae00'} />
      ) : (
        <></>
      )}
    </Main>
  );
}
