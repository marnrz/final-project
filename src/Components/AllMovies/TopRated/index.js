import { useEffect, useState, useRef } from "react";
import api from "../../../Utils/Api/api";
import ImageBasic from "../../../Utils/imageBase";
import { Link } from "react-router-dom";
import Style from "./style";
import { Img } from "../../../Themes";
import Slider from "../../../Utils/Slider";
import Swiper from "swiper/bundle";

export default function TopRated({}) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!swiperRef.current) {
      swiperRef.current = new Swiper(".swiper-container", {
        // Configure Swiper options here
        slidesPerView: 3, // Example configuration
        spaceBetween: 20, // Example configuration
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
      ({ id, backdrop_path, poster_path, overview, title, release_date }) => {
        return (
          <li key={id} className="relative swiper-slide">
            <Link to="/movie">
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
        );
      }
    );
  }
  return (
    <Style>
      {loading ? (
        <p>please wait...</p>
      ) : (
        <div className="top-rated">
          <div className="swiper-container">
            <ul className="list flex swiper-wrapper">
              {renderTopRatedMovie()}
            </ul>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>
      )}
    </Style>
  );
}
{
  //   /* <Link to="/movie">
  //               <div className="content absolute">
  //                 <h2 className="title">{title}</h2>
  //                 <p>{release_date}</p>
  //                 <p className="overview">{overview}</p>
  //               </div>
  //               <div className="poster-box">
  //                 <Img
  //                   className="poster"
  //                   src={`${ImageBasic.wUrl}${poster_path}`}
  //                   alt=""
  //                 />
  //               </div>
  //             </Link> */
}
