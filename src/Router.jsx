import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import UserReportPage from './pages/UserReportPage';
import LoginPage from './pages/LoginPage';
import CafePage from './pages/CafePage';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/report" element={<UserReportPage />} />
        <Route path="/cafe" element={<CafePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
