import { get, set } from "lodash";
import { useEffect, useState } from "react";
import api, { key } from "../../Utils/api";
import Gstyle from "./style";

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
          api_key: key.apiKey,
        },
      });
      setGenreData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderGenre(id) {
    var selectorGenre = [];
    if (selectorGenre.length == 0) {
      selectorGenre.push(id);
    } else {
      if (selectorGenre.includes(id)) {
        selectorGenre.map(({ id: selectId, index }) => {
          if ((selectId = id)) {
            selectorGenre.splice(index, 1);
          }
        });
      } else {
        selectorGenre.push(id);
      }
    }
    console.log(selectorGenre);
  }
  function renderFarm() {
    return genreData.genres.map(({ id, name }) => {
      return (
        <li key={id}>
          <div className="tag" onClick={renderGenre}>
            {name}
            <div></div>
          </div>
        </li>
      );
    });
  }
  return (
    <Gstyle>
      {loading ? (
        "please wait..."
      ) : (
        <ul className="flex wrap justify-center align-item ">{renderFarm()}</ul>
      )}
    </Gstyle>
  );
}
