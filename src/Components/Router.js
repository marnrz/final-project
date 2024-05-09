import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Error404 from "../Pages/Error404";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import SearchPage from "../Pages/SearchPage";
import MovieList from "../Pages/MovieList";
import SingleMovie from "../Pages/SingleMovie";
import SignIn from "../Pages/SignIn";
import SinglePart from "./SinglePart";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/sign-up",
      element: <SignIn />,
    },
    {
      path: "/movie",
      element: <MovieList />,
    },
    {
      path: "/m/:id",
      element: <SingleMovie />,
    },
    {
      path: "/s/:id",
      element: <SingleMovie />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={router} />;
}
