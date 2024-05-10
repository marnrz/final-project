import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import { Button, Input } from "antd";
import ImageBasic from "../../../Utils/imageBase";
import Style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faCirclePlay,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import DateChanger from "../../../Utils/DateChanger/date";
import renderRateColor from "../../../Utils/CollorRating";

export default function MainSearch() {
  const [moviesData, setMoviesData] = useState([]);
  const [showMovie, setShowMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query");
  useEffect(() => {
    getApi();

    if (queryParam !== null && queryParam !== "") {
      request(queryParam);
    }
  }, []);

  const getApi = async () => {
    if (searchQuery !== "") {
      const response = await api.get("/discover/movie", {
        params: {
          query: searchQuery,
        },
      });
      setShowMovie(response.data.results);
    }
  };

  const request = async (value) => {
    setSearchQuery(value);
    try {
      setLoading(true);
      const request = await api.get("/search/movie", {
        params: {
          query: value,
        },
      });
      setSearchParams(
        createSearchParams({
          query: value,
        })
      );
      setMoviesData(request.data.results.slice(0, 10));
      setLoading(false);
    } catch (e) {
      console.log("error");
      setLoading(false);
    }
  };

  const onType = async (event) => {
    request(event.target.value);
  };

  function renderSearch() {
    if (moviesData.length === 0) {
      if (searchQuery !== "") {
        return (
          <div className="no-result">
            <h1 className="text-no-result">
              {" "}
              No results found for <b>{`${searchQuery}`}</b>
            </h1>
          </div>
        );
      } else {
        return null;
      }
    }
    return moviesData.map(
      ({ id, poster_path, title, release_date, vote_average }) => {
        return (
          <li className="col-2 relative" key={id}>
            <Link to="/movie">
              {poster_path == null ? (
                <div className="no-pic">
                  <span className="icon-place">
                    <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                  </span>
                </div>
              ) : (
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
                    <FontAwesomeIcon
                      className="play-icon"
                      icon={faCirclePlay}
                    />
                  </span>
                </div>
              )}
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

  return (
    <Style>
      <div className="hero">
        <div className="hero-content flex justify-center align-item relative z-2 ">
          <div className="col-8">
            <h1 className="mb-7 center">
              Millions of movies, TV shows and people to discover. Explore now.
            </h1>
            <div className="search-box flex relative">
              <Input
                placeholder="Search for a movie, tv show, person..."
                onChange={onType}
              />
              <Button className="absolute" type="primary" onClick={onType}>
                Show All
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="result">
        {searchParams.get("query") && searchParams.get("query") !== "" && (
          <h2 className="text-result mb-3">
            results for {searchParams.get("query")}{" "}
          </h2>
        )}
        <ul className="result-list flex">{renderSearch()}</ul>
      </div>
    </Style>
  );
}
