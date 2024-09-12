import React from 'react'
import { useSelector } from 'react-redux';
import SuggestionCard from './SuggestionCard';

const GptMovieSuggestions = () => {

  const gpt = useSelector(store => store.gpt);
  const movies = gpt.gptMovies;

  if(!movies) return null;

  return (
    <div className='mx-[450px] md:w-auto w-[385px] bg-black/70 text-white md:px-[80px] md:py-[16px] -mt-[280px] rounded-xl pt-[100px] '>
      <h1 className=' md:py-[40px] py-[20px] mx-auto max-w-fit md:text-4xl text-3xl text-purple-200 font-extralight'>MOVIE SUGGESTIONS</h1>
      {movies.map((picture, index) => <SuggestionCard key={index} movie={picture[0]} />)}
    </div>
  )
}

export default GptMovieSuggestions;