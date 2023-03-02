import { useEffect, useState, FC } from "react";

import axios from "axios";
import { PopulerData } from "../../../modules/PopulerData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import MovieList from "../MovieList/MovieList";
import { PopulerMoviesAction } from "../../../Redux/Actions/HomeActions/PopulerMovies";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../../Redux/Store";
import { PopulerMoviesSelector } from "../../../Redux/Selectors/PopulerMovies";

type PopulerMoviesProps = ReduxProps;

const Home: FC<PopulerMoviesProps> = ({ PopulerMoviesAC, PopulerMovies }) => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((res) => res.data)
      .then((response) => {
        PopulerMoviesAC(response.results);
      });
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
        {PopulerMovies?.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original
${movie && movie.backdrop_path}`}
              />
            </div>
            <div className="posterImage_overlay">
              <div className="posterImage_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage_runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="posterImage_description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

const mapDispatchToProps = {
  PopulerMoviesAC: PopulerMoviesAction,
};

const mapStateToProps = (state: State) => {
  return {
    PopulerMovies: PopulerMoviesSelector(state),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Home);
