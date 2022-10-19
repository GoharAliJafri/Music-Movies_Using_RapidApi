import { configureStore } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://www.omdbapi.com/?apikey=51652eeb";

const MovieHeader = (props) => {
  const [movies, setMovies] = useState([]);
  // const [value, setvalue] = useState([])
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const result = await response.json();
    setMovies(result.Search);
    // localStorage.setItem('movies', JSON.stringify(movies));
  };

  useEffect(() => {
    searchMovies();
    const info = JSON.stringify(movies[props.index]);
    localStorage.setItem("movies", info);
    if(info){
      // setvalue(localStorage.getItem('movies'));
    }
  }, [movies]);

  const [items, setItems] = useState(()=>{
    return JSON.parse(localStorage.getItem('movies')) || []
  });

  // console.log(items);

  return (
    <div className="relative w-full flex flex-col">
      {/* background */}
      <div className="w-full bg-gradient-to-l from-transparent to-black rounded-l-full sm:h-48 h-28" />

      {/* image and text container */}
      <div className="absolute inset-0 flex items-center">
        {/* <img style={{ width: 200, height: 200 }} src={items.Poster} alt="movie_img"/> */}
        <img
          alt="art"
          // replace is used to replace width and height inside url
          src={items.Poster}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        {/* text */}
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {items.Title} 
          </p>
          {/* {!artistId &&(
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-400 mt-2">
            {songData?.subtitle}
          </p>
          </Link>
        )} */}
          <p className="text-base text-gray-400 mt-2"> Released Year
          {items.Year}
        </p>
        </div>
      </div>

      {/* <div className="w-full sm:h-44 h-24 bg-white" /> */}
    </div>
  );
};

export default MovieHeader;
