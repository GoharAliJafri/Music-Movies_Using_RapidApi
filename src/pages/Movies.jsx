import React, { useEffect, useState } from "react";
import { FetchData, ApiOptions } from "../redux/services/moviesCore";
import MovieCard from "../components/MovieCard";
const Movies = () => {

  const moviesData = async () => {
    const response = await FetchData(
      "https://streaming-availability.p.rapidapi.com/search/basic",
      ApiOptions
    );
    // console.log(response.results);
    setMovies(response.results);
    
  };

  const [movies, setMovies] = useState([]);
  // const [searchTerm, setsearchTerm] = useState("");
    // const searchMovies = async (title) => {
    //   const response = await fetch(`${API_URL}&s=${title}`);
    //   const result = await response.json();
    //   setMovies(result.Search);
    // };

    
    useEffect(() => {
      moviesData();
      // searchMovies();
    }, []);
    
    console.log(movies);
  // console.log(movies[0]);

  return (
    <>
      <div className='flex flex-wrap
                 sm:justify-start justify-center gap-8 pt-10 pl-10'>
                    {[movies].map((movie, i) => (
                        <MovieCard
                            // key = {movie.id}
                            movie = {movie}
                            movies = {movies} 
                            i={i}
                        />
                        
                    ))}
            </div>
    </>
  );
};

export default Movies;
