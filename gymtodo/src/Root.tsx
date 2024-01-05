import { Outlet } from 'react-router-dom';
import { Home } from './pages/Home';

export const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
