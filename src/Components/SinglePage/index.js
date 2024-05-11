import { Link, useParams } from "react-router-dom";
import Style from "./style";
import { useEffect, useState } from "react";
import api from "../../Utils/Api/api";
import { Img } from "../../Themes";
import ImageBasic from "../../Utils/imageBase";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import NavSearch from "../../Components/SearchLayout/NavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function SingleMovieDetails({ serverUrlApi }) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [images, setImages] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMoviesApi();
    getSeriesApi();
  }, [id]); // Run effect only when id changes

  async function getMoviesApi() {
    try {
      setLoading(true);
      const response = await api.get(`movie/${id}`, {
        params: {
          append_to_response: "credits,similar,recommendations,images",
        },
      });
      console.log(response);
      setMovie(response.data.movie);
      setCredits(response.data.credits.cast.slice(0, 14));
      setImages(response.data.images.backdrops.slice(0, 14));
      setSimilar(response.data.similar.results.slice(0, 9));
      setRecommendations(response.data.recommendations.results.slice(0, 9));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }
  async function getSeriesApi() {
    try {
      setLoading(true);
      const response = await api.get(`tv/${id}`, {
        params: {
          append_to_response: "credits,similar,recommendations,images",
        },
      });
      console.log(response);
      setMovie(response.data.movie);
      setCredits(response.data.credits.cast.slice(0, 14));
      setImages(response.data.images.backdrops.slice(0, 14));
      setSimilar(response.data.similar.results.slice(0, 9));
      setRecommendations(response.data.recommendations.results.slice(0, 9));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }

  // function renders
  function renderMovie() {
    if (movie === null || movie === undefined) return "";
    return movie.map(({ name, id, backdrop_path, poster_path }) => {
      <li key={id}>
        <img src={backdrop_path} />
      </li>;
    });
  }
  function renderCasts() {
    if (credits === null || credits === undefined) return "";
    return credits.map(({ name, id, profile_path, character }) => {
      return (
        <li key={id}>
          <div className="cast-box ">
            <div className="poster-box">
              <img
                className="poster"
                src={`${ImageBasic.wUrl}${profile_path}`}
                alt={name}
              />
            </div>
            <h3 className="name mt-4 mb-1">{name}</h3>
            <p className="character">{character}</p>
          </div>
        </li>
      );
    });
  }
  const renderImages = function () {
    if (images === null || images === undefined) return;
    return images.map(({ file_path, id: imageId }) => {
      return (
        <li key={imageId}>
          <div className="gallery">
            <Img
              alt="gallery"
              className="poster"
              src={`${ImageBasic.wUrl}${file_path}`}
            />
          </div>
        </li>
      );
    });
  };

  function renderSimilar() {
    if (similar === null || similar === undefined) return "";
    return similar.map(({ id: movieId, title, poster_path, name }) => {
      return (
        <li key={movieId}>
          <Link to={`/m/${id}`}>
            {poster_path == null ? (
              <div className="no-pic relative">
                <span className="icon-place absolute">
                  <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                </span>
              </div>
            ) : (
              <div className="movie-box relative">
                <Img
                  className="poster"
                  src={`${ImageBasic.wUrl}${poster_path}`}
                  alt={title || name}
                />
                <span className="icon absolute">
                  <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />
                </span>
              </div>
            )}
            <h3 className="name mt-2">{title || name}</h3>
          </Link>
        </li>
      );
    });
  }
  function renderRecommendations() {
    if (recommendations === null || recommendations === undefined) return "";
    return recommendations.map(({ id: movieId, title, poster_path, name }) => {
      return (
        <li key={movieId}>
          <Link to={`/m/${id}`}>
            {poster_path == null ? (
              <div className="no-pic relative">
                <span className="icon-place absolute">
                  <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                </span>
              </div>
            ) : (
              <div className="movie-box relative">
                <Img
                  className="poster"
                  src={`${ImageBasic.wUrl}${poster_path}`}
                  alt={title || name}
                />
                <span className="icon absolute">
                  <FontAwesomeIcon className="play-icon" icon={faCirclePlay} />
                </span>
              </div>
            )}
            <h3 className="name mt-2">{title || name}</h3>
          </Link>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="single-movie">
        <div className="container-full">
          <div className=" movie-hero">
            <div>
              {renderMovie()}
              <div />
            </div>
            <div className="casts mb-3 mt-4">
              {credits == null && credits == undefined ? (
                ""
              ) : (
                <h2 className="title mb-3 mt-3">Casts</h2>
              )}
              <ul className="list flex">{renderCasts()}</ul>
            </div>
            <div className="images mb-3 mt-4">
              <h2 className="title mb-3">Some Images for Movie</h2>
              <ul className="list flex">{renderImages()}</ul>
            </div>
            <div className="movie">
              {similar ? (
                <h2 className="title mb-3 mt-3">
                  Similar Titles In Free To Watch
                </h2>
              ) : (
                ""
              )}
              <ul className="list flex">{renderSimilar()}</ul>
              {recommendations ? (
                <h2 className="title mb-3 mt-4">
                  Recommendation Movies To Watch
                </h2>
              ) : (
                ""
              )}
              <ul className="list flex">{renderRecommendations()}</ul>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
