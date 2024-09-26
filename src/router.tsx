import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Protected from "./pages/Protected";

/**
 * Notice how "main" routes and auth routes (like login or signup) are separated below.
 * This mimics how a real project may be set up: these two sets of routes would likely
 * have a different layout file, main routes would be protected while auth routes would not, etc
 */
const router = createBrowserRouter([
  // main routes
  {
    path: '/',
    element: <PrivateRoute component={Protected} />
  },

  // auth routes
  {
    children: [
      { path: 'login', element: <Login /> },
    ],
  },
])
export default router;