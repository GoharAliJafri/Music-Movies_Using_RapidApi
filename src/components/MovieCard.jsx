import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';



const MovieCard = ({movies, i}) => {
  
  // console.log(movies);
  // console.log(i);

  return(
    <div className='flex flex-col w-[250px] h-[390px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>

      {/* container for image with hover effect */}
      <div className="relative w-full h-65 group">
        {/* hover effect */}
        <div className={`absolute inset-0 justify-center items-center bg-opacity-50 group-hover:flex`}>
          <div 
            movies = {movies}
          />
        </div>

        <img style={{ width: 500, height: 290 }} src={movies.Poster} alt="movie_img"/>
      </div>

      {/* title, sub-title of movies */}
      <div className='mt-4 flex flex-col'>
        <p className="font-semibold text-lg text-white truncate">
          <Link>{movies.Title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link>Released Year : {movies.Year}</Link>
        </p>
      </div>
    </div>
  );
  };

export default MovieCard;
