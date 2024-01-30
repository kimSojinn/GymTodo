import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { LoginPage } from './pages/Login/LoginPage';
import { MainPage } from './pages/Main/MainPage';
import { ListsPage } from './pages/Lists/ListsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Not Found😿</p>,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/list',
    element: <ListsPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
