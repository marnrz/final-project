import { useEffect, useState } from "react";
import api, { key } from "../../Utils/api";
import ImageBasic from "../../Utils/imageBase";
import { Mstyle } from "./style";
import { Img } from "../../Themes";
import { Pagination } from "antd";

export default function MovieItems({ title, overviewTitle }) {
  const [movieDataItem, setMovieDataItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMovieApi();
  }, []);
  async function getMovieApi(page = "1") {
    try {
      setLoading(true);
      const response = await api.get(`discover/movie`, {
        params: {
          api_key: key.apiKey,
          page: page,
        },
      });
      console.log(response);
      setMovieDataItem(response.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderFarm() {
    return movieDataItem.map(
      ({ poster_path, title: MovieTitle, id, vote_average, overview }) => {
        return (
          <li className="col-2" key={id}>
            <div className="movie relative">
              <Img src={`${ImageBasic.wUrl}${poster_path}`} alt={MovieTitle} />
              <div className="movie-info flex align-item space-between">
                <h3>{MovieTitle}</h3>
                <strong
                  className={`vote-color ${
                    vote_average > 5.8 ? "green" : "red"
                  }`}
                >
                  {vote_average}
                </strong>
              </div>
              <div className="overview absolute">
                <h3>{overviewTitle}</h3>
                <p>{overview}</p>
              </div>
            </div>
          </li>
        );
      }
    );
  }
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  function onChange(page) {
    getMovieApi(page);
  }
  const App = () => (
    <Pagination
      onChange={onChange}
      total={500}
      itemRender={itemRender}
      defaultCurrent={1}
      defaultPageSize={20}
      showSizeChanger={false}
    />
  );
  return (
    <Mstyle>
      <div>
        <h2>{title}</h2>
        {loading ? (
          <p>please wait...</p>
        ) : (
          <ul className="list">{renderFarm()}</ul>
        )}
        {App()}
      </div>
    </Mstyle>
  );
}
