import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PopulerData } from "../../../modules/PopulerData";
import Card from "../../Card/Card";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState<PopulerData[]>();
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => res.data)
      .then((data) => setMovieList(data.results));
  };
  return (
    <div className="movie_list">
      <h2 className="list_title">
        {" "}
        {(type ? type : "POPULER").toUpperCase()}{" "}
      </h2>
      <div className="list_cards">
        {movieList?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
