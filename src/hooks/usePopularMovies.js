import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from '../utils/Constants'
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popu = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        if(!popu) getPopularMovies();
    }, [])

}

export default usePopularMovies;