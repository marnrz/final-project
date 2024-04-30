import { Input } from "antd";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Style from "./style";
import { useState } from "react";
import api, { key } from "../../Utils/api";
import { SearchOutlined } from "@ant-design/icons";
import Trending from "../../Components/Trending";
import MovieItems from "../../Components/MovieItems";
// import { useSearchParams, createSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [data, setData] = useState([]);
  // const [SearchParams, setSearchParams] = useSearchParams;
  const [loading, setLoading] = useState(false);
  const onType = async (event) => {
    console.log(event.target.value);
    try {
      setLoading(true);
      const response = await api.get("search/movie", {
        params: {
          q: event.target.value,
          api_key: key.apiKey,
        },
      });
      // setSearchParams(createSearchParams({
      //     q: event.target.value,
      // }))
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  // function renderFarm() {
  //   return data.results.map(() => {
  //     return <li></li>;
  //   });
  // }
  return (
    <Style>
      <PrimaryLayout position="absolute">
        <div className="hero">
          <div className="hero-content flex justify-center align-item relative z-2 ">
            <div className="col-8">
              <h1 className="mb-7 center">
                {" "}
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h1>
              <div className=" search-box flex relative">
                <input
                  placeholder="Search for a movie, tv show, person..."
                  type="text"
                  onChange={onType}
                />
                {/* <Input
                  placeholder="Search for a movie, tv show, person......"
                  size="large"
                  onChange={onType}
                  prefix={<SearchOutlined />}
                /> */}
                <button>Show All</button>
              </div>
              {/* <ul>{renderFarm()}</ul> */}
            </div>
          </div>
        </div>
        <div className="content">
          <Trending title="Trending" type=" movies" />
          <MovieItems
            title="What's Popular"
            serverApiUrl="movie/popular"
            overviewTitle="overview"
          />
          {/* <Trending  type=" TV shows"/>
                <Trending  type=" people"/> */}
        </div>
      </PrimaryLayout>
    </Style>
  );
}
