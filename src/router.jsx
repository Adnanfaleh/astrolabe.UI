import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout.jsx';
import Home from './views/Home.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

export default router;