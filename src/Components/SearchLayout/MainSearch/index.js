import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Style from "./style";
import api, { key, moviesapi } from "../../../Utils/api";
import { useSearchParams, createSearchParams } from "react-router-dom";

export default function MainSearch() {
  const [searchData, setSearchData] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [SearchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (SearchParams.get("q") && SearchParams.get("q") == "") {
      request(SearchParams.get("q"));
    }
  }, []);
  const request = async (value) => {
    if (value.length == 0) {
      return;
    } else if (value.length <= 2) {
      return;
    } else {
      try {
        const response = await moviesapi.get("movies", {
          params: {
            q: value,
          },
        });
        setSearchParams(createSearchParams({ q: value }));
        setSearchData(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
  };
  const onType = async (event) => {
    console.log(event);
    console.log(event.target.value);
    request(event.target.value);
  };
  function renderFarm() {
    return searchData.data.map(({ id, poster, title }) => {
      return (
        <li key={id}>
          <img src={poster} alt={title} />
          <h2 style={{ color: "#fff" }}>{title}</h2>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="hero">
        {" "}
        <div className="hero-content flex justify-center align-item relative z-2 ">
          {" "}
          <div className="col-8">
            {" "}
            <h1 className="mb-7 center">
              Millions of movies, TV shows and people to discover. Explore now.{" "}
            </h1>
            <div className=" search-box flex relative">
              <Input
                placeholder="Search for a movie, tv show, person..."
                onChange={onType}
                defaultValue={SearchParams.get("q")}
              />
              <Button className="absolute" type="primary">
                Show All
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {searchData.data.length == 0 ? (
          <h2>Nothing Found</h2>
        ) : (
          <ul>{renderFarm()}</ul>
        )}
      </div>
    </Style>
  );

  // const [searchQuery, setSearchQuery] = useState("");
  // const [data, setData] = useState([]);
  // const [currentPages, setCurrentPags] = useState(1);
  // // const [SearchParams, setSearchParams] = useSearchParams;
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   movie();
  // }, []);

  // const movie = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await api.get(
  //       searchQuery ? "search/movie" : "disvover/movie",
  //       {
  //         params: {
  //           query: searchQuery,
  //           api_key: key.apiKey,
  //         },
  //       }
  //     );
  //     setData(response.data.results.slice(0, 10));
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Something Went Wrong, Try Again", error);
  //   }
  // };

  // const onType = async (event) => {
  //   setSearchQuery(event.target.value);
  //   console.log(event.target.value);
  //   try {
  //     setLoading(true);
  //     const response = await api.get("search/movie", {
  //       params: {
  //         q: event.target.value,
  //         api_key: key.apiKey,
  //       },
  //     });
  //     setSearchQuery(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };
  // function renderFarm() {
  //   return data.map((vote_average, id) => {
  //     return (
  //       <li key={id}>
  //         <p>{vote_average}</p>
  //       </li>
  //     );
  //   });
  // }
  // return (
  //   <Style>
  //     <div className="hero">
  //       <div className="hero-content flex justify-center align-item relative z-2 ">
  //         <div className="col-8">
  //           <h1 className="mb-7 center">
  //             {" "}
  //             Millions of movies, TV shows and people to discover. Explore now.
  //           </h1>
  //           <div className=" search-box flex relative">
  // <input
  //   className="absolute inpute-box"
  //   placeholder="Search for a movie, tv show, person..."
  //   type="text"
  //   onChange={onType}
  //   value={searchQuery}
  // />
  // <button className="absolute">Show All</button>
  //           </div>
  //           <div>
  //             {data.results.length == 0 ? (
  //               <h2>Nothing Found</h2>
  //             ) : (
  //               <ul>{renderFarm()}</ul>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Style>
  // );
}
