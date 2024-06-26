import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Error404 from "../Pages/Error404";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import SearchPage from "../Pages/SearchPage";
import MovieList from "../Pages/MovieList";
import SignIn from "../Pages/SignIn";
import SingleMovieDetails from "../Pages/SingleMovie";
import SingleGenres from "../Pages/SingleGenre";
import SingleMovie from "../Pages/SingleMovie";

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
      path: "/genre/:id/:name",
      element: <SingleGenres />,
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
