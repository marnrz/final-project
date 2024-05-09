import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Trending from "../../Components/AllMovies/Trending";
import MainSearch from "../../Components/SearchLayout/MainSearch";

export default function SearchPage() {
  return (
    <PrimaryLayout position="absolute">
      <div className="search-page">
        <div className="container-full">
          <div className="search-page-container">
            <MainSearch />
            <div className="content">
              <Trending title="Trending" />
            </div>
          </div>
        </div>

        {/* <MovieItems
          title="What's Popular"
          serverApiUrl="movie/popular"
          overviewTitle="overview"
        /> */}
      </div>
    </PrimaryLayout>
  );
}
