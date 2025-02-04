import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
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
import HeroMarkting from "./pages/HeroMarkting";
import MainMarkting from "./pages/MainMarkting";
import AboutMarkting from "./pages/AboutMarkting";
import SeeourBlogMarkting from "./pages/SeeourBlogMarkting";
import SliderMarkting from "./pages/SLiderMarkting";
import MaspertsProjectMarking from "./pages/MaspertsProjectMarking";
import ChooseMarkting from "./pages/ChooseMarkting";
import LayoutMarkting from "./pages/LayoutMarkting";
import HomeMarkting from "./pages/HomeMarkting";

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
  
    {path:"layoutMarkting",element:<LayoutMarkting/>,children:[
    {index:true ,element:<HomeMarkting/>},
  {path:"heroMarkting" ,element:<HeroMarkting/>},
{path:"aboutMarkting" ,element:<AboutMarkting/>},
{path:"mainMarkting" ,element:<MainMarkting/>},
{path:"seeourBlogMarkting" ,element:<SeeourBlogMarkting/>},
{path:"chooseMarkting" ,element:<ChooseMarkting/>},
{path:"sliderMarkting" ,element:<SliderMarkting/>},
{path:"maspertsProjectMarking" ,element:<MaspertsProjectMarking/>},

]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
