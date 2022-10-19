import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./Search";
const API_URL = "http://www.omdbapi.com/?apikey=51652eeb&";

const Movies = () => {
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const result = await response.json();
    setMovies(result.Search);
  };

  useEffect(() => {
    searchMovies("marvel");
  }, []);

  return (
    <>
      <div
        className="flex flex-wrap
                 sm:justify-start justify-center gap-8 pt-10 pl-10"
      >
        <div className="flex flex-row justify-start items-center border-b-2 border-gray-600 border-solid">
          <FiSearch className="w-5 h-5 ml-4 text-gray-200" />
          <input
            name="search-field"
            id="search-field"
            autoComplete="off"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              searchMovies(searchTerm);
            }}
            className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
          />
          {/* <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              {
                searchMovies(searchTerm);
              }
            }}
          /> */}
        </div>

        {movies?.length > 0 ? (
          <div
            className="flex flex-wrap
          sm:justify-start justify-center gap-8 pt-10"
          >
            {movies.map((movie, i) => (
              <MovieCard movies={movie} i={i} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
