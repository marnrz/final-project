import { Fragment, useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ImageBasic from "../../../Utils/imageBase";
import { Link } from "react-router-dom";
import Style from "./style";
import { Img } from "../../../Themes";
import DateChanger from "../../../Utils/DateChanger/date";

export default function UpComming({ title, serverApiUrl, dateString }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUpCommingApi();
  }, []);

  async function getUpCommingApi() {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl, {
        params: {
          language: "en - US",
          page: "2",
        },
      });
      setMoviesData(response.data.results.slice(0, 9));
      console.log(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderUpCommingMovie() {
    if (moviesData === null || moviesData === undefined) return "";
    return moviesData.map(
      ({ id, poster_path, title, release_date, name, first_air_date }) => {
        return (
          <li className="col-2 relative" key={id}>
            <Link to={`/m/${id}`}>
              {poster_path == null ? (
                <div className="no-pic relative">
                  <span className="icon-place absolute">
                    <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                  </span>
                </div>
              ) : (
                <div className="poster relative">
                  <Img
                    src={`${ImageBasic.wUrl}${poster_path}`}
                    alt={title || name}
                  />
                  <span className="icon absolute">
                    <FontAwesomeIcon
                      className="play-icon"
                      icon={faCirclePlay}
                    />
                  </span>
                </div>
              )}
              <h2 className="mt-4 mb-1">{title || name}</h2>
              <p>
                <DateChanger dateString={release_date || first_air_date} />
              </p>
            </Link>
          </li>
        );
      }
    );
  }
  return (
    <Style>
      {loading ? (
        <p>please wait...</p>
      ) : (
        <div className="up-comming">
          <h2 className=" title mb-3">{title}</h2>
          <ul className="list flex">{renderUpCommingMovie()}</ul>
        </div>
      )}
    </Style>
  );
}
