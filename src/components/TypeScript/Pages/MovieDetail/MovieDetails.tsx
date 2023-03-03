import axios from "axios";
import { useEffect, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieDetailsAction } from "../../../Redux/Actions/MovieDetailsActions/MovieDetials";
import { MoviesDetailsSelector } from "../../../Redux/Selectors/MoviesDetailsSel";
import { State } from "../../../Redux/Store";
import "./MovieDetails.css";

type MovieDetailsProps = ReduxProps;

const MovieDetails: FC<MovieDetailsProps> = ({
  MovieDetailsAC,
  movieDetails,
}) => {
  console.log("movieDetailss", movieDetails);
  console.log("movieDetails", movieDetails);

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => res.data)
      .then((response) => MovieDetailsAC(response));
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movieDetails ? movieDetails.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                movieDetails ? movieDetails.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {movieDetails ? movieDetails.original_title : ""}
            </div>
            <div className="movie__tagline">
              {movieDetails ? movieDetails.tagline : ""}
            </div>
            <div className="movie__rating">
              {movieDetails ? movieDetails.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {movieDetails ? "(" + movieDetails.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {movieDetails ? movieDetails.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {movieDetails ? "Release date: " + movieDetails.release_date : ""}
            </div>
            <div className="movie__genres">
              {movieDetails && movieDetails.genres
                ? movieDetails.genres.map((genre) => (
                    <>
                      <span className="movie__genre" key={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movieDetails ? movieDetails.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {movieDetails && movieDetails.homepage && (
          <a
            href={movieDetails.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {movieDetails && movieDetails.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetails.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {movieDetails &&
          movieDetails.production_companies &&
          movieDetails.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  MovieDetailsAC: MovieDetailsAction,
};

const mapStateToProps = (state: State) => {
  return {
    movieDetails: MoviesDetailsSelector(state),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(MovieDetails);
