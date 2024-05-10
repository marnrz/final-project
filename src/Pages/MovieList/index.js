import MovieItems from "../../Components/AllMovies/MovieItems";
import MovieListByGenre from "../../Components/MovieListByGenre";
import NavSearch from "../../Components/SearchLayout/NavSearch";
import Popular from "../../Components/AllMovies/Popular";
import TopRated from "../../Components/AllMovies/TopRated";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Trending from "../../Components/AllMovies/Trending";
import UpComming from "../../Components/AllMovies/UpComming";

export default function MovieList() {
  return (
    <PrimaryLayout>
      <NavSearch />
      <TopRated />
      <MovieListByGenre />
      <Popular title="What's Popular Movies" />
      <Trending title="Trending Movies" />
      <UpComming title="UpComming Movies" />
      <MovieItems title="All MovieShows" serverApiUrl="discover/movie" />
      <MovieItems title="All TvShows" serverApiUrl="discover/tv" />
      {/* <Popular title="What's Popular TvShows" serverApiUrl="tv/popular " /> */}
    </PrimaryLayout>
  );
}
