import { Fragment } from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import MovieItems from "../../Components/MovieItems";
import MovieListByGenre from "../../Components/MovieListByGenre";
import NavSearch from "../../Components/SearchLayout/NavSearch";

export default function MovieList() {
  return (
    <Fragment>
      <SecondaryLayout>
        <NavSearch />
        <MovieListByGenre />
        <MovieItems
          title="All Movies"
          serverApiUrl="discover/movie"
          overviewTitle="overview"
        />
        <MovieItems
          title="All TvShows"
          serverApiUrl="discover/tv"
          overviewTitle="overview"
        />
      </SecondaryLayout>
    </Fragment>
  );
}
