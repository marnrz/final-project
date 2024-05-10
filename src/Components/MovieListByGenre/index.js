import { get, set } from "lodash";
import { useEffect, useState } from "react";

import Style from "./style";
import api from "../../Utils/Api/api";
import { Link } from "react-router-dom";

export default function MovieListByGenre() {
  const [genreData, setGenreData] = useState({ genres: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenresApi();
  }, []);

  async function getGenresApi() {
    setLoading(true);
    try {
      const response = await api.get(`genre/movie/list`, {
        params: {
          language: "en-US",
        },
      });
      setGenreData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  return (
    <Style>
      {loading ? (
        "please wait..."
      ) : (
        <ul className="flex wrap justify-center align-item">
          {genreData.genres.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/genre/${id}/${name}`} className="tag">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Style>
  );
}
