import { useEffect } from 'react'
import { addMoviePageVideo } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants';

const useMoviePageVideo = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector(store => store.movies.moviePageVideo);

    const getMovieVideo = async () => {
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(video => video.type=='Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addMoviePageVideo(trailer));
    }

    //memoization
    useEffect(() => {
        getMovieVideo();
    }, [movieId])
}

export default useMoviePageVideo;