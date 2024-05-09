import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import Style from "./style";
import ImageBasic from "../../../Utils/imageBase";
import { Button, Pagination } from "antd";
import Date from "../../../Utils/date";
import Slider from "../../../Utils/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import renderRateColor from "../../../Utils/CollorRating";

export default function Trending({ title, type, slide }) {
  const [moviesData, setMoviesData] = useState([]);
  const [currntPage, setCurentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApi("day");
  }, []);
  async function getApi(time_window) {
    try {
      setLoading(true);
      const response = await api.get(`trending/all/${time_window}`, {
        params: {
          language: "en - US",
          // page: `${currntPage}`,
        },
      });
      setMoviesData(response.data.results.slice(0, 9));
      console.log(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function renderFarm() {
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
              <p>{release_date}</p>
              {/* <p>
              <Date dateString={release_date} />
            </p> */}
            </Link>
          </li>
        );
      }
    );
  }
  // function onChange(page) {
  //   setCurentPage(page);
  // }
  return (
    <Style>
      <div className="trending">
        <h2 className=" title mb-3">{title}</h2>
        {<Link to={"/search"} /> ? (
          ""
        ) : (
          <span>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                getApi("day");
              }}
            >
              Day
            </Button>
            <Button
              type="default"
              size="small"
              onClick={() => {
                getApi("week");
              }}
            >
              week
            </Button>
          </span>
        )}
        {<link to={"/search"} /> ? "" : <h3>{type}</h3>}
        {loading ? (
          <p>please waite...</p>
        ) : (
          <ul className="list flex">{renderFarm()}</ul>
        )}
      </div>
    </Style>
  );
}
