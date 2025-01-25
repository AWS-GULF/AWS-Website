import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Applayout from "./pages/Applayout";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
