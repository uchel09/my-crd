import { createBrowserRouter } from "react-router-dom";

import DetailChord from "./pages/detailChord";
import HomePage from "./pages/home"
import AdminPage from "./pages/admin";


const routers = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail-chord/:id",
    element: <DetailChord />,
  },
 
]);

export default routers;
