import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import { FcLike } from "react-icons/fc"

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <FcLike />
          </button>
        </div>
      </div>
    </div>
  );
};
