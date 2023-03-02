import React from "react";
import { Link } from "react-router-dom";
import SerachBar from "../../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          {" "}
          <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />{" "}
        </Link>

        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span className="">Populer</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span className="">Top Rated</span>{" "}
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span className="">Upcoming</span>
        </Link>
        <SerachBar />
      </div>
    </div>
  );
};

export default Navbar;
