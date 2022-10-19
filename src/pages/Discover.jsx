import { useDispatch, useSelector } from 'react-redux';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from '../components';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongByGenreQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

    const {data, isFetching, error} = useGetSongByGenreQuery(genreListId || 'POP');
    console.log(data);
    const genreTitle = genres.find(({value}) => value === genreListId)?.title


    if(isFetching) return <Loader title="Loading songs...." />
    if(error) return <Error />;
    return (
        <div className="flex flex-col">
            {/* header */}
            <Searchbar/>
            <div className="w-full flex justify-between items-center
             sm:flex-row flex-col mt-4 mb-10">


                {/* title */}
                <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>

                {/* right side title selector */}
                <div className='bg-black pr-3 rounded-lg
                    sm:mt-0 mt-5 md:mr-4 mr-0'>
                    <select
                        onChange={(e)=>{dispatch(selectGenreListId(e.target.value))}}
                        value={genreListId || 'POP'}
                        className="bg-black text-gray-300 pt-3 pb-3 pl-3 text-sm rounded-lg outline-none"
                    >
                        {genres.map(genre =>
                            <option key={genre.value} value={genre.value}>
                                {genre.title}
                            </option>
                            )}
                    </select>
                </div>
            </div>

            {/* body: songs list */}
            <div className='flex flex-wrap
                 sm:justify-start justify-center gap-8'>
                    {data.map((song, i) => (
                        <SongCard
                            key = {song.key}
                            song = {song}
                            data = {data}
                            isPlaying = {isPlaying}
                            activeSong = {activeSong}
                            i={i}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Discover;
