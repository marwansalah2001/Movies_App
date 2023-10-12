import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

 const  Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/"><img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/250px-IMDB_Logo_2016.svg.png"></img></Link>
        <Link to="/movies/popular" style={{textDecoration:"none"}} > <span>popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration:"none"}}> <span>UpComings</span></Link>
      </div>
    </div>
  );
};

export default Header
