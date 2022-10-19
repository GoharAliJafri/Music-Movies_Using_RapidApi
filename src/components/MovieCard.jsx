import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';



const MovieCard = ({movie, movies, i}) => {
  // const dispatch = useDispatch();
  
  // console.table(movie);
  // console.log(movies);
  // console.log(movies[i].image);

  return(
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>

      {/* container for image with hover effect */}
      <div className="relative w-full h-56 group">
        {/* hover effect */}
        <div className={`absolute inset-0 justify-center items-center bg-opacity-50 group-hover:flex`}>
          <div 
            movie = {movie}
          />
        </div>

        {/* <img style={{ width: 500, height: 223 }} src={movie.image} alt="movie_img"/> */}
      </div>

      {/* title, sub-title of movies */}
      <div className='mt-4 flex flex-col'>
        <p className="font-semibold text-lg text-white truncate">
          {/* <Link to={`/movies/${i}`}>{movie.title}</Link> */}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {/* <Link to={movie.artists ? `movies/${movie?.artists[0]?.adamid}`: '/top-artists'}>Rated : {movie.rating}</Link> */}
        </p>
      </div>
    </div>
  );
  };

export default MovieCard;
