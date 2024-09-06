import React from "react";
import Card from "./Card";
import "./Main.css";
import { useContext } from "react";
import { MyContext } from "../App";

const Main = ({ showType }) => {
  console.log(showType);
  const { isDarkMode } = useContext(MyContext);
  return (
    <>
      <div
        className={`card-content first-card ${isDarkMode ? "dark-mode" : ""}`}
      >
        <h2>Trending</h2>
        {showType === "movie" ? (
          <p className="desctiption-type">Get the trending movies.</p>
        ) : (
          <p className="desctiption-type">Get the trending TV shows.</p>
        )}
        <Card
          url={
            showType === "movie"
              ? "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
              : "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
          }
          showType={showType}
        />
      </div>
      <div className={`card-content ${isDarkMode ? "dark-mode" : ""}`}>
        {showType === "movie" ? <h2>Now Playing</h2> : <h2>Airing Today</h2>}
        {showType === "movie" ? (
          <p className="desctiption-type">
            Get a list of movies that are currently in theatres.
          </p>
        ) : (
          <p className="desctiption-type">
            Get a list of TV shows airing today.
          </p>
        )}
        <Card
          url={
            showType === "movie"
              ? "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
              : "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
          }
        />
      </div>
      <div className={`card-content ${isDarkMode ? "dark-mode" : ""}`}>
        {showType === "movie" ? <h2>Upcoming</h2> : <h2>On The Air</h2>}
        {showType === "movie" ? (
          <p className="desctiption-type">
            Get a list of movies that are being released soon.
          </p>
        ) : (
          <p className="desctiption-type">
            Get a list of TV shows that air in the next 7 days.
          </p>
        )}
        <Card
          url={
            showType === "movie"
              ? "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
              : "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1"
          }
        />
      </div>
    </>
  );
};

export default Main;
