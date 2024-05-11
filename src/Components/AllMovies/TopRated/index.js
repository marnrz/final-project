import { useEffect, useState, useRef } from "react";
import api from "../../../Utils/Api/api";
import ImageBasic from "../../../Utils/imageBase";
import { Link } from "react-router-dom";
import Style from "./style";
import { Img } from "../../../Themes";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import { parallax, navigation, pagination } from "swiper/modules";

export default function TopRated() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) {
      swiperRef.current = new Swiper(".swiper-container", {
        // Configure Swiper options here
        slidesPerView: 6, // Example configuration
        spaceBetween: 20, // Example configuration
        autoplay: true,
        // speed: 600,
        // parallax: true,
        // pagination: {
        //   clickable: true,
        // },
        // navigation: true,
        // modules: [parallax, pagination, navigation],
      });
    }
  }, []);
  useEffect(() => {
    getTopRatedApi();
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update(); // Update Swiper instance when moviesData changes
    }
  }, [moviesData]);

  async function getTopRatedApi() {
    try {
      setLoading(true);
      const response = await api.get("movie/top_rated", {
        params: {
          language: "en-US",
          page: "1",
        },
      });
      setMoviesData(response.data.results.slice(0, 20));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function renderTopRatedMovie() {
    return moviesData.map(
      ({ id, poster_path, overview, title, release_date }) => (
        <li key={id} className="relative swiper-slide">
          <Link to={`/m/${id}`}>
            <div className="content absolute">
              <h2 className="title">{title}</h2>
              <p>{release_date}</p>
              <p className="overview">{overview}</p>
            </div>
            <div className="poster-box">
              <Img
                className="poster"
                src={`${ImageBasic.wUrl}${poster_path}`}
                alt=""
              />
            </div>
          </Link>
        </li>
      )
    );
  }

  return (
    <Style>
      {loading ? (
        <p>please wait...</p>
      ) : (
        <div className="top-rated">
          <ul className="list flex swiper-wrapper">{renderTopRatedMovie()}</ul>
          <div className="swiper-scrollbar"></div>
        </div>
      )}
    </Style>
  );
}
