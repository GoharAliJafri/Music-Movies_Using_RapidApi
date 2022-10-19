import React, { useEffect, useState } from "react";
import MovieHeader from "../components/MovieHeader";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FetchData, ApiOptions } from "../redux/services/moviesCore";

const MovieDetails = () => {
    const { id: j } = useParams();
//   console.log(j);


const moviesData = async () => {
  try{
    
    const response = await FetchData(
      "http://www.omdbapi.com/?i=tt3896198",
      ApiOptions
      );
      setMovies(response.results);
      console.log(response.results);
    }catch(err)
    {
      console.log(err);
    }
  };
  
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    moviesData();
  }, []);

  console.log(movies);

  return (
    <div className="flex flex-col">
      {/* {movies.map((movie, j) => (
        <MovieHeader movie={movie} movies={movies} j={j} />
      ))} */}

    {/* <div className="users">
      {movies.map((title) => (
        <div className="user">{title}</div>
      ))}
    </div> */}

      {/* <RelatedSongs 
                data = {Object.values(artistData?.songs)}
                artistId = {artistId}
                isPlaying = {isPlaying}
                activeSong = {activeSong}
            /> */}
    </div>
  );
};

export default MovieDetails;
