import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Applayout from "./pages/Applayout";
import About from "./pages/About";
import QualityAssurance from "./pages/QualityAssurance";
import MobileDevelopment from "./pages/MobileDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import UiUx from "./pages/UiUx";
import Staff from "./pages/Staff";
import ITandHardware from "./pages/ITandHardware";
import Work from "./pages/Work";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },

      {
        path: "/qualityassurance",
        element: <QualityAssurance />,
      },
      {
        path: "/mobiledevelopment",
        element: <MobileDevelopment />,
      },
      {
        path: "/webdevelopment",
        element: <WebDevelopment />,
      },
      {
        path: "/uiuxdesign",
        element: <UiUx />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/itandhardware",
        element: <ITandHardware />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
    ],
  },
  {
    path: "/careers/:id",
    element: <JobDetails />,
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
