import React, { useEffect, useState } from "react";
import "./Tv.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const TvList = () => {
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
    let url = `https://api.themoviedb.org/3/tv/${
      type ? type : "popular"
    }?api_key=b74d172af2d07764ccdd7a516ebaec24`;

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/tv?api_key=b74d172af2d07764ccdd7a516ebaec24&query=${encodeURIComponent(
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
      <h2 className="list__title">{(type ? type : "Popular")+" TV Shows"}</h2>
      <form className="search__form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search TV Shows"
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

export default TvList;
