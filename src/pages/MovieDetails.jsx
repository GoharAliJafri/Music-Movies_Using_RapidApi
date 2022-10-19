import React, { useEffect, useState } from "react";
import MovieHeader from "../components/MovieHeader";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


const MovieDetails = () => {
    const { id: i } = useParams();

  return (
    <div className="flex flex-col mt-10">
        <MovieHeader index={i}/>

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
