import { useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieListByGenre from "../../Components/MovieListByGenre";
import NavSearch from "../../Components/SearchLayout/NavSearch";
import Style from "./style";
import { useEffect, useState } from "react";
import api from "../../Utils/Api/api";
import ImageBasic from "../../Utils/imageBase";

export default function SingleGenres() {
  const { name } = useParams();
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenresApi();
  }, [name]);
  async function getGenresApi() {
    try {
      setLoading(true);
      const response = await api.get("/discover/movie", {
        params: {
          with_genres: [genres],
        },
      });
      setGenres(response.data.genres.results.genre_ids);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  function renderGenreMovies() {
    return genres.map(({ id, poster_path, title }) => {
      return (
        <li key={id}>
          <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
          <h3 className="mt-2">{title}</h3>
        </li>
      );
    });
  }
  return (
    <PrimaryLayout>
      <NavSearch />
      <Style>
        <MovieListByGenre />
        <div>
          <h3>title</h3>
          <ul className="list flex">{renderGenreMovies()}</ul>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
