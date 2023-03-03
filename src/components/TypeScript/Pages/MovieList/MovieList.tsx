import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { PopulerData } from "../../../modules/PopulerData";
import { MovieListAction } from "../../../Redux/Actions/MovieListActions/MovieList";
import { MoviesListSelector } from "../../../Redux/Selectors/MoviesList";
import { State } from "../../../Redux/Store";
import Card from "../../Card/Card";
import "./MovieList.css";

type moviesList = ReduxProps;

const MovieList: FC<moviesList> = ({ MoviesListAc, MoviesList }) => {
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
      .then((data) => MoviesListAc(data.results));
  };
  return (
    <div className="movie_list">
      <h2 className="list_title">
        {" "}
        {(type ? type : "POPULER").toUpperCase()}{" "}
      </h2>
      <div className="list_cards">
        {MoviesList?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  MoviesListAc: MovieListAction,
};

const mapStateToProps = (state: State) => {
  return {
    MoviesList: MoviesListSelector(state),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(MovieList);
