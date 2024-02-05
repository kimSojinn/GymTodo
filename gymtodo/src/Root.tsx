import { Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Main } from './components/Main/Main';
import { LoginPage } from './pages/Login/LoginPage';

export const Root = () => {
  const [cookies] = useCookies(['loginToken']); // 'loginToken'은 쿠키의 이름입니다.

  return (
    <div>
      {cookies.loginToken ? (
        <div>
          <Main />
          <Outlet />
        </div>
      ) : (
        <div>
          <LoginPage />
        </div>
      )}
    </div>
  );
};
