import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import Style from "./style";
import ImageBasic from "../../../Utils/imageBase";
import { Button, Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import renderRateColor from "../../../Utils/CollorRating";
import DateChanger from "../../../Utils/DateChanger/date";

export default function Trending({ title, type, dateString }) {
  const [moviesData, setMoviesData] = useState([]);
  // const [currntPage, setCurentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    getApi("day");
  }, []);
  async function getApi(time_window) {
    try {
      setLoading(true);
      const response = await api.get(`trending/all/${time_window}`, {
        params: {
          language: "en - US",
          // page: currntPage,
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
              <p>
                <DateChanger dateString={release_date} />
              </p>
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
        <div className="trending-btn flex align-item">
          <h2 className="title mb-3 mt-3">{title}</h2>
          {location.pathname !== "/Search" && ( // Check if the current path is not "/search"
            <div>
              <Button
                className="btn"
                defaultActiveBg="${colorPallet.primaryColor}"
                type="primary"
                size="middle"
                onClick={() => getApi("day")}
              >
                Day
              </Button>
              <Button
                className="btn"
                defaultActiveBg="${colorPallet.primaryColor}"
                type="default"
                size="middle"
                onClick={() => getApi("week")}
              >
                Week
              </Button>
            </div>
          )}
        </div>
        {location.pathname !== "/search" && ( // Check if the current path is not "/search"
          <h3>{type}</h3>
        )}
        {loading ? (
          <p>Please wait...</p>
        ) : (
          <ul className="list flex">{renderFarm()}</ul>
        )}
      </div>
    </Style>
  );
}
