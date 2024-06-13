import { Outlet } from 'react-router-dom';
import { LoginPage } from './pages/Login/LoginPage';
import { getCookie } from './hooks/cookie';
import { Header } from './components/common/Layout/Header';

export const Root = () => {
  const cookie = getCookie('loginToken');

  return (
    <div>
      {!cookie && <LoginPage />}
      {cookie && <Header />}
      <Outlet />
    </div>
  );
};
