import { ScaleLoader } from 'react-spinners';

import { Header } from '../../components/Header/Header.js';
import { Main } from './Search.styles.js';

export function Search() {
  const loading = false;
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
