import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Trending from "../../Components/Trending";
import MovieItems from "../../Components/MovieItems";
import MainSearch from "../../Components/SearchLayout/MainSearch";
// import { useSearchParams, createSearchParams } from "react-router-dom";

export default function SearchPage() {
  return (
    <PrimaryLayout position="absolute">
      <MainSearch />
      <div className="content">
        <Trending title="Trending" type=" movies" />
        {/* <MovieItems
          title="What's Popular"
          serverApiUrl="movie/popular"
          overviewTitle="overview"
        /> */}
      </div>
    </PrimaryLayout>
  );
}
