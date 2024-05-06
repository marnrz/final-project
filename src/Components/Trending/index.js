import { useEffect, useState } from "react";
import api, { key } from "../../Utils/api";
import { Tstyle } from "./style";
import ImageBasic from "../../Utils/imageBase";
import { Button } from "antd";
import Date from "../../Utils/date";

export default function Trending({ title, type }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApi("day");
  }, []);
  async function getApi(time_window) {
    try {
      setLoading(true);
      const response = await api.get(`trending/all/${time_window}`, {
        params: {
          api_key: key.apiKey,
        },
      });
      setMoviesData(response.data.results);
      console.log(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderRateColor(vote_average) {
    let color;
    if (vote_average >= 0 && vote_average < 4) {
      color = "red";
    } else if (vote_average >= 4 && vote_average < 7) {
      color = "orange";
    } else if (vote_average >= 7 && vote_average <= 10) {
      color = "green";
    } else {
      color = "black";
    }
    return color;
  }
  function renderFarm() {
    return moviesData.map(
      ({ id, poster_path, title, release_date, vote_average }) => {
        return (
          <li className="col-2" key={id}>
            <div className="poster relative">
              <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
              <strong
                className={`vote-color ${renderRateColor(
                  vote_average
                )} absolute`}
              >
                {vote_average.toFixed(1)}
              </strong>
            </div>
            <h2 className="mt-4 mb-1">{title}</h2>
            <p>
              <Date dateString={release_date} />
            </p>
          </li>
        );
      }
    );
  }

  return (
    <Tstyle>
      <h2>{title}</h2>
      {<link to={"/search"} /> ? (
        ""
      ) : (
        <span>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              getApi("day");
            }}
          >
            Day
          </Button>
          <Button
            type="default"
            size="small"
            onClick={() => {
              getApi("week");
            }}
          >
            week
          </Button>
        </span>
      )}
      {<link to={"/search"} /> ? "" : <h3>{type}</h3>}
      {loading ? <p>please waite...</p> : <ul>{renderFarm()}</ul>}
    </Tstyle>
  );
}
