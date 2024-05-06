import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Trending from "../../Components/Trending";
import MainSearch from "../../Components/SearchLayout/Search";

export default function SearchPage() {
  return (
    <PrimaryLayout position="absolute">
      <MainSearch />
      <div className="content">
        {/* <Trending title="Trending" /> */}
        {/* <MovieItems
          title="What's Popular"
          serverApiUrl="movie/popular"
          overviewTitle="overview"
        /> */}
      </div>
    </PrimaryLayout>
  );
}
