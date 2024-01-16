import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { LoginPage } from './pages/Login/LoginPage';
import { HomePage } from './pages/Home/HomePage';

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
    path: '/home',
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
