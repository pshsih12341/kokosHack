import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../layouts';
import GamePage from '../pages/gamesPage/gamePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"plays",
        element:<GamePage />
      }
    ],
  },
]);

export default router;
