import { ScaleLoader } from 'react-spinners';

import { Card } from '../../components/Card/Card.js';
import { Header } from '../../components/Header/Header.js';
import { Main } from './Home.styles.js';

export function Home() {
  const loading = false;
  return (
    <Main>
      <Header />
      {loading ? (
        <ScaleLoader height={60} width={7} color={'#e6ae00'} />
      ) : (
        <Card />
      )}
    </Main>
  );
}
