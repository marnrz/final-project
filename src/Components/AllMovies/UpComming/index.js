import { Fragment, useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ImageBasic from "../../../Utils/imageBase";
import { Link } from "react-router-dom";
import Style from "./style";
import { Img } from "../../../Themes";

export default function UpComming({ title }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUpCommingApi();
  }, []);

  async function getUpCommingApi() {
    try {
      setLoading(true);
      const response = await api.get("movie/upcoming", {
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
    return moviesData.map(({ id, poster_path, title, release_date }) => {
      return (
        <li className="col-2 relative" key={id}>
          <Link to="/movie">
            <div className="poster relative">
              <Img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />

              <span className="icon absolute">
                <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />
              </span>
            </div>
            <h2 className="mt-4 mb-1">{title}</h2>
          </Link>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="up-comming">
        <h2 className=" title mb-3">{title}</h2>
        <ul className="list flex">{renderUpCommingMovie()}</ul>
      </div>
    </Style>
  );
}
