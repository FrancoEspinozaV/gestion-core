import { createBrowserRouter } from "react-router-dom";
import { route } from "./path";
import { Layout } from "../page/Layout";
import { Home } from "../page/Home";
export const router = createBrowserRouter([
  {
    path: route.root,
    element: <Layout />,
  },
  {
    path: route.home,
    element: <Home />,
  },
  {
    path: route.game,
    element: <Layout />,
  }
]);