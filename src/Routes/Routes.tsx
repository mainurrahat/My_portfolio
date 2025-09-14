import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutPage from "../Pages/AboutPage/AboutPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact></Contact> },

      { path: "/aboutPage", element: <AboutPage></AboutPage> },
    ],
  },
]);
