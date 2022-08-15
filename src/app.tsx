import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoadingContext } from './contexts/loadingContext.js';
import { UserContext } from './contexts/userContext.js';
import { loadingState, userState } from './hooks/hooksStates.js';
import { Home } from './pages/Home/Home.js';
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
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotImplemented />} />
        </Routes>
      </UserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
