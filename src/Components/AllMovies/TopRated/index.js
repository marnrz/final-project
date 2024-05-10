import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import ImageBasic from "../../../Utils/imageBase";
import { Link } from "react-router-dom";
import Style from "./style";
import { Img } from "../../../Themes";

export default function TopRated() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTopRatedApi();
  }, []);
  async function getTopRatedApi() {
    try {
      setLoading(true);
      const response = await api.get("movie/top_rated", {
        params: {
          language: "en - US",
          page: "1",
        },
      });
      setMoviesData(response.data.results.slice(0, 6));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderTopRatedMovie() {
    return moviesData.map(
      ({ id, backdrop_path, poster_path, overview, title, release_date }) => {
        return (
          <li key={id} className="relative">
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
      <div className="top-rated">
        <ul className="list flex">{renderTopRatedMovie()}</ul>
      </div>
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
