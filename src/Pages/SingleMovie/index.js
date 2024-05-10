import { useParams } from "react-router-dom";
import Style from "./style";
import { useEffect, useState } from "react";
import api from "../../Utils/Api/api";
import { Img } from "../../Themes";
import ImageBasic from "../../Utils/imageBase";

export default function SingleMovieDetails() {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApi();
  });
  async function getApi() {
    try {
      setLoading(true);
      const response = await api.get(`movie/${id}`, {
        params: {
          append_to_response: "credits",
        },
      });
      setCredits(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderCasts() {
    return credits.cast
      .slice(0, 9)
      .map(({ name, id, profile_path, character }) => {
        return (
          <li key={id}>
            <div className="poster-box">
              <Img
                className="poster"
                src={`${ImageBasic.wUrl}${profile_path}`}
                alt={name}
              />
              <h3 className="name">{name}</h3>
              <h5 className="character">{character}</h5>
            </div>
          </li>
        );
      });
  }
  return (
    <Style>
      <div className="single-movie">
        <div className="movie-info">
          <div className=" container">
            <div className="movie-info-container"></div>
          </div>
        </div>
        <div className="casts">
          <h2 className="title">Casts</h2>
          <ul className="list">{renderCasts()}</ul>
        </div>
      </div>
    </Style>
  );
}
