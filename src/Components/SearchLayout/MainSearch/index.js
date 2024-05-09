import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import { Button, Input } from "antd";
import ImageBasic from "../../../Utils/imageBase";
import Style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function MainSearch() {
  const [moviesData, setMoviesData] = useState([]);
  const [showMovie, setShowMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getApi();
    if (searchParams.get("query") && searchParams.get("query") == "") {
      request(searchParams.get("query"));
    }
    request();
  }, []);

  const getApi = async () => {
    const endSearch = searchQuery ? api.get("/discover/movie") : "";
    const response = await api.get("/discover/movie", {
      params: {
        query: searchQuery,
      },
    });
    setShowMovie(response.data.results);
  };

  const request = async (value) => {
    setSearchQuery(value);

    try {
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
    } catch (e) {
      console.log("error");
    }
  };

  const onType = async (event) => {
    request(event.target.value);
  };

  function renderSearch() {
    if (moviesData === null || moviesData === undefined) return "";
    if (moviesData.length === 0)
      return (
        <div className="no-result">
          <h1 className="text-no-result">
            {" "}
            No results found for <b>{`${searchQuery}`}</b>
          </h1>
        </div>
      );
    return moviesData.map(({ poster_path, title, id }) => {
      return (
        <li key={id}>
          <Link to="/movie">
            <div className="poster-shadow relative">
              <img
                className="poster "
                src={`${ImageBasic.wUrl}${poster_path}`}
                style={{ width: "100px" }}
                alt=""
              />
              <div className="shadow absolute">
                <FontAwesomeIcon className="icon" icon={faPlay} />
              </div>
            </div>
            <h4 style={{ color: "white" }}>{title}</h4>
          </Link>
        </li>
      );
    });
  }

  return (
    <Style>
      <div className="hero">
        <div className="hero-content flex justify-center align-item relative z-2 ">
          <div className="col-8">
            {" "}
            <h1 className="mb-7 center">
              Millions of movies, TV shows and people to discover. Explore now.{" "}
            </h1>
            <div className=" search-box flex relative">
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
        {searchParams.get("query") === 0 ? (
          ""
        ) : (
          <h2 className="text-result mb-3">
            {`results for ${searchParams.get("query")}`}{" "}
          </h2>
        )}
        <ul className=" result-list flex wrap align-item justify-between">
          {renderSearch()}
        </ul>
      </div>
    </Style>
  );
}
