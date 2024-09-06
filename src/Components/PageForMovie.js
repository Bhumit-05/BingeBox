import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import useMoviePageVideo from '../hooks/useMoviePageVideo';
import { resetMoviePageVideo } from '../utils/moviesSlice';
import Header from './Header';
import MoviePageVideoTitle from './MoviePageVideoTitle';

const PageForMovie = () => {
    const location = useLocation();
    const { movie } = location.state;
    const movieId = movie.id;
    const dispatch = useDispatch();
    
    const trailerKey = useSelector( store => store.movies?.moviePageVideo?.key);
    useMoviePageVideo(movieId);

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            dispatch(resetMoviePageVideo());
        };
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <MoviePageVideoTitle movie={movie}/>
            {trailerKey && (
                <iframe 
                    className='w-screen aspect-video '
                    src={"https://www.youtube.com/embed/" + trailerKey+ "?&autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist="+trailerKey}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            )}
        </div>
      )
}

export default PageForMovie;