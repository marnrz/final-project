import { useEffect, useState } from "react";
import ImageBasic from "../../../Utils/imageBase";
import Style from "./style";
import { Img } from "../../../Themes";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import api from "../../../Utils/Api/api";
import renderRateColor from "../../../Utils/CollorRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function MovieItems({ title, serverApiUrl }) {
  const [moviesDataItem, setMoviesDataItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMovieApi();
  }, []);
  async function getMovieApi(page = "1") {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl, {
        params: {
          page: page,
        },
      });
      console.log(response);
      setMoviesDataItem(response.data.results.slice(0, 9));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderMovieItems() {
    if (moviesDataItem === null || moviesDataItem === undefined) return "";
    return moviesDataItem.map(
      ({ id, poster_path, title, release_date, vote_average }) => {
        return (
          <li className="col-2 relative" key={id}>
            <Link>
              <div className="poster relative">
                <Img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
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
            </Link>
          </li>
        );
      }
    );
  }

  // const itemRender = (_, type, originalElement) => {
  //   if (type === "prev") {
  //     return <a>Previous</a>;
  //   }
  //   if (type === "next") {
  //     return <a>Next</a>;
  //   }
  //   return originalElement;
  // };
  // function onChange(page) {
  //   getMovieApi(page);
  // }
  // const App = () => (
  //   <Pagination
  //     onChange={onChange}
  //     total={500}
  //     itemRender={itemRender}
  //     defaultCurrent={1}
  //     defaultPageSize={20}
  //     showSizeChanger={false}
  //   />
  // );
  return (
    <Style>
      <div className="movie-item">
        <h2 className="title mb-3">{title}</h2>
        {loading ? (
          <p>please wait...</p>
        ) : (
          <ul className="list flex">{renderMovieItems()}</ul>
        )}
        {/* {App()} */}
      </div>
    </Style>
  );
}
