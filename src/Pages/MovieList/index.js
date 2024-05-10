import MovieItems from "../../Components/AllMovies/MovieItems";
import MovieListByGenre from "../../Components/MovieListByGenre";
import NavSearch from "../../Components/SearchLayout/NavSearch";
import TopRated from "../../Components/AllMovies/TopRated";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import UpComming from "../../Components/AllMovies/UpComming";
import Trending from "../../Components/AllMovies/Trending";

export default function MovieList() {
  return (
    <PrimaryLayout>
      <NavSearch />
      <TopRated />
      <MovieListByGenre />
      <MovieItems title="What's Popular Movies" serverApiUrl="movie/popular" />
      <Trending title="Trending Movies" />
      <UpComming title="UpComming Movies" serverApiUrl="movie/upcoming" />
      <MovieItems title="All MovieShows" serverApiUrl="discover/movie" />
      <MovieItems title="All TvShows" serverApiUrl="discover/tv" />
      <MovieItems title="What's Popular TvShows" serverApiUrl="tv/popular" />
      <UpComming title="UpComming TvShows" serverApiUrl="tv/on_the_air" />
      <MovieItems title="Now Playing TvShows" serverApiUrl="tv/airing_today" />
    </PrimaryLayout>
  );
}
