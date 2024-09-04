import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth'
    });
  };
  console.log(movies);

  return (
    <div className='relative'>

      <div className='pt-[50px] text-4xl  text-custom-gold font-thin font-sans ml-[35px]'><h1>{title}</h1></div>
      <div className='relative flex overflow-x-scroll no-scrollbar' ref={scrollContainerRef}>
        <div className='flex'>
          {movies?.map(picture => <MovieCard key={picture.id} movie={picture}/> )}
        </div>
      </div>

      <button 
        className='absolute top-[65%] text-4xl flex items-center justify-center rounded-full w-[50px] h-[50px] left-2 transform -translate-y-1/2 bg-white text-black z-50 p-2'
        onClick={scrollLeft}
      >
        &#8249;
      </button>
      <button 
        className='absolute top-[65%] text-4xl flex items-center justify-center rounded-full right-1 w-[50px] h-[50px] transform -translate-y-1/2 bg-white text-black z-50 p-2'
        onClick={scrollRight}
      >
        &#8250;
      </button>
    </div>
  )
}

export default MovieList;
