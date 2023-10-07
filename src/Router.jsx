import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import NavBar from './components/layout/navBar';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
