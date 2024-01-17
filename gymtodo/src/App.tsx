import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { LoginPage } from './pages/Login/LoginPage';
import { MainContentPage } from './pages/Home/MainContentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Not Found😿</p>,
    // children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/main',
    element: <MainContentPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
