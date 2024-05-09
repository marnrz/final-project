import { Fragment } from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import MovieItems from "../../Components/MovieItems";
import MovieListByGenre from "../../Components/MovieListByGenre";
import NavSearch from "../../Components/SearchLayout/NavSearch";
import Popular from "../../Components/AllMovies/Popular";
import TopRated from "../../Components/AllMovies/TopRated";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Trending from "../../Components/AllMovies/Trending";

export default function MovieList() {
  return (
    <PrimaryLayout>
      <NavSearch />
      <TopRated />
      <MovieListByGenre />
      <MovieItems title="All MovieShows" serverApiUrl="discover/movie" />
      <MovieItems
        title="All TvShows"
        serverApiUrl="discover/tv"
        verviewTitle="overview"
      />
      <Popular title="What's Popular" />
      <Trending title="Trending" />
    </PrimaryLayout>
  );
}
