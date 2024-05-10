import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ImageBasic from "../../Utils/imageBase";
import api from "../../Utils/Api/api";
import { Img } from "../../Themes";

export default function SingleMovieDetails() {
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState([]);
  const [subset, setSubset] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getApi();
    getSubsetApi();
  }, []);
  const getApi = async () => {
    try {
      setLoading(true);
      const response = await api.get(`movie / ${id}`);
      setMoviesData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  const getSubsetApi = async () => {
    try {
      setLoading(true);
      const response = await api.get(`movie / ${id}`, {
        params: {
          append_to_response: "credits, similar,reviews,images,recommendations",
        },
      });
      setSubset(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  function renderCredits() {
    console.log(subset);
    return subset.cast.slice(0, 9).map(({ name, profile_path, character }) => {
      return (
        <li key={id}>
          <div className="casts-box">
            <Img className="poster" src={profile_path} alt={name} />
            <div className="name">{name}</div>
            <div className="character">{character}</div>
          </div>
        </li>
      );
    });
  }
  return (
    <Fragment>
      <div className="movie-info">
        <div className=" container">
          <div className="movie-info-container">
            <div className="casts">
              <h2 className="title">Casts</h2>
              {loading ? loading : <ul className="list">{renderCredits()}</ul>}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
