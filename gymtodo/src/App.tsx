import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Root } from './Root';
import { Login } from './components/common/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Not Found😿</p>,
    children: [{ index: true, element: <Login /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
