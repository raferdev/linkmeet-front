import { Card } from '../../components/Card/Card.js';
import { Header } from '../../components/Header/Header.js';
import { Main } from './Home.styles.js';

export function Home() {
  return (
    <Main>
      <Header />
      <Card />
    </Main>
  );
}
