import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../Components/MovieList/movieList";
import TvList from "../../Components/TvList/TV";

const Home = () => {

  
  const [popularMovies, SetPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b74d172af2d07764ccdd7a516ebaec24"
    )
      .then((result) => result.json())
      .then((data) => SetPopularMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage" key={movie.id}>
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                }
              ></img>{" "}
              <span>{movie.original_title}</span>
            </div>

            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {movie ? movie.original_title : ""}{" "}
              </div>
              <div className="posterImage__runtime">
                <span className="posterImage__date"> {movie ? movie.release_date : ""} </span>
                <span className="posterImage__rating">
                  {movie ? movie.vote_average : ""}
                  <i
                    className="fas fa-star"
                    style={{ marginLeft: "1rem" }}
                  ></i>{" "}
                </span>
              </div>

              <div className="posterImage__description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>

      <MovieList/>
      <TvList/>
    </div>
  );
};

export default Home;
