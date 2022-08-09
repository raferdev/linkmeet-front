import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage/LoginPage.js';

const NotImplemented = () => {
  return <h1>Not Implemented</h1>;
};
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotImplemented />} />
    </Routes>
  );
}

export default App;
