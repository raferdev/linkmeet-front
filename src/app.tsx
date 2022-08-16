import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Private } from './components/Private.js';
import { LoadingContext } from './contexts/loadingContext.js';
import { UserContext } from './contexts/userContext.js';
import { loadingState, userState } from './hooks/hooksStates.js';
import { CardPage } from './pages/Card/CardPage.js';
import { NewCardPage } from './pages/NewCard/NewCardPage.js';
import { Search } from './pages/Search/Search.js';
import { SignInPage } from './pages/SignInPage/SignInPage.js';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.js';
import { LoadingType, UserLog } from './types/contextsTypes.js';

const NotImplemented = () => {
  return <h1>Not Implemented</h1>;
};
function App() {
  const [user, setUser] = useState<UserLog>(userState);
  const [loading, setLoading] = useState<LoadingType>(loadingState);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/:profile/cards"
            element={
              <Private>
                <CardPage />
              </Private>
            }
          />
          <Route
            path="/:profile/cards/new"
            element={
              <Private>
                <NewCardPage />
              </Private>
            }
          />
          <Route path="*" element={<NotImplemented />} />
        </Routes>
      </UserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
