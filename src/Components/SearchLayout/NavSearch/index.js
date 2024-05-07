import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import Hstyle from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import api, { key } from "../../../Utils/api";
import ImageBasic from "../../../Utils/imageBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faHeadphones,
  faUsersRectangle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function NavSearch() {
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
  const menuItems = [
    {
      title: "Contact",
      icon: faHeadphones,
      link: "/contact-us",
    },
    {
      title: "Artists",
      icon: faUsersRectangle,
      link: "#",
    },
    {
      title: "Series",
      icon: faFilm,
      link: "#",
    },
    {
      title: "Movies",
      icon: faVideo,
      link: "#",
    },
  ];
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
  function renderMenuItems() {
    return menuItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link}>
            <span className="icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <h5>{item.title}</h5>
          </Link>
        </li>
      );
    });
  }
  return (
    <Hstyle>
      <div className="navBar relative z-2">
        <div className="wrapper">
          <div className="nav-wrapper absolute flex">
            <div className="menu">
              <ul className="flex">{renderMenuItems()}</ul>
            </div>
            <Input
              className="input"
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={onType}
            />
          </div>
        </div>
        <ul>{renderFarm()}</ul>
      </div>
    </Hstyle>
  );
}
