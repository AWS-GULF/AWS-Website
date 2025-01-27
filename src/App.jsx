import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Applayout from "./pages/Applayout";
import About from "./pages/About";
import QualityAssurance from "./pages/QualityAssurance";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/qulityassurance",
        element: <QualityAssurance />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
