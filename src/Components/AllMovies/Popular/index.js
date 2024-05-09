import { Fragment, useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import renderRateColor from "../../../Utils/CollorRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ImageBasic from "../../../Utils/imageBase";
import { Link } from "react-router-dom";
import Style from "./style";

export default function Popular({ title }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPopularApi();
  }, []);

  async function getPopularApi() {
    try {
      setLoading(true);
      const response = await api.get("movie/popular", {
        params: {
          language: "en - US",
          page: "3",
        },
      });
      setMoviesData(response.data.results.slice(0, 9));
      console.log(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderPopularMovie() {
    if (moviesData === null || moviesData === undefined) return "";
    return moviesData.map(
      ({ id, poster_path, title, release_date, vote_average }) => {
        return (
          <li className="col-2 relative" key={id}>
            <Link to="/movie">
              <div className="poster relative">
                <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
                <strong
                  className={`vote-color ${renderRateColor(
                    vote_average
                  )} absolute`}
                >
                  {vote_average.toFixed(1)}
                </strong>
                <span className="icon absolute">
                  <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />
                </span>
              </div>
              <h2 className="mt-4 mb-1">{title}</h2>
            </Link>
          </li>
        );
      }
    );
  }
  return (
    <Style>
      <div className="popular">
        <h2 className=" title mb-3">{title}</h2>
        <ul className="list flex">{renderPopularMovie()}</ul>
      </div>
    </Style>
  );
}
