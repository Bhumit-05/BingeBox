import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useMovieVideo = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(video => video.type=='Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailer(trailer));
    }

    
    useEffect(() => {
        getMovieVideo();
    }, [])

}

export default useMovieVideo;