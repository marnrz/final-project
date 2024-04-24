import { Fragment } from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import MovieItems from "../../Components/MovieItems";
import TvItems from "../../Components/TvItems";

export default function MovieList() {
  return (
    <Fragment>
      <SecondaryLayout>
        <MovieItems title="All Movies" overviewTitle="overview" />
        <TvItems title="All TvShows" overviewTitle="overview" />
      </SecondaryLayout>
    </Fragment>
  );
}
