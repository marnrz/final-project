import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import { useParams } from "react-router-dom";
import ImageBasic from "../../../Utils/imageBase";
import Style from "./style";
import { Img } from "../../../Themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlay } from "@fortawesome/free-solid-svg-icons";
import { over } from "lodash";
import DateChanger from "../../../Utils/DateChanger/date";

export default function SingleHero() {
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDetailsApi();
  }, [id]);
  async function getDetailsApi() {
    try {
      const response = await api.get(`movie/${id}`, {
        params: {
          language: "en-US",
        },
      });
      console.log(response);
      setMoviesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }
  const {
    backdrop_path,
    poster_path,
    genres,
    name,
    overview,
    production_companies,
    production_countries,
    release_date,
    title,
    runtime,
    adult,
  } = moviesData;
  return (
    <Style>
      <div
        className="hero relative"
        style={{ backgroundImage: `url(${ImageBasic.wUrl}${backdrop_path})` }}
      >
        <div className="container-full">
          <div className="hero-container-full absolute">
            <div className="  poster-box mt-4">
              <Img src={`${ImageBasic.wUrl}${poster_path}`} alt="Image" />
            </div>
            <div className="movie-informations">
              <h2 className="title mb-3 mt-3">{title}</h2>
              <span className="movie-meta flex">
                <DateChanger dateString={release_date} />
                {adult == false ? <p>R</p> : ""}
              </span>
              {/* <p className="genres">{genres.name}</p> */}
              {/* <p>{production_countries.name}</p> */}
              <span className="icon flex align-item mt-3 mb-3">
                <a className="icon-play flex align-item" href="#">
                  <FontAwesomeIcon className="play" icon={faPlay} />
                  <p style={{ color: "#000" }}>play</p>
                </a>
                <FontAwesomeIcon className="bookmark" icon={faBookmark} />
              </span>
              <p className="overview mb-3">{overview}</p>
              <div className="production">
                <span className="Crew">
                  <p>Directed By:</p>
                  <h4></h4>
                </span>
                <span className="Crew">
                  <p>Written By:</p>
                  <h4></h4>
                </span>
                <span className="Crew">
                  <p>Studio</p>
                  <h4></h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
