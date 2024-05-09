import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ImageBasic from "../../Utils/imageBase";
import api from "../../Utils/Api/api";

export default function SinglePart({ ApiUrl }) {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getApi();
  });
  const getApi = async () => {
    try {
      setLoading(true);
      const response = await api.get(`movie / ${id}`, {
        params: {
          append_to_response: "details, images",
        },
      });
      setMovieData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  const { poster_path, title, production_countries, overview } = movieData;
  return (
    <Fragment>
      <div className="movie-info">
        <div className=" container">
          <div className="movie-info-container">
            <div className="poster">
              <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
