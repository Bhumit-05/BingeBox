import React from 'react'
import { useSelector } from 'react-redux';
import SuggestionCard from './SuggestionCard';

const GptMovieSuggestions = () => {

  const gpt = useSelector(store => store.gpt);
  const movies = gpt.gptMovies;

  if(!movies) return null;

  return (
    <div className='mx-[450px] bg-black/70 text-white px-[80px] py-[16px] -mt-[280px] rounded-xl '>
      <h1 className='ml-auto py-[40px] mr-auto max-w-fit text-4xl text-purple-200 font-extralight'>MOVIE SUGGESTIONS</h1>
      {movies.map(picture => <SuggestionCard key={picture[0].id} movie={picture[0]} />)}
    </div>
  )
}

export default GptMovieSuggestions;