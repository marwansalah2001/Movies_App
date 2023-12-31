import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    let url = `https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=b74d172af2d07764ccdd7a516ebaec24`;

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=b74d172af2d07764ccdd7a516ebaec24&query=${encodeURIComponent(
        searchQuery
      )}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "Popular")+" Movies"}</h2>
      <form className="search__form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
