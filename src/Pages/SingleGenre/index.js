import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieListByGenre from "../../Components/MovieListByGenre";
import NavSearch from "../../Components/SearchLayout/NavSearch";
import Style from "./style";
import { useEffect, useState } from "react";
import api from "../../Utils/Api/api";
import ImageBasic from "../../Utils/imageBase";
import { genPresetColor } from "antd/es/theme/internal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function SingleGenres() {
  const { id, name } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    moviesByGenre();
  }, [id]);
  async function moviesByGenre() {
    try {
      setLoading(true);

      const response = await api.get("/discover/movie", {
        params: {
          with_genres: id, // Use the genre ID obtained from the URL params
        },
      });
      console.log("Response:", response.data);
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
      setLoading(false);
    }
  } // Update the dependency to re-fetch movies when genre ID changesbi

  return (
    <PrimaryLayout>
      <NavSearch />
      <Style>
        <MovieListByGenre />
        <div className="genres-box">
          <div className="container-full">
            <div className="genres-container">
              <h3>{name}</h3>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul className="list flex wrap">
                  {/* Render the list of movies */}
                  {movies.map(({ id, poster_path, title }) => (
                    <li key={id}>
                      <Link to={`/m/${id}`}>
                        {poster_path == null ? (
                          <div className="no-pic relative">
                            <span className="icon-place absolute">
                              <FontAwesomeIcon
                                className="icon"
                                icon={faCameraRetro}
                              />
                            </span>
                          </div>
                        ) : (
                          <div className="poster-box relative">
                            <img
                              className="poster"
                              src={`${ImageBasic.wUrl}${poster_path}`}
                              alt={title}
                            />
                            <span className="icon absolute">
                              <FontAwesomeIcon
                                className="play-icon"
                                icon={faCirclePlay}
                              />
                            </span>
                          </div>
                        )}
                        <h3 className=" title mt-2">{title}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
