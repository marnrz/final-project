import { useEffect, useState } from "react";
import api, { key } from "../../../Utils/api";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { Button, Input } from "antd";
import ImageBasic from "../../../Utils/imageBase";
import Style from "./style";

export default function MainSearch() {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getApi();
    if (searchParams.get("query")) {
      request(searchParams.get("query"));
    }
  }, []);
  const getApi = async () => {
    const response = await api.get("/discover/movie", {
      params: {
        query: searchQuery,
        api_key: key.apiKey,
      },
    });
    setMovieData(response.data.results);
  };
  const request = async (value) => {
    setSearchQuery(value);
    try {
      const request = await api.get("/search/movie", {
        params: {
          query: value,
          api_key: key.apiKey,
        },
      });
      setSearchParams(
        createSearchParams({
          query: value,
        })
      );
      setMovieData(request.data.results);
    } catch (e) {
      console.log("error");
    }
  };
  const onType = async (event) => {
    request(event.target.value);
  };
  function renderFarm() {
    return movieData.map(({ poster_path, title, id }) => {
      return (
        <li key={id}>
          <img
            src={`${ImageBasic.wUrl}${poster_path}`}
            style={{ width: "100px" }}
            alt=""
          />
          <h4 style={{ color: "white" }}>{title}</h4>
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
              <Button className="absolute" type="primary">
                Show All
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ul>{renderFarm()}</ul>
    </Style>
  );
}
