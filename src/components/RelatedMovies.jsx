import SongBar from './SongBar';
const RelatedMovies = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => {

  return(
    <div className='flex flex-col mt-3'>
      <h1 className='font-bold text-3xl text-white'>
        Related Songssss:
      </h1>

      <div className='mt-6 w-full flex flex-col'>
        {data?.map((song, i)=>(
          <SongBar 
            key = {`${song.key}-${artistId}-${i}`}
            song = {song}
            i = {i}
            artistId = {artistId}
            isPlaying = {isPlaying}
            activeSong = {activeSong}
            handlePauseClick = {handlePauseClick}
            handlePlayClick = {handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
