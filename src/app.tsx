import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { UserContext } from './contexts/userContext.js';
import { LoginPage } from './pages/LoginPage/LoginPage.js';
import { UserLog } from './types/userTypes.js';

const NotImplemented = () => {
  return <h1>Not Implemented</h1>;
};
function App() {
  const userState = {
    alias: null,
    name: null,
    email: null,
    token: null,
  };
  const [user, setUser] = useState<UserLog>(userState);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotImplemented />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
