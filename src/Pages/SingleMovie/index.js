import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import SingleHero from "../../Components/Layouts/SingleHero";

import NavSearch from "../../Components/SearchLayout/NavSearch";

import SingleMovieDetails from "../../Components/SinglePage";

export default function SingleMovie() {
  return (
    <PrimaryLayout>
      <NavSearch />
      <SingleHero />
      <SingleMovieDetails />
    </PrimaryLayout>
  );
}
